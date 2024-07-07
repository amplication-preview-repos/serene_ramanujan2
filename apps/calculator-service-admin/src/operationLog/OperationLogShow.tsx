import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { OPERATION_TITLE_FIELD } from "../operation/OperationTitle";

export const OperationLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="timestamp" source="timestamp" />
        <ReferenceField
          label="Operation"
          source="operation.id"
          reference="Operation"
        >
          <TextField source={OPERATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
