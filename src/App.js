import React from "react";
import Mainsection from "./pages/main-section/index";
import Education from "./pages/education/index";
import Experience from "./pages/experience/index";
import Projects from "./pages/projects/index";
import { Route, Routes } from "react-router-dom";
import OpenSource from "./pages/open-source/index";
import ContactMe from "./pages/contact/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainsection />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </>
  );
};

export default App;
