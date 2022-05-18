import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";

function Header() {
  return (
    <header className="text-center nav-panel">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
