export type TwitterInfoType = {
  author: string;
  content: string;
  image: string;
};

export type MessageInfoType = {
  author: string;
  authorProfileImgUrl?: string;
  contentTitle?: string;
  contentText?: string;
  imageUrl?: string;
  isBot: boolean;
  source?: number;
  likeNumber: number;
  commentsNumber: number;
  id: string;
  publishDisplayTime: string;
};

export type TweetsResponseType = {
  text: string;
  created_at: string;
  retweet_count: number;
  like_count: number;
  reply_count: number;
  quote_count: number;
};

export type CommentType = {
  author: string;
  profileImgUrl?: string;
  timeStamp: string;
  contentText?: string;
  thumbUpNumber: number;
  thumbDownNumber: number;
};

export type UserInfoType = {
  author: string;
  profileImgUrl?: string;
  timeStamp: string;
  contentText?: string;
};
