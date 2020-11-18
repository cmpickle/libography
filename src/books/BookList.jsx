import * as React from "react";
import {
  List,
  Datagrid,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  ReferenceInput,
  SelectInput,
  Filter,
} from "react-admin";
import { ListAvatar } from "../components/ListAvatar";

const BookFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      label="Author"
      source="authorId"
      reference="author"
      alwaysOn
    >
      <SelectInput allowEmpty optionText="name" />
    </ReferenceInput>
    {console.log(props)}
    <ReferenceInput label="Series" source="seriesId" reference="series">
      <SelectInput allowEmpty optionText="seriesName" />
    </ReferenceInput>
    <ReferenceInput label="Universe" source="universeId" reference="universe">
      <SelectInput allowEmpty optionText="universeName" />
    </ReferenceInput>
  </Filter>
);

export const BookList = (props) => (
  <List
    {...props}
    sort={{ field: "author.name", order: "ASC" }}
    filters={<BookFilter />}
  >
    <Datagrid rowClick="edit">
      <ListAvatar source="picture" />
      <TextField source="name" />
      <NumberField source="wordCount" />
      <ReferenceField source="authorId" sortBy="author.name" reference="author">
        <TextField style={{ color: "#5c74ff" }} source="name" />
      </ReferenceField>
      <ReferenceField
        source="universeId"
        sortBy="universe.universeName"
        reference="universe"
      >
        <TextField style={{ color: "#5c74ff" }} source="universeName" />
      </ReferenceField>
      <ReferenceField
        source="seriesId"
        sortBy="series.seriesName"
        reference="series"
      >
        <TextField style={{ color: "#5c74ff" }} source="seriesName" />
      </ReferenceField>
      <ReferenceField
        source="genreId"
        sortBy="genre.genreName"
        reference="genre"
      >
        <TextField style={{ color: "#5c74ff" }} source="genreName" />
      </ReferenceField>
      <TextField source="releaseDate" />
      <TextField source="seriesOrder" />
    </Datagrid>
  </List>
);
