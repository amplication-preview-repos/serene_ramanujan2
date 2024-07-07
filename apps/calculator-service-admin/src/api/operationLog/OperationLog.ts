import { Operation } from "../operation/Operation";

export type OperationLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  operation?: Operation | null;
};
