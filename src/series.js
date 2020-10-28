import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  List,
  Datagrid,
  TextField,
  FunctionField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  NumberField,
} from "react-admin";
import { WordCountField } from "./components/WordCountField";

export const SeriesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="seriesName" />
      <ReferenceManyField
        label="Word Count"
        target="seriesId"
        reference="books"
      >
        <WordCountField />
      </ReferenceManyField>
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
