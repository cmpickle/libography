import * as React from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  ReferenceInput,
  TextInput,
  ImageField,
} from "react-admin";

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
