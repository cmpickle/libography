import React from "react";
import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider from "./authProvider";
import Person from "@material-ui/icons/Person";
import { BookList, BookEdit } from "./books";
import { AuthorList, AuthorEdit } from "./authors";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const headers = {
  "content-type": "application/json",
  authorization: "bearer <token>",
};

function App() {
  return (
    <Admin
      dataProvider={hasuraDataProvider(
        "https://libography-api.herokuapp.com",
        headers
      )}
      authProvider={authProvider}
      theme={theme}
    >
      <Resource
        name="author"
        label="Authors"
        icon={Person}
        list={AuthorList}
        // list={ListGuesser}
        edit={AuthorEdit}
        // create={PostCreate}
        // show={PostShow}
      />
      <Resource name="books" label="Books" list={BookList} edit={BookEdit} />
      <Resource name="genre" />
      <Resource name="series" />
      <Resource name="universe" />
      <Resource name="user" />
    </Admin>
  );
}

export default App;
