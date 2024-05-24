import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  content?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
};
