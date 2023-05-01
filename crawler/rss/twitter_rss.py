import feedparser
from discord import Embed
from bs4 import BeautifulSoup
from dateutil import parser

from crawler.rss.twitter_api import TwitterAPI

RSS_BASE_URL = "http://127.0.0.1:1200/twitter/"


class TwitterRSSReader:
    def __init__(self, mode=None):
        self.mode = 1

    @classmethod
    def fetch_user_tweets(cls, user_name, tweet_only=True):
        base_link = RSS_BASE_URL + "user/" + str(user_name)
        if tweet_only:
            base_link += "/exclude_rts_replies"

        feed = feedparser.parse(base_link)
        raw_dict = None
        if feed:
            raw_dict = cls._parse_raw_rss_feed(feed, include_reply=True)

        if not raw_dict:
            return None
        result = [Embed.from_dict(raw_dict)]

        return result

    @classmethod
    def fetch_tweet_thread_dicts(cls, conv_id):
        client = TwitterAPI()
        result = client.search_thread_by_conv_id(conv_id)
        dicts = []
        for (index, data) in enumerate(result):
            dicts.append(
                {
                    "name": "thread " + str(index),
                    "value": data.get("text"),
                }
            )
        return dicts

    @classmethod
    def _parse_raw_rss_feed(cls, feed, include_reply):
        if not feed:
            return None
        data = feed.get("entries")[5]
        author_data = feed.get("feed")
        result = {}
        result.update(
            {
                "type": "rich",
                "title": "source ",
                "timestamp": parser.parse(data.get("published")).isoformat(),
                "author": {
                    "name": data.get("author"),
                    "url": author_data.get("link"),
                    "icon_url": author_data.get("image").get("href"),
                },
                "url": data.get("link"),
            }
        )
        conv_id = data.get("link").split("/")[-1]
        if include_reply:
            thread_dicts = cls.fetch_tweet_thread_dicts(conv_id)
            for item in thread_dicts:
                result.update({
                    "fields":thread_dicts
                })
        # parse <a> in the feed
        summary = data.get("summary")
        soup = BeautifulSoup(summary, "html.parser")
        field = []
        text = soup.find_all(text=True)
        body = "".join(list(text))
        result.update({"description": body})
        for item in soup.find_all("a"):
            if not item.get("href"):
                continue
            external_link = {
                "name": "External link",
                "value": item.get("href"),
            }
            field.append(external_link)
        for item in soup.find_all("img"):
            source = item.get("src")
            if not source:
                continue
            if "&" in source:
                source = source.split("&")[0]
            result.update(
                {
                    "image": {
                        "url": source,
                        "height": 180,
                        "width": 200,
                    }
                }
            )
            break
        result.update({"field": field})

        return result
