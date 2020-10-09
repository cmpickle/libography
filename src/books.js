import * as React from "react";
import {
  List,
  Datagrid,
  NumberField,
  ReferenceField,
  TextField,
  Edit,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  TextInput,
  SelectInput,
  ImageField,
} from "react-admin";

export const BookList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="picture" />
      <TextField source="name" />
      <NumberField source="wordCount" />
      <ReferenceField source="authorId" reference="author">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="universeId" reference="universe">
        <TextField source="universeName" />
      </ReferenceField>
      <ReferenceField source="seriesId" reference="series">
        <TextField source="seriesName" />
      </ReferenceField>
      <ReferenceField source="genreId" reference="genre">
        <TextField source="genreName" />
      </ReferenceField>
      <TextField source="releaseDate" />
    </Datagrid>
  </List>
);

export const BookEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <ImageField source="picture" />
      <TextInput source="picture" />
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="wordCount" />
      <ReferenceInput source="universeId" reference="universe">
        <SelectInput optionText="universeName" />
      </ReferenceInput>
      <ReferenceInput source="seriesId" reference="series">
        <SelectInput optionText="seriesName" />
      </ReferenceInput>
      <TextInput source="releaseDate" />
      <ReferenceInput source="genreId" reference="genre">
        <SelectInput optionText="genreName" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
