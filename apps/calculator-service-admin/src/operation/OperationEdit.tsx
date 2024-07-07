import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OperationLogTitle } from "../operationLog/OperationLogTitle";

export const OperationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="num1" source="num1" />
        <NumberInput label="num2" source="num2" />
        <NumberInput label="result" source="result" />
        <SelectInput
          source="operationType"
          label="operationType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="operationLogs"
          reference="OperationLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OperationLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
