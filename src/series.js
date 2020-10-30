import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  List,
  Datagrid,
  TextField,
  ImageField,
  FunctionField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  NumberField,
} from "react-admin";
import { ListAvatar } from './components/ListAvatar';
import { WordCountField } from "./components/WordCountField";

export const SeriesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ListAvatar source='seriesImage' />
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
      <ImageField source="seriesImage" />
      <TextInput source="seriesImage" />
    </SimpleForm>
  </Edit>
);

export const SeriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="seriesName" />
      <ImageField source="seriesImage" />
      <TextInput source="seriesImage" />
    </SimpleForm>
  </Create>
);
