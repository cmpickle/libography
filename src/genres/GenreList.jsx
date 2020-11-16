import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const GenreList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="genreName" />
    </Datagrid>
  </List>
);
