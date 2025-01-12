import React, { useState, useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : ""}`}>
      <div className="name-container">
        <span className="name">Gaurav Singh</span>
      </div>
    </div>
  );
};

export default SplashScreen;
