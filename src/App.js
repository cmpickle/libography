import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider from "./authProvider";
import {
  Person,
  Book,
  Category,
  CollectionsBookmark,
  Collections,
} from "@material-ui/icons";
import { BookList, BookEdit, BookCreate } from "./books";
import { AuthorList, AuthorEdit, AuthorCreate } from "./authors";
import { createMuiTheme } from "@material-ui/core";
import loginPage from "./pages/login";
import authConfig from "./authConfig.json";
import { SeriesEdit, SeriesCreate } from "./series";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      textPrimary: {
        // Name of the rule
        color: "#5c74ff", // Some CSS
      },
    },
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
        edit={AuthorEdit}
        create={AuthorCreate}
      />
      <Resource
        name="books"
        label="Books"
        icon={Book}
        list={BookList}
        edit={BookEdit}
        create={BookCreate}
      />
      <Resource
        name="genre"
        icon={Category}
        list={ListGuesser}
        edit={SeriesEdit}
        create={SeriesCreate}
      />
      <Resource
        name="series"
        icon={CollectionsBookmark}
        list={ListGuesser}
        edit={SeriesEdit}
        create={SeriesCreate}
      />
      <Resource
        name="universe"
        icon={Collections}
        list={ListGuesser}
        edit={EditGuesser}
        create={EditGuesser}
      />
      <Resource name="user" />
    </Admin>
  );
}

export default App;
