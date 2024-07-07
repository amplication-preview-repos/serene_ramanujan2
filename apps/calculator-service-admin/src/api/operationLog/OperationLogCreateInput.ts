import { OperationWhereUniqueInput } from "../operation/OperationWhereUniqueInput";

export type OperationLogCreateInput = {
  timestamp?: Date | null;
  operation?: OperationWhereUniqueInput | null;
};
