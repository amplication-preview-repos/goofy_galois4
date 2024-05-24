import { SortOrder } from "../../util/SortOrder";

export type RetweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originalTweet?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
