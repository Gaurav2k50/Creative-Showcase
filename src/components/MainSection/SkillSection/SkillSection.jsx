import React from "react";
import "./SkillSection.css";
import skillMern from "../../../assets/images/skillmern.png";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";

const SkillSection = () => {
  return (
    <div className="skill-main-container">
      <div className="skill-heading-div">
        <h1 className="skill-heading">What I Do?</h1>
      </div>

      <div className="skill-main-div">
        <div className="skill-sub-div">
          <div className="skill-left">
            <img src={skillMern} alt="" className="mern-png" />
          </div>

          <div className="skill-right">
            <p className="skill-h">MERN Stack Development</p>
            <ul className="skill-ul">
              <li className="skill-li">
                <SiMongodb size="60px" className="mongodb" />
              </li>
              <li className="skill-li">
                <SiExpress size="60px" className="express" />
              </li>
              <li className="skill-li">
                <FaReact size="60px" className="react" />
              </li>
              <li className="skill-li">
                <DiNodejs size="140px" className="node" />
              </li>
            </ul>
            <div className="skill-text-div">
              <p className="skill-text">
                ⚡ Crafting dynamic web applications with MongoDB, Express.js,
                React.js, and Node.js (MERN stack)
                <br />
                <br />
              </p>
              <p className="skill-text">
                ⚡ Building versatile mobile apps with Flutter, React Native,
                and Kotlin for Android development
                <br />
                <br />
              </p>
              <p className="skill-text">
                ⚡ Implementing robust server-side logic with Node.js,
                Express.js, and MongoDB for scalable backend solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
