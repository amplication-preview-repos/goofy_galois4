import { User } from "../user/User";

export type Retweet = {
  createdAt: Date;
  id: string;
  originalTweet: string | null;
  updatedAt: Date;
  user?: User | null;
};
