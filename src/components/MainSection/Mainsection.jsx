import React from "react";
import "./Mainsection.css";
import { RiStarFill } from "react-icons/ri";
import GauravImg from "../../assets/images/Gauravmainimg.jpeg";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaReact,
} from "react-icons/fa";
import { SiCss3, SiBootstrap, SiTailwindcss, SiMui } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import skillMern from "../../assets/images/skillmern.png";
import skillFront from "../../assets/images/skillFrontend.png";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/Gaurav2k50",
    icon: <FaGithub />,
    className: "github",
  },
  {
    href: "https://www.linkedin.com/in/gaurav2k50/",
    icon: <TiSocialLinkedin />,
    className: "linkedin",
  },
  {
    href: "https://www.youtube.com/@ezecoding",
    icon: <FaYoutube />,
    className: "youtube",
  },
  {
    href: "mailto:gaurav2k50@gmail.com",
    icon: <BsGoogle />,
    className: "email",
  },
  {
    href: "https://x.com/Gaurav2k01",
    icon: <FaTwitter />,
    className: "twitter",
  },
  {
    href: "https://www.facebook.com/profile.php",
    icon: <FaFacebookF />,
    className: "facebook",
  },
  {
    href: "https://www.instagram.com/___iamgaurav/",
    icon: <FaInstagram />,
    className: "instagram",
  },
];

const Mainsection = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <div className="left-section">
            <div className="intro-section">
              <div className="name-text">
                <h1 className="greeting-text">
                  {"Gaurav                                                             Singh"
                    .split("")
                    .map((letter, index) => (
                      <span key={index}>{letter}</span>
                    ))}
                </h1>
              </div>
              <p className="introduction">
                A passionate individual who always thrives to work on <br />
                end-to-end products which develop sustainable and <br />
                scalable social and technical systems to create impact.
              </p>
              <div className="social-icons">
                {socialLinks.map(({ href, icon, className }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`social-media-icons ${className}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.cloneElement(icon, {
                      className: "icon",
                      size: "20px",
                      color: "white",
                    })}
                  </a>
                ))}
              </div>
              <div className="portfolio-repo-btn">
                <a
                  href="https://github.com/Gaurav2k50"
                  className="a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="main-btn">
                    <RiStarFill size="22px" className="star-icon" />
                    Star Me On Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="image-container">
              <img src={GauravImg} alt="Gaurav Singh" className="main-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="skill-main-container">
        <div className="skill-heading-div">
          <h1 className="skill-heading">What I Do?</h1>
        </div>

        {/* First Skill  */}

        <div className="skill-main-div">
          <div className="skill-sub-div">
            <div className="skill-left">
              <img src={skillMern} alt="MERN Stack" className="mern-png" />
            </div>

            <div className="skill-right">
              <p className="skill-h">MERN Stack Development</p>
              <ul className="skill-ul">
                <li className="skill-li">
                  <SiMongodb className="icon mongodb" />
                </li>
                <li className="skill-li">
                  <SiExpress className="icon express" />
                </li>
                <li className="skill-li">
                  <FaReact className="icon react" />
                </li>
                <li className="skill-li">
                  <FaNodeJs className="icon node" />
                </li>
              </ul>
              <div className="skill-text-div">
                <p className="skill-text">
                  ⚡ Crafting dynamic web applications with MongoDB, Express.js,
                  React.js, and Node.js (MERN stack)
                </p>
                <p className="skill-text">
                  ⚡ Building versatile mobile apps with Flutter, React Native,
                  and Kotlin for Android development
                </p>
                <p className="skill-text">
                  ⚡ Implementing robust server-side logic with Node.js,
                  Express.js, and MongoDB for scalable backend solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Skill  */}

        <div className="skill-main-div">
          <div className="skill-sub-div">
            <div className="skill-left">
              <img
                src={skillFront}
                alt="Front End"
                className="frontend-png skill-frontend"
              />
            </div>

            <div className="skill-right">
              <p className="skill-h">Front End Development</p>
              <ul className="skill-ul">
                <li className="skill-li">
                  <SiCss3 className="icon css" />
                </li>
                <li className="skill-li">
                  <SiBootstrap className="icon bootstrap" />
                </li>
                <li className="skill-li">
                  <SiTailwindcss className="icon tailwind" />
                </li>
                <li className="skill-li">
                  <SiMui className="icon material-ui" />
                </li>
                <li className="skill-li">
                  <FaReact className="icon node" />
                </li>
              </ul>
              <div className="skill-text-div">
                <p className="skill-text">
                  ⚡ Designing highly attractive user interface for mobile and
                  web applications
                </p>
                <p className="skill-text">
                  ⚡ Customizing logo designs and building logos from scratch
                </p>
                <p className="skill-text">
                  ⚡ Creating the flow of application functionalities to
                  optimize user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainsection;
