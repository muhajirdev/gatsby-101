import React, { useEffect, useState } from "react";

// Firebase
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { withFirebase } from "../components/firebase-context";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export const SignIn = withFirebase(({ firebase }) => {
  console.log(firebase);
  if (!firebase) return null;
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.firebase.auth()} />
    </div>
  );
});

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
