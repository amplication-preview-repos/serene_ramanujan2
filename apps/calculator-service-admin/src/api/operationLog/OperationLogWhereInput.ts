import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OperationWhereUniqueInput } from "../operation/OperationWhereUniqueInput";

export type OperationLogWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  operation?: OperationWhereUniqueInput;
};
