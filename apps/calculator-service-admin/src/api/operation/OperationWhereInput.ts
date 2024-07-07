import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OperationLogListRelationFilter } from "../operationLog/OperationLogListRelationFilter";

export type OperationWhereInput = {
  id?: StringFilter;
  num1?: FloatNullableFilter;
  num2?: FloatNullableFilter;
  result?: FloatNullableFilter;
  operationType?: "Option1";
  operationLogs?: OperationLogListRelationFilter;
};
