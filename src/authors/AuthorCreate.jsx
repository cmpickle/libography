import * as React from "react";
import { Create, SimpleForm, TextInput, ImageField } from "react-admin";

export const AuthorCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ImageField source="picture" />
      <TextInput source="picture" />
    </SimpleForm>
  </Create>
);
