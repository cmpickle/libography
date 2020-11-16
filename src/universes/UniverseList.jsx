import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ReferenceManyField,
} from "react-admin";
import { ListAvatar } from "../components/ListAvatar";
import { WordCountField } from "../components/WordCountField";

export const UniverseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ListAvatar source="universeImage" />
      <TextField source="universeName" />
      <ReferenceManyField
        label="Word Count"
        target="universeId"
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
