import { ChatRoom } from "../chatRoom/ChatRoom";

export type Message = {
  chatRoom?: ChatRoom | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
