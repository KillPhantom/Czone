import tweepy


class TweepyClient:
    def __init__(self) -> None:
        bearer_token = "AAAAAAAAAAAAAAAAAAAAAEUaiwEAAAAAGB%2BNM8PLSAuQekD3yqbjEQ0TkOw%3DFmaGE9eK8AuPbAyD26QUgO6l4isgNXnPvHW6aq5lX7MGe6KWDc"
        consumer_key = ""
        consumer_secret = ""
        access_token = ""
        access_token_secret = ""
        # self.client = tweepy.Client(
        #     consumer_key=consumer_key,
        #     consumer_secret=consumer_secret,
        #     access_token=access_token,
        #     access_token_secret=access_token_secret,
        # )
        self.client = tweepy.Client(bearer_token)

    def fetch_tweets_by_profile_urls(self, urls, count=10):
        """
        UserTweetsObject
        {
            "id": string
            "username": string
            "name": string
            "profile_image_url: string
            "tweets":[
                {
                    text: string,
                    created_at: datetime,
                    retweet_count: number,
                    like_count: number,
                    reply_count: number,
                    quote_count: number,
                }
            ]

        }
        This function returns array of user tweet object
        """
        user_names = [url.split("/")[-1].strip() for url in urls]
        user_dicts = []
        try:
            response = self.client.get_users(
                usernames=user_names, user_fields=["profile_image_url"]
            )
            user_dicts = [
                dict(
                    id=data.id,
                    name=data.name,
                    username=data.username,
                    profile_image_url=data.profile_image_url,
                )
                for data in response.data
            ]
        except Exception as e:
            print("Error when fetching user id --- ", str(e))

        for user_dict in user_dicts:
            try:
                response = self.client.get_users_tweets(
                    str(user_dict["id"]),
                    tweet_fields=["public_metrics", "created_at"],
                    max_results=count,
                )

                tweet_dict = [
                    dict(
                        text=data.text,
                        created_at=data.created_at.strftime("%m/%d/%Y, %H:%M:%S"),
                        retweet_count=data.public_metrics.get("retweet_count"),
                        like_count=data.public_metrics.get("like_count"),
                        reply_count=data.public_metrics.get("reply_count"),
                        quote_count=data.public_metrics.get("quote_count"),
                    )
                    for data in response.data
                ]
                user_dict["tweets"] = tweet_dict
            except Exception as e:
                print("Error when fetching user tweets --- ", str(e))

        return user_dicts


# if __name__ == "__main__":
#     client = TweepyClient()
#     urls = ["https://twitter.com/0xmster", "https://twitter.com/Kbeast420"]
#     user_tweets = client.fetch_tweets_by_profile_urls(urls)
#     print(user_tweets)

