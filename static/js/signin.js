import React from "react";

// Firebase
// import * as firebase from 'firebase';
import firebase from 'firebase';
import app from "firebase/app";
import auth from "firebase/auth";
import database from "firebase/database";
import { StyledFirebaseAuth } from "react-firebaseui";
import functions from 'firebase/functions';   

//
// import 'firebase/auth';        // for authentication
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
// import 'firebase/firestore';   // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions

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

export const SignOut = () => (
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
