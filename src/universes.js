import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ReferenceManyField,
} from "react-admin";
import { WordCountField } from "./components/WordCountField";

export const UniverseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="universeName" />
      <ReferenceManyField
        label="Word Count"
        target="universeId"
        reference="books"
      >
        <WordCountField />
      </ReferenceManyField>
    </Datagrid>
  </List>
);

export const UniverseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="universeName" />
    </SimpleForm>
  </Edit>
);

export const UniverseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="universeName" />
    </SimpleForm>
  </Create>
);
