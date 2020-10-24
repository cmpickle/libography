import React from "react";
import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider from "./authProvider";
import Person from "@material-ui/icons/Person";
import { BookList, BookEdit, BookCreate } from "./books";
import { AuthorList, AuthorEdit, AuthorCreate } from "./authors";
import { createMuiTheme } from "@material-ui/core";
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
        list={BookList}
        edit={BookEdit}
        create={BookCreate}
      />
      <Resource
        name="genre"
        list={ListGuesser}
        edit={SeriesEdit}
        create={SeriesCreate}
      />
      <Resource
        name="series"
        list={ListGuesser}
        edit={SeriesEdit}
        create={SeriesCreate}
      />
      <Resource
        name="universe"
        list={ListGuesser}
        edit={EditGuesser}
        create={EditGuesser}
      />
      <Resource name="user" />
    </Admin>
  );
}

export default App;