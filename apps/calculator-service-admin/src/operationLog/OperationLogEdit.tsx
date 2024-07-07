import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OperationTitle } from "../operation/OperationTitle";

export const OperationLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
