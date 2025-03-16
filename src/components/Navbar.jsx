import React from "react";
import "../styles/Navbar.css";
import puzzleIcon from "../assets/puzzleIcon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logoIcon" src={puzzleIcon} />
      <h1 className="appName">Memory Card Game</h1>
    </nav>
  );
};

export default Navbar;
