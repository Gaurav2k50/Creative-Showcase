import React from "react";
import "./Projects.css";
import Projectss from "../../assets/images/project.png";
import { PiBookBookmarkLight } from "react-icons/pi";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoFirebase } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="projects-main-div">
      <div className="project-sub-div">
        <div className="projects-heading-img-div">
          <img src={Projectss} alt="" className="projects-heading-img" />
        </div>
        <div className="projects-heading-text-div">
          <h1 className="projects-heading-text-h1">Projects</h1>
          <p className="projects-heading-text-p">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="repo-cards-div-main">
        {/* 1st div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a href="" className="repo-react-reveal-a" target="blank">
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>Gaurav's Portfolio</p>
              </div>
              <div className="repo-description">
                🔥 The Complete Customizable Software Developer Portfolio
                Template which lets you..
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2024-03-21
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <DiCss3 size="30px" className="css" />
                      </span>
                      {/* <span className="software-skill-icon">
                      <IoLogoJavascript size="40px" className="js" />
                    </span> */}
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 2nd div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href="https://github.com/Gaurav2k50/react-amazon-clone.git"
              className="repo-react-reveal-a"
              target="blank"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>Amazon-Clone</p>
              </div>
              <div className="repo-description">
                🔥 Built a responsive Amazon clone using React.js and CSS,
                featuring a user-friendly interface and seamless shopping
                experience..
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2024-03-02
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <DiCss3 size="30px" className="css" />
                      </span>
                      {/* <span className="software-skill-icon">
                      <IoLogoJavascript size="40px" className="js" />
                    </span> */}
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 3rd div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href="https://github.com/Gaurav2k50/gadget-wave-frontend.git"
              className="repo-react-reveal-a"
              target="blank"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>Gadget-Wave-Frontend</p>
              </div>
              <div className="repo-description">
                🔥 Presenting Gadget Wave Frontend: A dynamic React.js and
                SCSS-powered e-commerce platform offering the latest in
                electronic products...
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2024-02-02
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <BsFiletypeScss size="30px" className="css" />
                      </span>
                      {/* <span className="software-skill-icon">
                      <IoLogoJavascript size="40px" className="js" />
                    </span> */}
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 4th div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href="https://github.com/Gaurav2k50/Radiant-Riches---Assignment.git"
              className="repo-react-reveal-a"
              target="blank"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>Radiant-Assignment</p>
              </div>
              <div className="repo-description">
                🔥 Developed a dynamic website using HTML, CSS, and JavaScript,
                showcasing skills in frontend web development for a company
                task..
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2024-03-05
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <DiCss3 size="30px" className="css" />
                      </span>
                      {/* <span className="software-skill-icon">
                      <IoLogoJavascript size="40px" className="js" />
                    </span> */}
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 5th div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href="https://github.com/Gaurav2k50/ReactAuthFirebaseApp.git"
              className="repo-react-reveal-a"
              target="blank"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>ReactAuthFirebaseApp</p>
              </div>
              <div className="repo-description">
                🔥 Utilized React, CSS, and Firebase to create a user-friendly
                website with seamless login functionality, showcasing modern web
                development expertise..
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2024-03-10
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <DiCss3 size="30px" className="css" />
                      </span>
                      <span className="software-skill-icon">
                        <IoLogoFirebase size="30px" className="firebase" />
                      </span>
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 6th div */}
        <div className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href="https://github.com/Gaurav2k50/Tic-Tac-Toe-App.git"
              className="repo-react-reveal-a"
              target="blank"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>Tic-Tac-Toe-App</p>
              </div>
              <div className="repo-description">
                🔥 Created a dynamic Tic-Tac-Toe app using React, CSS for
                styling, and Firebase for real-time game updates. Experience the
                classic game with modern technology!..
              </div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">
                  Created on 2020-03-05
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">
                      {/* <span className="software-skill-icon">
                      <TiHtml5 size="40px" className="html" />
                    </span> */}
                      <span className="software-skill-icon">
                        <DiCss3 size="30px" className="css" />
                      </span>
                      {/* <span className="software-skill-icon">
                      <IoLogoJavascript size="40px" className="js" />
                    </span> */}
                      <span className="software-skill-icon">
                        <FaReact size="30px" className="react" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="project-button">
        <a
          href="https://github.com/Gaurav2k50"
          className="main-button"
          target="blank"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
