import { SortOrder } from "../../util/SortOrder";

export type OperationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  num1?: SortOrder;
  num2?: SortOrder;
  result?: SortOrder;
  operationType?: SortOrder;
};
