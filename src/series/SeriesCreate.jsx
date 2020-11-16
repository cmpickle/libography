import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const SeriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="seriesName" />
      <ImageField source="seriesImage" />
      <TextInput source="seriesImage" />
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
