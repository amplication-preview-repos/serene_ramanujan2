import { OperationLogCreateNestedManyWithoutOperationsInput } from "./OperationLogCreateNestedManyWithoutOperationsInput";

export type OperationCreateInput = {
  num1?: number | null;
  num2?: number | null;
  result?: number | null;
  operationType?: "Option1" | null;
  operationLogs?: OperationLogCreateNestedManyWithoutOperationsInput;
};
