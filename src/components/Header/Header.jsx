import React, { useState } from "react";
import "./Header.css";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import SplashScreen from "../SplashScreen/SplashScreen";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleLogoClick = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Open Source", path: "/opensource" },
    { name: "Contact Me", path: "/contactme" },
  ];

  return (
    <>
      {showSplash && <SplashScreen />}
      {/* Render SplashScreen only when triggered */}
      <header className="header">
        <div className="logo" onClick={handleLogoClick}>
          <span className="logo-text">GauravSingh</span>
        </div>

        <span
          className="menu-icon"
          aria-expanded={showMenu}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {showMenu ? <AiOutlineClose size="35px" /> : <LuMenu size="35px" />}
        </span>

        <ul className={`menu ${showMenu ? "menu-open show" : ""}`}>
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`menu-items ${
                  location.pathname === path ? "active" : ""
                }`}
                onClick={() => {
                  if (path !== location.pathname) {
                    setShowMenu(false);
                  }
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
