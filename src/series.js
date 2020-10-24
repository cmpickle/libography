import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from "react-admin";

export const SeriesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="seriesName" />
    </SimpleForm>
  </Edit>
);

export const SeriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="seriesName" />
    </SimpleForm>
  </Create>
);
