"use client";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "@/firebase/firebase.config";

//contextAPi
export const AuthContext = createContext(null);

//providers
const provider = new GoogleAuthProvider();
//auth
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  //user
  const [user, setUser] = useState(null);

  //loader
  const [loader, setLoader] = useState(true);

  //createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google log in
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  //profile
  const profile = (userData, name, photo) => {
    setLoader(true);
    updateProfile(userData, {
      displayName: name,
      photoURL: photo,
    });
  };
  //onAuth
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  //logOut
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    logIn,
    profile,
    googleLogin,
    logOut,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
