import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatRoomWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  participants?: StringNullableFilter;
};
