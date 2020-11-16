import * as React from "react";
import {
  SimpleForm,
  SelectInput,
  ReferenceInput,
  TextInput,
  ImageField,
  Create,
} from "react-admin";

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
