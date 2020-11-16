import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="genreName" />
    </SimpleForm>
  </Create>
);
