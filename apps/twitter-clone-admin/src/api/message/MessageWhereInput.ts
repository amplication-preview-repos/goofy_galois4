import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  chatRoom?: ChatRoomWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
