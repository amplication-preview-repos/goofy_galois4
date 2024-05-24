import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetWhereInput = {
  id?: StringFilter;
  originalTweet?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
