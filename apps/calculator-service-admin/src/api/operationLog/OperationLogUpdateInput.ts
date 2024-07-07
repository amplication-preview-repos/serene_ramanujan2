import { OperationWhereUniqueInput } from "../operation/OperationWhereUniqueInput";

export type OperationLogUpdateInput = {
  timestamp?: Date | null;
  operation?: OperationWhereUniqueInput | null;
};
