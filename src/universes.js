import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  Create,
  ReferenceManyField,
} from "react-admin";
import { ListAvatar } from './components/ListAvatar';
import { WordCountField } from "./components/WordCountField";

export const UniverseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ListAvatar source="universeImage" />
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
      <ImageField source="universeImage" />
      <TextInput source="universeImage" />
    </SimpleForm>
  </Edit>
);

export const UniverseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="universeName" />
      <ImageField source="universeImage" />
      <TextInput source="universeImage" />
    </SimpleForm>
  </Create>
);
