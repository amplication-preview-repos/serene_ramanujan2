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
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumOperationOperationType } from "./EnumOperationOperationType";
import { OperationLogCreateNestedManyWithoutOperationsInput } from "./OperationLogCreateNestedManyWithoutOperationsInput";
import { Type } from "class-transformer";

@InputType()
class OperationCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  num1?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  num2?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  result?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumOperationOperationType,
  })
  @IsEnum(EnumOperationOperationType)
  @IsOptional()
  @Field(() => EnumOperationOperationType, {
    nullable: true,
  })
  operationType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => OperationLogCreateNestedManyWithoutOperationsInput,
  })
  @ValidateNested()
  @Type(() => OperationLogCreateNestedManyWithoutOperationsInput)
  @IsOptional()
  @Field(() => OperationLogCreateNestedManyWithoutOperationsInput, {
    nullable: true,
  })
  operationLogs?: OperationLogCreateNestedManyWithoutOperationsInput;
}

export { OperationCreateInput as OperationCreateInput };
