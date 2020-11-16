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
  AutocompleteInput,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";

export const BookList = (props) => (
  <List
    {...props}
    sort={{ field: "author.name", order: "ASC" }}
    filters={<BookFilter />}
  >
    <Datagrid rowClick="edit">
      <ListAvatar source="picture" />
      <TextField source="name" />
      <NumberField source="wordCount" />
      <ReferenceField source="authorId" sortBy="author.name" reference="author">
        <TextField style={{ color: "#5c74ff" }} source="name" />
      </ReferenceField>
      <ReferenceField
        source="universeId"
        sortBy="universe.universeName"
        reference="universe"
      >
        <TextField style={{ color: "#5c74ff" }} source="universeName" />
      </ReferenceField>
      <ReferenceField
        source="seriesId"
        sortBy="series.seriesName"
        reference="series"
      >
        <TextField style={{ color: "#5c74ff" }} source="seriesName" />
      </ReferenceField>
      <ReferenceField
        source="genreId"
        sortBy="genre.genreName"
        reference="genre"
      >
        <TextField style={{ color: "#5c74ff" }} source="genreName" />
      </ReferenceField>
      <TextField source="releaseDate" />
      <TextField source="seriesOrder" />
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
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="wordCount" />
      <ReferenceInput allowEmpty source="universeId" reference="universe">
        <AutocompleteInput optionText="universeName" />
      </ReferenceInput>
      <ReferenceInput source="seriesId" reference="series">
        <AutocompleteInput allowEmpty optionText="seriesName" />
      </ReferenceInput>
      <TextInput source="releaseDate" />
      <ReferenceInput source="genreId" reference="genre">
        <AutocompleteInput allowEmpty optionText="genreName" />
      </ReferenceInput>
      <TextInput source="seriesOrder" />
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
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="wordCount" />
      <ReferenceInput source="universeId" reference="universe">
        <AutocompleteInput allowEmpty optionText="universeName" />
      </ReferenceInput>
      <ReferenceInput source="seriesId" reference="series">
        <AutocompleteInput allowEmpty optionText="seriesName" />
      </ReferenceInput>
      <TextInput source="releaseDate" />
      <ReferenceInput source="genreId" reference="genre">
        <AutocompleteInput allowEmpty optionText="genreName" />
      </ReferenceInput>
      <TextInput source="seriesOrder" />
    </SimpleForm>
  </Create>
);
