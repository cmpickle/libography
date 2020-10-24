import * as React from "react";
import {
  List,
  Datagrid,
  NumberField,
  ReferenceField,
  TextField,
  Edit,
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  TextInput,
  SelectInput,
  ImageField,
  Filter,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";

export const BookList = (props) => (
  <List {...props} filters={<BookFilter />}>
    <Datagrid rowClick="edit">
      <ListAvatar source="picture" />
      <TextField source="name" />
      <NumberField source="wordCount" />
      <ReferenceField source="authorId" reference="author">
        <TextField style={{ color: "#5c74ff" }} source="name" />
      </ReferenceField>
      <ReferenceField source="universeId" reference="universe">
        <TextField style={{ color: "#5c74ff" }} source="universeName" />
      </ReferenceField>
      <ReferenceField source="seriesId" reference="series">
        <TextField style={{ color: "#5c74ff" }} source="seriesName" />
      </ReferenceField>
      <ReferenceField source="genreId" reference="genre">
        <TextField style={{ color: "#5c74ff" }} source="genreName" />
      </ReferenceField>
      <TextField source="releaseDate" />
    </Datagrid>
  </List>
);

const BookFilter = (props) => (
  <Filter {...props}>
    <TextInput source="authorId" alwaysOn />
  </Filter>
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

export const BookCreate = (props) => (
  <Create {...props}>
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
  </Create>
);
