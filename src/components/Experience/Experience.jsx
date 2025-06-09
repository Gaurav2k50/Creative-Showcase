import React, { useState, useEffect } from "react";
import "./Experience.css";
import ExperienceImage from "../../assets/images/experience.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  const sections = [
    { id: "work", title: "Work", details: ["CITC The Hub Of It Pvt. Ltd."] },
    {
      id: "internships",
      title: "Internships",
      details: ["AI-ML Virtual Internship (AWS)", "Software Engineer Intern"],
    },
    {
      id: "research",
      title: "Research",
      details: ["International Research Journal of Computer Science (IRJCH)"],
    },
  ];

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="experience-main-div">
      <div className="experience-heading-div" data-aos="fade-up">
        <div
          className="experience-heading-img-div"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={ExperienceImage}
            alt="Facing Yourself"
            className="experience-heading-img"
          />
        </div>
        <div
          className="experience-heading-text-div"
          data-aos="fade-left"
          data-aos-delay="200"
        >
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
      <div
        className="experience-accord"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <ul className="experience-accord-ul">
          {sections.map(({ id, title, details }, index) => (
            <li
              key={id}
              className="experience-accord-li"
              data-aos="fade-up"
              data-aos-delay={600 + index * 200}
            >
              <div
                className="experience-accord-li-div"
                onClick={() => toggleSection(id)}
              >
                {title}
                <span>{openSection === id ? <FiMinus /> : <FiPlus />}</span>
              </div>{" "}
              {openSection === id && (
                <div
                  className="dropdown"
                  data-aos="fade-down"
                  data-aos-duration="500"
                >
                  <ul className="dropdown-grid">
                    {details.map((detail, index) => (
                      <li
                        key={index}
                        className="experience-accord-li-div"
                        data-aos="fade-right"
                        data-aos-delay={200 * index}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
