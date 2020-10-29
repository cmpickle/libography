import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

export const GenreList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="genreName" />
    </Datagrid>
  </List>
);

export const GenreEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="genreName" />
    </SimpleForm>
  </Edit>
);

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="genreName" />
    </SimpleForm>
  </Create>
);
