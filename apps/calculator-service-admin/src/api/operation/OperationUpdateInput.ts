import { OperationLogUpdateManyWithoutOperationsInput } from "./OperationLogUpdateManyWithoutOperationsInput";

export type OperationUpdateInput = {
  num1?: number | null;
  num2?: number | null;
  result?: number | null;
  operationType?: "Option1" | null;
  operationLogs?: OperationLogUpdateManyWithoutOperationsInput;
};
