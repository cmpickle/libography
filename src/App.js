import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider from "./authProvider";
import Person from "@material-ui/icons/Person";
import { BookList, BookEdit } from "./books";
import { AuthorList, AuthorEdit } from "./authors";
import { createMuiTheme } from "@material-ui/core";
import loginPage from "./pages/login";
import authConfig from "./authConfig.json";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const headers = {
  "content-type": "application/json",
  authorization: "bearer <token>",
  "X-Hasura-Admin-Secret": authConfig.hasuraAdminSecret,
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
      loginPage={loginPage}
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
