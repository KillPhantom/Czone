from pymemcache.client.base import Client


class MemCacheKey:
    LAST_END_BLOCK_NUMBER = "last_query_end_block_number"


class MemCacheClient:
    def __init__(self):
        self.client = Client("localhost")

    def set_cache(self, key, value):
        self.client.set(key, value)

    def get_cache(self, key):
        return self.client.get(key)

