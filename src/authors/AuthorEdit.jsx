import * as React from "react";
import { Edit, SimpleForm, TextInput, ImageField } from "react-admin";

export const AuthorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <ImageField source="picture" />
      <TextInput source="picture" />
    </SimpleForm>
  </Edit>
);
