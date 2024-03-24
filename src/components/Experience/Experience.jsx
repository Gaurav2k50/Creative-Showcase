import React from "react";
import "./Experience.css";
import Experiencee from "../../assets/images/experience.png";
import { FiPlus } from "react-icons/fi";

const Experience = () => {
  return (
    <div className="experience-main-div">
      <div className="experience-heading-div">
        <div className="experience-heading-img-div">
          <img src={Experiencee} alt="" className="experience-heading-img" />
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
            <div className="experience-accord-li-div">
              Work
              <span>
                <FiPlus />
              </span>
            </div>
          </li>
          <li className="experience-accord-li">
            <div className="experience-accord-li-div">
              Internships
              <span>
                <FiPlus />
              </span>
            </div>
          </li>
          <li className="experience-accord-li">
            <div className="experience-accord-li-div">
              Volunteerships
              <span>
                <FiPlus />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
