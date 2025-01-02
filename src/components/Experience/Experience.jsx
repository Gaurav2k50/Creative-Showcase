import React, { useState } from "react";
import "./Experience.css";
import ExperienceImage from "../../assets/images/experience.png";
import { FiPlus, FiMinus } from "react-icons/fi";

const Experience = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { id: "work", title: "Work", details: ["CITC The Hub Of It. Ltd."] },
    {
      id: "internships",
      title: "Internships",
      details: ["AI-ML Virtual Internship (AWS)"],
    },
    { id: "research", title: "Research", details: ["IRJCH"] },
  ];

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="experience-main-div">
      <div className="experience-heading-div">
        <div className="experience-heading-img-div">
          <img
            src={ExperienceImage}
            alt="Facing Yourself"
            className="experience-heading-img"
          />
        </div>
        <div className="experience-heading-text-div">
          <h1 className="experience-heading-text-h1">Experience</h1>
          <h3 className="experience-heading-text-h3">
            Work, Internship, and Volunteership
          </h3>
          <p className="experience-heading-text-p">
            I have worked with many evolving startups as an ML and DL Developer,
            Designer, and Software Architect. I have also collaborated with
            well-established companies, primarily as an AI Developer. I love
            organizing events and am actively involved with many open-source
            communities as a representative.
          </p>
        </div>
      </div>
      <div className="experience-accord">
        <ul className="experience-accord-ul">
          {sections.map(({ id, title, details }) => (
            <li key={id} className="experience-accord-li">
              <div
                className="experience-accord-li-div"
                onClick={() => toggleSection(id)}
              >
                {title}
                <span>{openSection === id ? <FiMinus /> : <FiPlus />}</span>
              </div>
              {openSection === id && (
                <ul className="dropdown">
                  {details.map((detail, index) => (
                    <li key={index} className="experience-accord-li-div">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
