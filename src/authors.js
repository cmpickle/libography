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
  NumberField,
  ReferenceManyField,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";
import { WordCountField } from "./components/WordCountField";

export const AuthorList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick={authorsRowClick}>
        <ListAvatar source="picture" />
        <TextField source="name" />
        <ReferenceManyField
          label="Word Count"
          target="authorId"
          reference="books"
        >
          <WordCountField />
        </ReferenceManyField>
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
