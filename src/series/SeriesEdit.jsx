import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const SeriesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="seriesName" />
      <ImageField source="seriesImage" />
      <TextInput source="seriesImage" />
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
