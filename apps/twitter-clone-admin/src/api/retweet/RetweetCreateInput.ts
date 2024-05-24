import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetCreateInput = {
  originalTweet?: string | null;
  user?: UserWhereUniqueInput | null;
};
