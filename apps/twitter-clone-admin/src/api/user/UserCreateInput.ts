import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RetweetCreateNestedManyWithoutUsersInput } from "./RetweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  retweets?: RetweetCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
