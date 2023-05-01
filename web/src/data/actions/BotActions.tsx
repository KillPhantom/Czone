import FetchUsersTweetsServices from "@services/FetchUsersTweetsServices";

export const FETCH_USERS_TWEETS = "FETCH_USER_TWEETS" as const;

export const fetchUsersTweets = (urls: Array<string>) => ({
  type: FETCH_USERS_TWEETS,
  payload: FetchUsersTweetsServices,
});
