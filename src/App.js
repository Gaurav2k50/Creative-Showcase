// import React from "react";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import Mainsection from "./components/MainSection/Mainsection";
// import SkillSection from "./components/MainSection/SkillSection/SkillSection";
// import Education from "./components/Education/Education";
// import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
// import { Route, Routes } from "react-router-dom";
// import OpenSource from "./components/OpenSource/OpenSource";
// import ContactMe from "./components/ContactMe/ContactMe";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Mainsection />
//               <SkillSection />
//             </>
//           }
//         />
//         <Route path="/education" element={<Education />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/opensource" element={<OpenSource />} />
//         <Route path="/contactme" element={<ContactMe />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;

import React from "react";
// import Mainsection from "./pages/main-section/index";
import Mainsection from "./pages/main-section/index";
// import SkillSection from "./pages/skill-section/index";
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
        <Route
          path="/"
          element={
            <>
              <Mainsection />
              {/* <SkillSection /> */}
            </>
          }
        />
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
