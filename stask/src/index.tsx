import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-auth-kit";

import { withStyles } from "@material-ui/core/styles";
import { Grommet } from "grommet";
import { theme } from "./shared/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <Grommet full theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
