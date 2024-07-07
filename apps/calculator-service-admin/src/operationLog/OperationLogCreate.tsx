import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OperationTitle } from "../operation/OperationTitle";

export const OperationLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput
          source="operation.id"
          reference="Operation"
          label="Operation"
        >
          <SelectInput optionText={OperationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
