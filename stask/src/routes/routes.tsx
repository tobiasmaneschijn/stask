import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Assignments from "./Assignments";
import Dashboard from "./Dashboard";

import React, { CSSProperties } from "react";
import { StaskBar } from "../shared/components/AppSidebar";
import { Box, Spinner } from "grommet";
import CalendarPage from "./Calendar";
import { useAuth0 } from "@auth0/auth0-react";
import FrontPage from "./FrontPage";

import firebase from "firebase/app";
import axios from "axios";
import AssignmentView from "./assignments/AssignmentView";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";

require('firebase/auth')

const customTokenPath =
  "https://kmk4uisiee.execute-api.us-east-1.amazonaws.com/dev/auth";

const withAuthHeader = (sub: any) => {
  const token = sub;
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      
      "Content-Type": "application/json",
    },
  });
  //console.log(sub);
  
  return instance;
};

const setCustomToken = async (sub : any) => {
  const axios = withAuthHeader(sub);
  const { data } = await axios.post(customTokenPath);
  const firebaseToken = await firebase.auth().signInWithCustomToken(data.data.token.token);
  return firebaseToken;
};

const containerStyle : CSSProperties={
  display: "grid",
  gridTemplateColumns: "20% 1fr",
  gridTemplateRows: " 1fr"
}

interface Props {}


const Routes = (props: Props) => {
  const { getIdTokenClaims, isAuthenticated, isLoading, user } = useAuth0();
  if (user) {
    
    getIdTokenClaims().then(token => {

      const id_token = token.__raw;
      
      setCustomToken(id_token).then((cred) => {
                   
       }).catch((error) => {
         console.log(error);
     
         
       });
    })

    
  }

  if (isLoading) {
    return (
      <Box
        flex
        pad="large"
        align="center"
        alignSelf="center"
        direction="column"
        alignContent="center"
        justify="center"
        fill
        height={{ max: "100%", min: "100%" }}
        margin="0"
      >
        <Spinner size="large" />
      </Box>
    );
  }

  return (
      <Router>
       
          {isAuthenticated ? (
             <Box height={{ min: "100%", max: "100%" }} style={containerStyle}>
              <StaskBar />
              <Switch>
                <Route path="/settings" component={SettingsPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/assignments/:id" component={AssignmentView} />
                <Route path="/assignments" component={Assignments} />
                <Route path="/" component={Dashboard}/>
              </Switch>
        </Box>

          ) : (
            <>
              <FrontPage />
            </>
          )}
      </Router>
  );
};

export default Routes;
