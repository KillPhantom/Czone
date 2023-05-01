import axios from "axios";

export default (async function FetchUsersTweetsServices(
  urls: Array<string>,
  maxTweetsPerUrl: number
): Promise<any> {
  const { data } = await axios.post("api/fetch-users-tweets", {
    urls: urls,
    max_tweets_per_url: maxTweetsPerUrl,
  });

  return data.data;
});
