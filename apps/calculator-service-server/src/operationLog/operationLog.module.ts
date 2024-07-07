import { Module } from "@nestjs/common";
import { OperationLogModuleBase } from "./base/operationLog.module.base";
import { OperationLogService } from "./operationLog.service";
import { OperationLogController } from "./operationLog.controller";
import { OperationLogResolver } from "./operationLog.resolver";

@Module({
  imports: [OperationLogModuleBase],
  controllers: [OperationLogController],
  providers: [OperationLogService, OperationLogResolver],
  exports: [OperationLogService],
})
export class OperationLogModule {}
