import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RetweetUpdateManyWithoutUsersInput } from "./RetweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  retweets?: RetweetUpdateManyWithoutUsersInput;
  username?: string | null;
};
