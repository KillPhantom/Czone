import base64
import datetime
import random
import time
from collections import namedtuple

import msgpack

from cache import MemcacheClient

_Entry = namedtuple("_Entry", ["timestamp", "hits"])

_ExtendedEntry = namedtuple("_Entry", ["timestamp", "field", "hits"])

_IdEntry = namedtuple("_Entry", ["timestamp", "field", "key_id"])

# Memcache can support upto 2592000 seconds as relative expiration time.
# Any number larger than this will be interpreted as absolute time, i.e.,
# unix epoch time.
MAX_EXPIRE_SECONDS = 60 * 60 * 24 * 30


class RateLimiter(object):
    """
    A simple general purpose rate limiter that uses memcache.
    Rate limits based on a rolling window - i.e. rate limits based on
    the statement "this can be hit at most n times within a m minute window"
    Minutes last 64 seconds.

    Suggested use is by IP, but it's not necessary.
    """

    def __init__(self, namespace, max_hits, period_minutes):
        """
        namespace      : namespace to rate limit (API name)
        max_hits       : maximum number of hits allowed in the period given
        period_minutes : duration in minutes of the window

        Important:
            TL;DR: if period_minutes > 20250, or expire_time > 20250 * 2 * 64 =
            2592000, Memcache key will be placed with epoch unix time instead of
            relative expiration duration.

            This is due to Memcached doesn't support expiration duration longer
            than 30 days(which is 2592000 in seconds), and instead client
            interprets it as unix epoch time.

        NOTE: the Memcached client must already be initialized
        """
        self.namespace = namespace
        self.max_hits = max_hits
        self.period = period_minutes
        self.expire_time = 2 * self.period * 64
        self.hits = 0

    def _get_expire_time(self):
        """
        :return: absolute expiration time(unix epoch time) if self.expire_time >
            MAX_EXPIRE_SECONDS else relative expiration time.
        TL;DR:
        Any number larger than 30d will be interpreted as unix epoch time.
        ref: https://github.com/memcached/memcached/wiki/Programming#expiration

        The purpose of using this util function is that we want to allow an
        input of absolute time expire_time that is higher than the 30 days limit
        on Memcached end for our own use of the RateLimiter class. We achieve
        this by converting any absolute time that is greater than the 30 days,
        or 2592000 seconds, to a relative unix timestamp. By doing so, any
        expire time that is input to our RateLimiter that is longer than 30 days
        can be correctly and accurately captured by Memcached client.
        """
        if self.expire_time > MAX_EXPIRE_SECONDS:
            return int(time.time()) + self.expire_time
        return self.expire_time

    @property
    def mc_client(self):
        return MemcacheClient().client

    def hit(self, client):
        """
        Mark a client as hitting the service.

        Return True if the client should be allowed to access the service
        Return False if the client has exceeded the rate limit
        """
        key = self.get_memcache_key(client)
        value = self.mc_client.get(key)
        if not value:
            value = list()
        else:
            value = self._unpack(value)
        self._update_hits(value)
        hits = sum(v.hits for v in value)
        if hits > self.max_hits:
            return False
        # don't count it as a hit if we return false
        self.mc_client.set(key, self._pack(value), expire=self._get_expire_time())
        return True

    def check_can_hit(self, client):
        """
        Check if client can access the service without performing an update
        Return True if the client can access the service
        Return False if the client will exceed the rate limit
        """
        key = self.get_memcache_key(client)
        value = self.mc_client.get(key)
        if not value:
            value = list()
        else:
            value = self._unpack(value)
        hits = sum(v.hits for v in value) + 1  # add 1 to simulate a hit
        if hits > self.max_hits:
            return False
        return True

    # value should be a list of tuples (unix timestamp >> 6, hits)
    # ordered by time ascending
    def _update_hits(self, value):
        # combines _clean_hits and _add_hit

        # caching the timestamp so we don't make 2 calls to datetime with
        # potentially different results
        timestamp = self.get_timestamp()
        self._clean_hits(value, timestamp=timestamp)
        self._add_hit(value, timestamp=timestamp)

    # clears out any stored hits older than the period length
    # returns True if any values were cleared
    def _clean_hits(self, value, timestamp=None):
        if timestamp is None:
            timestamp = self.get_timestamp()
        ret = False
        while value:
            min_diff = timestamp - value[0].timestamp
            if min_diff < self.period:
                break
            value.pop(0)
            ret = True
        return ret

    # adds a new hit to indicate this access
    def _add_hit(self, value, timestamp=None, amount=1):
        if timestamp is None:
            timestamp = self.get_timestamp()
        if len(value) > 0 and value[-1].timestamp == timestamp:
            value[-1] = _Entry(timestamp, value[-1].hits + amount)
        else:
            value.append(_Entry(timestamp, amount))

    def get_timestamp(self):
        cur_time = datetime.datetime.now().replace(microsecond=0)
        # div by 64 ~ transform to minutes (for small values of minutes)
        return int(time.mktime(cur_time.timetuple())) >> 6

    def get_memcache_key(self, client):
        if isinstance(client, unicode):
            client = client.encode("utf-8")
        client = base64.b64encode(client)
        return "rl.v2-{}-{}".format(self.namespace, client)

    # msgpack strips type information so we have to put it back
    def _unpack(self, value):
        return [_Entry(*tup) for tup in msgpack.loads(value)]

    def _pack(self, value):
        return msgpack.dumps(value)
