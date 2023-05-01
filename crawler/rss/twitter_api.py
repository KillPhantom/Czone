import requests
import json
from dateutil import parser


class TwitterAPI:
    BEAR_TOKEN = "AAAAAAAAAAAAAAAAAAAAAEUaiwEAAAAA3k%2FYzvXzRnMm6mFzCmDO94rQOno%3DVZZwKmvC8B2AatHoczuLqS5SX2s9KBNLOWVO2JnVGeZVy7F0zg"
    URL = "https://api.twitter.com/2/tweets/"
    USER_URL = "https://api.twitter.com/2/users/"
    MAX_REPLY_THREAD = 5

    @classmethod
    def get_twitter_user_name_by_id(cls, user_id):
        url = cls.USER_URL + str(user_id)
        response = requests.request("GET", url, auth=cls.bearer_oauth)
        result = response.json()
        return result.get("data").get("username")

    @classmethod
    def search_thread_by_conv_id(cls, conv_id):
        thread_url = cls.URL + "search/recent?query=conversation_id:{}&{}".format(
            conv_id, "tweet.fields=in_reply_to_user_id,author_id,created_at"
        )
        response = requests.request("GET", thread_url, auth=cls.bearer_oauth)
        if response.status_code != 200:
            raise Exception(
                "Request returned an error: {} {}".format(
                    response.status_code, response.text
                )
            )
        result = response.json()
        data = result.get("data")
        replies = []
        if not data:
            return replies
        for item in data[:cls.MAX_REPLY_THREAD]:
            timestamp = parser.parse(item.get("created_at")).isoformat()
            text = item.get("text")
            author_id = item.get("author_id")
            replies.append(
                {
                    "timestamp": timestamp,
                    "text": text,
                    "author_id": author_id,
                    # "author_name": cls.get_twitter_user_name_by_id(author_id),
                }
            )
        return replies

    @classmethod
    def bearer_oauth(cls, request):
        """
        Method required by bearer token authentication.
        """

        request.headers["Authorization"] = f"Bearer {cls.BEAR_TOKEN}"
        request.headers["User-Agent"] = "v2TweetLookupPython"
        return request


if __name__ == "__main__":
    client = TwitterAPI()
    result = client.search_thread_by_conv_id("1587047472891056129")
    print(result)
