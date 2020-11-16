import * as React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  TextInput,
  SelectInput,
  ImageField,
} from "react-admin";

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
      <TextInput source="seriesOrder" />
    </SimpleForm>
  </Edit>
);
