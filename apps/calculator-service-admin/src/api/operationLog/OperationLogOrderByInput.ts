import { SortOrder } from "../../util/SortOrder";

export type OperationLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  operationId?: SortOrder;
};
