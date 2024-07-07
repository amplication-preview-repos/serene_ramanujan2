import { OperationLog as TOperationLog } from "../api/operationLog/OperationLog";

export const OPERATIONLOG_TITLE_FIELD = "id";

export const OperationLogTitle = (record: TOperationLog): string => {
  return record.id?.toString() || String(record.id);
};
