import { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticated(true);
      setLoading(false); // set loading to false after user is set
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (router.pathname === "/account" && !user) {
      router.push("/auth/login?continueUrl=/account");
    }
  }, [router, user]);

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      // Calculate the token expiration time based on the current time and the token's 'exp' claim
      const tokenExpirationTime =
        new Date(user.metadata.lastSignInTime).getTime() +
        user.expiresIn * 1000;

      // Set up a timer to trigger logout when the token expires
      const timer = setTimeout(() => {
        logOut();
      }, tokenExpirationTime - Date.now());

      setLogoutTimer(timer);
    }

    return () => {
      // Clear the timer on component unmount or when the session is manually terminated
      clearTimeout(logoutTimer);
    };
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    setIsAuthenticated(false);
    await signOut(auth);
    sessionStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ user,isAuthenticated, logIn, logOut, signUp }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
export { AuthContext, AuthProvider };
