import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceManyField,
  ReferenceField,
} from "react-admin";
import { ListAvatar } from "../components/ListAvatar";
import { WordCountField } from "../components/WordCountField";

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
