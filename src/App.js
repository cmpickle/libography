import React, { useEffect, useState } from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import authProvider, { auth0 } from "./authProvider";
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

function App() {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      let token = undefined;
      try {
        token = await auth0.getTokenSilently();
      } catch (err) {
        console.error(err);
      }
      setToken(token);
    }
    fetchData();
  }, []);

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${token}`,
  };

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
