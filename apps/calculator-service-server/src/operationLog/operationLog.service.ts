import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperationLogServiceBase } from "./base/operationLog.service.base";

@Injectable()
export class OperationLogService extends OperationLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
