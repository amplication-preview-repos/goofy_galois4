import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Retweet } from "../retweet/Retweet";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profilePicture: JsonValue;
  retweets?: Array<Retweet>;
  updatedAt: Date;
  username: string | null;
};
