import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "react-auth-kit";
import { Box, Grommet } from "grommet";
import { StaskBar } from "./shared/components/AppSidebar";
import Routes from "./routes/routes";
import { Auth0Provider } from "@auth0/auth0-react";
import "react-datetime/css/react-datetime.css";

function App() {

  
  return (
    <Box fill className="App">
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN + ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID + ""}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <Routes></Routes>
      </Auth0Provider>
    </Box>
  );
}

export default App;
