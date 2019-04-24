import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Flex } from "rebass";

// Firebase
import { withFirebase } from "../components/firebase-context";
import "firebase/firestore";
import Input from "../components/subscribe/input";

// const getUiConfig = firebase => ({
//   signInFlow: "popup",
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ]
// });

export const SignUp = withFirebase(({ firebase: firebaseRoot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!firebaseRoot) return null;

  const { firebase } = firebaseRoot;

  const allowedToSignUp = email => false;

  const handleSignUp = e => {
    e.preventDefault();
    signUp();
  };

  const signUp = async () => {
    const db = firebase.firestore();

    const allowed = await db
      .collection("subscribers")
      .doc(email)
      .get()
      .then(doc => {
        if (doc.exists) {
          return true;
        } else {
          return false;
        }
      });

    if (!allowed) {
      alert("ops not, not allowed");
      return;
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
        console.log("succeed");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    alert("registered");
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export const SignIn = withFirebase(({ firebase: firebaseRoot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!firebaseRoot) return null;

  const { firebase } = firebaseRoot;

  const handleSubmit = e => {
    e.preventDefault();
    alert("login test");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(_ => navigate('/MyStockBoost/contentful-test'))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ...
      });
  };

  if (!firebase) return null;
  return (
    <Flex
      py="3"
      px="4"
      style={{
        border: "10px solid #fff"
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: "1rem", width: "100%" }}>
          <Input
            type="email"
            placeholder="du@example.de"
            value={email}
            onChange={event => setEmail(event.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem", width: "100%" }}>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            border: "3px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            margin: ".75rem",
            padding: "0.4rem"
          }}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </Flex>
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
