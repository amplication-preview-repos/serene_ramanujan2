import { OperationLogWhereInput } from "./OperationLogWhereInput";
import { OperationLogOrderByInput } from "./OperationLogOrderByInput";

export type OperationLogFindManyArgs = {
  where?: OperationLogWhereInput;
  orderBy?: Array<OperationLogOrderByInput>;
  skip?: number;
  take?: number;
};
