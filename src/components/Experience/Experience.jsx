import React, { useState } from "react";
import "./Experience.css";
import Experiencee from "../../assets/images/experience.png";
import { FiPlus, FiMinus } from "react-icons/fi";

const Experience = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="experience-main-div">
      <div className="experience-heading-div">
        <div className="experience-heading-img-div">
          <img
            src={Experiencee}
            alt="Facing-Your-Self"
            className="experience-heading-img"
          />
        </div>
        <div className="experience-heading-text-div">
          <h1 className="experience-heading-text-h1">Experience</h1>
          <h3 className="experience-heading-text-h3">
            Work, Internship and Volunteership
          </h3>
          <p className="experience-heading-text-p">
            I have worked with many evolving startups as ML and DL Developer,
            Designer and Software Architect. I have also worked with some well
            established companies mostly as AI Developer. I love organising
            events and that is why I am also involved with many opensource
            communities as a representative.
          </p>
        </div>
      </div>
      <div className="experience-accord">
        <ul className="experience-accord-ul">
          <li className="experience-accord-li">
            <div
              className="experience-accord-li-div"
              onClick={() => toggleSection("work")}
            >
              Work
              <span>{openSection === "work" ? <FiMinus /> : <FiPlus />}</span>
            </div>
            {openSection === "work" && (
              <ul className="dropdown">
                <li className="experience-accord-li-div">CITC THE HUB OF IT</li>
              </ul>
            )}
          </li>

          <li className="experience-accord-li">
            <div
              className="experience-accord-li-div"
              onClick={() => toggleSection("internships")}
            >
              Internships
              <span>
                {openSection === "internships" ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {openSection === "internships" && (
              <ul className="dropdown">
                <li className="experience-accord-li-div">
                  AI-ML Virtual Internship (AWS)
                </li>
              </ul>
            )}
          </li>

          <li className="experience-accord-li">
            <div
              className="experience-accord-li-div"
              onClick={() => toggleSection("research")}
            >
              research
              <span>
                {openSection === "research" ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {openSection === "research" && (
              <ul className="dropdown">
                <li className="experience-accord-li-div">IRJCH</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
