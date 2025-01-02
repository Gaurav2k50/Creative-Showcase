import React from "react";
import "./Projects.css";
import Project from "../../assets/images/project.png";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoFirebase } from "react-icons/io5";
import { PiBookBookmarkLight } from "react-icons/pi";

const projects = [
  {
    name: "Admin Panel",
    description:
      "🔥 Built an admin panel with React.js, Node.js, and MongoDB, enabling role-based access and efficient content management...",
    date: "2024-20-12",
    url: "https://github.com/Gaurav2k50/Admin-panel",
    icons: [
      <DiCss3 size="30px" />,
      <FaReact size="30px" />,
      <FaNodeJs size="30px" />,
      <DiMongodb size="30px" />,
    ],
  },
  {
    name: "Amazon-Clone",
    description:
      "🔥 Built a responsive Amazon clone using React.js and CSS, featuring a user-friendly interface and seamless shopping experience..",
    date: "2024-03-02",
    url: "https://github.com/Gaurav2k50/react-amazon-clone.git",
    icons: [<DiCss3 size="30px" />, <FaReact size="30px" />],
  },
  {
    name: "Gadget-Wave-Frontend",
    description:
      "🔥 Presenting Gadget Wave Frontend: A dynamic React.js and SCSS-powered e-commerce platform offering the latest in electronic products...",
    date: "2024-02-02",
    url: "https://github.com/Gaurav2k50/gadget-wave-frontend.git",
    icons: [<BsFiletypeScss size="30px" />, <FaReact size="30px" />],
  },
  {
    name: "Radiant-Assignment",
    description:
      "🔥 Developed a dynamic website using HTML, CSS, and JavaScript, showcasing skills in frontend web development for a company task..",
    date: "2024-03-05",
    url: "https://github.com/Gaurav2k50/Radiant-Riches---Assignment.git",
    icons: [<DiCss3 size="30px" />, <FaReact size="30px" />],
  },
  {
    name: "ReactAuthFirebaseApp",
    description:
      "🔥 Utilized React, CSS, and Firebase to create a user-friendly website with seamless login functionality, showcasing modern web development expertise..",
    date: "2024-03-10",
    url: "https://github.com/Gaurav2k50/ReactAuthFirebaseApp.git",
    icons: [
      <DiCss3 size="30px" />,
      <IoLogoFirebase size="30px" />,
      <FaReact size="30px" />,
    ],
  },
  {
    name: "Tic-Tac-Toe-App",
    description:
      "🔥 Created a dynamic Tic-Tac-Toe app using React, CSS for styling, and Firebase for real-time game updates. Experience the classic game with modern technology!..",
    date: "2024-04-01",
    url: "https://github.com/Gaurav2k50/Tic-Tac-Toe-App.git",
    icons: [
      <DiCss3 size="30px" />,
      <IoLogoFirebase size="30px" />,
      <FaReact size="30px" />,
    ],
  },
];

const Projects = () => (
  <div className="projects-main-div">
    <div className="project-sub-div">
      <div className="projects-heading-img-div">
        <img
          src={Project}
          alt="Project Thumbnail"
          className="projects-heading-img"
        />
      </div>
      <div className="projects-heading-text-div">
        <h1 className="projects-heading-text-h1">Projects</h1>
        <p className="projects-heading-text-p">
          My projects make use of a variety of modern tools. I enjoy creating
          Data Science projects and deploying them to web applications using
          cloud infrastructure.
        </p>
      </div>
    </div>

    <div className="repo-cards-div-main">
      {projects.map(({ name, description, date, url, icons }, index) => (
        <div key={index} className="repo-card-div">
          <div className="repo-react-reveal">
            <a
              href={url}
              className="repo-react-reveal-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="repo-name-div">
                <span>
                  <PiBookBookmarkLight size="19px" />
                </span>
                <p>{name}</p>
              </div>
              <div className="repo-description">{description}</div>
              <div className="repo-details">
                <p className="repo-creation-date subtitle">Created on {date}</p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    <li className="software-skill-language">{icons}</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
