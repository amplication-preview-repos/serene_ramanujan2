import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OperationLogService } from "./operationLog.service";
import { OperationLogControllerBase } from "./base/operationLog.controller.base";

@swagger.ApiTags("operationLogs")
@common.Controller("operationLogs")
export class OperationLogController extends OperationLogControllerBase {
  constructor(protected readonly service: OperationLogService) {
    super(service);
  }
}
