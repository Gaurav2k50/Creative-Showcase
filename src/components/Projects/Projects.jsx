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
      <DiCss3 size="30px" style={{ color: "#264de4" }} />, // Blue for CSS
      <FaReact size="30px" style={{ color: "#61DBFB" }} />, // React color
      <FaNodeJs size="30px" style={{ color: "#83CD29" }} />, // Node.js color
      <DiMongodb size="30px" style={{ color: "#47A248" }} />, // MongoDB color
    ],
  },
  {
    name: "ShopEase-Ecommerce ",
    description:
      "ShopEase Ecommerce is a robust platform built with React.js, CSS3, Tailwind CSS and Firebase, integrating Razorpay for secure payments. It features a responsive user interface, a powerful admin das…",
    date: "Jul 3, 2024",
    url: "https://shop-ease-ecommerce.vercel.app/",
    icons: [
      <DiCss3 size="30px" style={{ color: "#264de4" }} />,
      <FaReact size="30px" style={{ color: "#61DBFB" }} />,
      <IoLogoFirebase size="30px" style={{ color: "#FFCA28" }} />,
    ],
  },
  {
    name: "Amazon-Clone",
    description:
      "🔥 Built a responsive Amazon clone using React.js and CSS, featuring a user-friendly interface and seamless shopping experience...",
    date: "2024-03-02",
    url: "https://github.com/Gaurav2k50/react-amazon-clone.git",
    icons: [
      <DiCss3 size="30px" style={{ color: "#264de4" }} />,
      <FaReact size="30px" style={{ color: "#61DBFB" }} />,
    ],
  },
  {
    name: "Gadget-Wave-Frontend",
    description:
      "🔥 Presenting Gadget Wave Frontend: A dynamic React.js and SCSS-powered e-commerce platform offering the latest in electronic products...",
    date: "2024-02-02",
    url: "https://github.com/Gaurav2k50/gadget-wave-frontend.git",
    icons: [
      <BsFiletypeScss size="30px" />,
      <FaReact size="30px" style={{ color: "#61DBFB" }} />,
    ],
  },
  {
    name: "ReactAuthFirebaseApp",
    description:
      "🔥 Utilized React, CSS, and Firebase to create a user-friendly website with seamless login functionality, showcasing modern web development expertise..",
    date: "2024-03-10",
    url: "https://github.com/Gaurav2k50/ReactAuthFirebaseApp.git",
    icons: [
      <DiCss3 size="30px" style={{ color: "#264de4" }} />,
      <FaReact size="30px" style={{ color: "#61DBFB" }} />,
      <IoLogoFirebase size="30px" style={{ color: "#FFCA28" }} />,
    ],
  },
  {
    name: "Tic-Tac-Toe-App",
    description:
      "🔥 Created a dynamic Tic-Tac-Toe app using React, CSS for styling, and Firebase for real-time game updates. Experience the classic game with modern technology!..",
    date: "2024-04-01",
    url: "https://github.com/Gaurav2k50/Tic-Tac-Toe-App.git",
    icons: [
      <DiCss3 size="30px" style={{ color: "#264de4" }} />,
      <FaReact size="30px" style={{ color: "#61DBFB" }} />,
      <IoLogoFirebase size="30px" style={{ color: "#FFCA28" }} />,
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
