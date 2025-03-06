import React from "react";
import "../styles/Navbar.css";
import puzzleIcon from "../assets/puzzleIcon.svg";
import restartIcon from "../assets/restartIcon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src={puzzleIcon} />
      <h1 className="appName">Memory Card Game</h1>
      <button
        className="printBtn"
        onClick={() =>
          console.log("Do not forget to add functionality to this button!")
        }
      >
        <img src={restartIcon} />
      </button>
    </nav>
  );
};

export default Navbar;
