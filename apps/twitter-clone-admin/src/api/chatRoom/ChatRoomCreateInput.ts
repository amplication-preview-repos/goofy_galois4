import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: string | null;
};
