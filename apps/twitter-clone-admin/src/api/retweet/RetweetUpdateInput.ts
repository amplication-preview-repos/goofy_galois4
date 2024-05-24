import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetUpdateInput = {
  originalTweet?: string | null;
  user?: UserWhereUniqueInput | null;
};
