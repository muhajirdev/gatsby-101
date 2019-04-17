import React, { useEffect, useState } from "react";
import firebase from "firebase";
import FirebaseContext from "../components/firebase-context";
import { SignIn } from "../components/signin";

let firebaseCache;
const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

const config = {
  apiKey: "AIzaSyDjS6tGpqjAaC0aXQAGZMkjssABbZzTgSo",
  authDomain: "awesome-bb71b.firebaseapp.com",
  databaseURL: "https://awesome-bb71b.firebaseio.com",
  projectId: "awesome-bb71b",
  storageBucket: "awesome-bb71b.appspot.com",
  messagingSenderId: "646496200074"
};

export default ({ children }) => {
  const [authenticated, setAuthenticated] = useState();
  const [firebaseInstance, setFirebaseInstance] = useState(null);
  useEffect(() => {
    const app = import("firebase/app");
    const auth = import("firebase/auth");
    const database = import("firebase/database");

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);
      setFirebaseInstance({ firebase });

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          setAuthenticated(false);
        } else {
          setAuthenticated(true);
        }
      });
    });
  }, []);
  return (
    <FirebaseContext.Provider value={firebaseInstance}>
      {authenticated ? children : <SignIn />}
    </FirebaseContext.Provider>
  );
};
