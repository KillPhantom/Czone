from handler.base_handler import BaseHandler
from crawler.tweepy.client import TweepyClient
import json


class FetchTweetsHandler(BaseHandler):
    def post(self):
        request_body = json.loads(self.request.body)
        profile_urls = request_body.get("urls")
        max_tweets_per_url = request_body.get("max_tweets_per_url")
        client = TweepyClient()
        user_tweets = client.fetch_tweets_by_profile_urls(profile_urls, count=max_tweets_per_url)
        self.write({"data": user_tweets})
