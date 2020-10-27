import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const UniverseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="universeName" />
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
