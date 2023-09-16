import React from "react";
import "../styles/Header.css";
import { auth } from "../config/config";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Signout User
  const signOUT = async () => {
    await auth.signOut();
    localStorage.clear();
    navigate("/");
  };
  const userName = localStorage.getItem("userName");

  return (
    <div className="header">
      <h1 className="logo">Pomodro Timer</h1>
      {userName ? (
        <button className="signbtn" onClick={signOUT}>
          Sign out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
