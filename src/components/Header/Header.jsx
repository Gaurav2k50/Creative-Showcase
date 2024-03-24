import React, { useState } from "react";
import "./Header.css";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="react-reveal">
      <header className="header">
        <div className="logo">
          {/* <span>{"<"}</span> */}
          <span className="logo-text">GauravSingh</span>
          {/* <span>{"/>"}</span> */}
        </div>

        {/* for menu icon */}
        <span className="menu-icon">
          <LuMenu size="35px" onClick={toggleMenu} />
        </span>

        <ul className={`menu ${showMenu ? "menu-open" : ""}`}>
          <li>
            <Link to="/" className="menu-items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/education" className="menu-items">
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" className="menu-items">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="menu-items">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/opensource" className="menu-items">
              Open Source
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="menu-items">
              Contact Me
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
