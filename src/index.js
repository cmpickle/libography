import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

console.log(
  "hasura secret",
  process.env.REACT_APP_LIBOGRAPHY_HASURA_ADMIN_SECRET
);
console.log("domain", process.env.REACT_APP_LIBOGRAPHY_AUTH_DOMAIN);
console.log("redirect uri", process.env.REACT_APP_LIBOGRAPHY_REDIRECT_URI);
console.log("client id", process.env.REACT_APP_LIBOGRAPHY_CLIENT_ID);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
