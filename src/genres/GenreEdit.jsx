import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const GenreEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="genreName" />
    </SimpleForm>
  </Edit>
);
