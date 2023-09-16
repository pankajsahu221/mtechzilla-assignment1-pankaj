import { useState, useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/config.js";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Authentication state change listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
        navigate("/timer");
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe the listener to avoid memory leaks
      unsubscribe();
    };
  }, []);

  // SignIn Functionality
  const signInWithGoogle = async () => {
    try {
      const loggedUserData = await signInWithPopup(auth, provider);
      localStorage.setItem("userName", loggedUserData.user.displayName);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <button onClick={signInWithGoogle} className="login__btn">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
