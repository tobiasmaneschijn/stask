import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyDejPOfp-0o50T7k2vFaYNKf9ReBNPJN7g",
  authDomain: "stask-fba8c.firebaseapp.com",
  projectId: "stask-fba8c",
  storageBucket: "stask-fba8c.appspot.com",
  messagingSenderId: "995153194317",
  appId: "1:995153194317:web:6fe41d57054e70422edb04",
  measurementId: "G-KYZC0RWRBN"
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();


