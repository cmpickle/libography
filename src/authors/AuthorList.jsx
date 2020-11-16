import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceManyField,
} from "react-admin";
import { ListAvatar } from "../components/ListAvatar";
import { WordCountField } from "../components/WordCountField";

const authorsRowClick = (id, basePath, record) =>
  `/books?filter=%7B"authorId"%3A"${record.id}"%7D`;

export const AuthorList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick={authorsRowClick}>
        <ListAvatar source="picture" />
        <TextField source="name" />
        <ReferenceManyField
          label="Word Count"
          target="authorId"
          reference="books"
          sortable={false}
        >
          <WordCountField />
        </ReferenceManyField>
        <EditButton />
      </Datagrid>
    </List>
  );
};
