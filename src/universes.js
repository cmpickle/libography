import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  TextInput,
  ImageField,
  Create,
  ReferenceManyField,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";
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
        sortable={false}
      >
        <WordCountField />
      </ReferenceManyField>
      <ReferenceField source="authorId" reference="author">
        <TextField style={{ color: "#5c74ff" }} source="name" />
      </ReferenceField>
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
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UniverseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="universeName" />
      <ImageField source="universeImage" />
      <TextInput source="universeImage" />
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
