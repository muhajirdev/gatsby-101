import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Flex, Box } from "rebass";
import { parse } from "query-string";

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

const getEmailQuery = () => {
  if (typeof window === "undefined") {
    return "";
  }
  const email = parse(window.location.search).email;

  if (!email) {
    return "";
  }

  return email;
};

export const SignUp = withFirebase(({ firebase: firebaseRoot }) => {
  const [email, setEmail] = useState(getEmailQuery());
  const [password, setPassword] = useState("");

  useEffect(() => {
    firebaseRoot &&
      firebase
        .functions()
        .httpsCallable("getContentfulData")()
        .then(console.log);
  }, [firebaseRoot]);

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
      navigate("/contact-rami");
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

    navigate("/welcome-subscriber");
  };

  return (
    <div>
      <Flex
        py="3"
        px="4"
        style={{
          border: "10px solid #fff"
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSignUp}
        >
          <div style={{ marginBottom: "1rem", width: "100%" }}>
            <Input
              type="email"
              style={{ width: "100%" }}
              placeholder="du@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1rem", width: "100%" }}>
            <Input
              type="password"
              style={{ width: "100%" }}
              placeholder="Passwort"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              border: "0px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              margin: ".75rem",
              padding: "0.4rem"
            }}
          >
            Senden
          </button>
        </form>
      </Flex>
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
      .then(_ => navigate("/MyStockBoost/airbnb-test"))
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
            placeholder="Passwort"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            border: "0px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            margin: ".75rem",
            padding: "0.4rem"
          }}
          type="submit"
        >
          Anmelden
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

export const ResetPassword = withFirebase(({ firebase: firebaseRoot }) => {
  const [email, setEmail] = useState("");

  if (!firebaseRoot) return null;

  const { firebase } = firebaseRoot;

  const handleResetPassword = e => {
    e.preventDefault();
    resetPassword();
    navigate("/");
  };

  const resetPassword = async () => {
    const db = firebase.firestore();

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(data => {
        console.log("succeed");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <Input
          type="email"
          placeholder="du@example.de"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="submit"
          style={{
            border: "0px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            margin: ".75rem",
            padding: "0.4rem",
            cursor: "pointer"
          }}
        >
          PASSWORT ZURÜCKSETZEN
        </button>
      </form>
    </div>
  );
});
