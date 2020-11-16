import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider from "./authProvider";
import { createMuiTheme } from "@material-ui/core";
import loginPage from "./pages/login";
import authors from "./authors";
import books from "./books";
import genres from "./genres";
import series from "./series";
import universes from "./universes";

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
  "X-Hasura-Admin-Secret": process.env.REACT_APP_LIBOGRAPHY_HASURA_ADMIN_SECRET,
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
      <Resource {...authors} />
      <Resource {...books} />
      <Resource {...genres} />
      <Resource {...series} />
      <Resource {...universes} />
      <Resource name="user" />
    </Admin>
  );
}

export default App;
