import * as graphql from "@nestjs/graphql";
import { OperationLogResolverBase } from "./base/operationLog.resolver.base";
import { OperationLog } from "./base/OperationLog";
import { OperationLogService } from "./operationLog.service";

@graphql.Resolver(() => OperationLog)
export class OperationLogResolver extends OperationLogResolverBase {
  constructor(protected readonly service: OperationLogService) {
    super(service);
  }
}
