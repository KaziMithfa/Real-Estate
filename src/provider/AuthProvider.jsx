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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the state changed ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubScribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubprovider);
  };

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoading(true);
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
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
