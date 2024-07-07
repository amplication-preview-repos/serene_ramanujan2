/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OperationWhereUniqueInput } from "../../operation/base/OperationWhereUniqueInput";

@InputType()
class OperationLogCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

  @ApiProperty({
    required: false,
    type: () => OperationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OperationWhereUniqueInput)
  @IsOptional()
  @Field(() => OperationWhereUniqueInput, {
    nullable: true,
  })
  operation?: OperationWhereUniqueInput | null;
}

export { OperationLogCreateInput as OperationLogCreateInput };
