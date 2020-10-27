import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  EditButton,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";

export const AuthorList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick={authorsRowClick}>
        <ListAvatar source="picture" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const authorsRowClick = (id, basePath, record) =>
  `/books?filter=%7B"authorId"%3A"${record.id}"%7D`;

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

export const AuthorCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageField source="picture" />
      <TextInput source="picture" />
    </SimpleForm>
  </Create>
);
