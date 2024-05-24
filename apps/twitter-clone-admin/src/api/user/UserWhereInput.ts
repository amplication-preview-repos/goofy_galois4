import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  retweets?: RetweetListRelationFilter;
  username?: StringNullableFilter;
};
