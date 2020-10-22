import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
} from "react-admin";

export const AuthorList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ImageField source="picture" />
    </Datagrid>
  </List>
);

export const AuthorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      {/* <ImageInput
                source="picture">
                <ImageField source="src" title="title" />
            </ImageInput> */}
      <ImageField source="picture" />
      <TextInput source="picture" />
    </SimpleForm>
  </Edit>
);
