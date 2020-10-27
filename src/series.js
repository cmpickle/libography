import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  List,
  Datagrid,
  TextField,
} from "react-admin";

export const SeriesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="seriesName" />
    </Datagrid>
  </List>
);

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
