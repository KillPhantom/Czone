import type { MessageInfoType } from "@type/MessageTypes";

export const formatAddressDisplayHash = (hash: string | undefined | null) => {
  if (!hash || hash.length < 5) {
    return "";
  }
  const first4digit = hash.substring(0, 5);
  const last4digit = hash.substring(hash.length - 4);

  return first4digit + "..." + last4digit;
};

export const formatTwitterApiResponse = (data: any): Array<MessageInfoType> => {
  let result = [];
  for (const tweet of data.tweets) {
    result.push({
      author: data.name,
      authorProfileImgUrl: data.profile_image_url,
      contentText: tweet.text,
      imageUrl: tweet.image_url,
      isBot: true,
      source: 1,
      likeNumber: tweet.like_count,
      commentsNumber: tweet.reply_count,
      id: tweet.id,
      publishDisplayTime: tweet.created_at,
    });
  }
  return result;
};
