import { OperationLog } from "../operationLog/OperationLog";

export type Operation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  num1: number | null;
  num2: number | null;
  result: number | null;
  operationType?: "Option1" | null;
  operationLogs?: Array<OperationLog>;
};
