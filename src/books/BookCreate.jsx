import * as React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  TextInput,
  ImageField,
  AutocompleteInput,
} from "react-admin";

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
