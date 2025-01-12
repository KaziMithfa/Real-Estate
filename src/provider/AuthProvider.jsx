import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// creating the context here...
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the state changed ", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubScribe();
    };
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubprovider);
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinwithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateUser = (displayName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    });
  };

  const authInfo = {
    user,
    createUser,
    updateUser,
    LoginUser,
    signinwithGoogle,
    githubLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
