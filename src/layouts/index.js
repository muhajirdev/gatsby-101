import React, { useEffect, useState } from "react";
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
  apiKey: "AIzaSyAxQqWY4jEfRH8O5tCfKZIxB1teR7YG5Eo",
  authDomain: "squote-systems.firebaseapp.com",
  databaseURL: "https://squote-systems.firebaseio.com",
  projectId: "squote-systems",
  storageBucket: "squote-systems.appspot.com",
  messagingSenderId: "354156066906"
};

const AuthContext = React.createContext(null);

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
      <AuthContext.Provider value={authenticated}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};
