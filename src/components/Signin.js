import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import app from "firebase/app";
import auth from "firebase/auth";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDjS6tGpqjAaC0aXQAGZMkjssABbZzTgSo",
  authDomain: "awesome-bb71b.firebaseapp.com",
  databaseURL: "https://awesome-bb71b.firebaseio.com",
  projectId: "awesome-bb71b",
  storageBucket: "awesome-bb71b.appspot.com",
  messagingSenderId: "646496200074"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    alert("logged out");
  } else {
    alert("logged in");
  }
});

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export const SignIn = () => (
  <div>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
);

export const SignOUt = () => (
  <button
    onClick={() => {
      alert("logout");
    }}
    style={{
      marginLeft: 10,
      borderRadius: "0.5rem",
      backgroundColor: "#fff",
      border: "2px solid #ffa400",
      fontFamily: "sans-serif",
      padding: "0.5rem 0.5rem",
      color: "#0f0f0f"
    }}
  >
    Sign Out
  </button>
);
