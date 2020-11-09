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
  ReferenceInput,
  SelectInput,
  ReferenceField,
  SingleFieldList,
  ChipField,
  NumberField,
} from "react-admin";
import { ListAvatar } from "./components/ListAvatar";
import { WordCountField } from "./components/WordCountField";

export const SeriesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ListAvatar source="seriesImage" />
      <TextField source="seriesName" />
      <ReferenceManyField
        label="Word Count"
        target="seriesId"
        reference="books"
        sortable={false}
      >
        <WordCountField />
      </ReferenceManyField>
      <ReferenceField source="authorId" reference="author">
        <TextField style={{ color: "#5c74ff" }} source="name" />
      </ReferenceField>
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
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const SeriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="seriesName" />
      <ImageField source="seriesImage" />
      <TextInput source="seriesImage" />
      <ReferenceInput source="authorId" reference="author">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
