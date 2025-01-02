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
import { BsGoogle } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import skillMern from "../../assets/images/skillmern.png";
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
      <div className="main-section">
        <div className="main-section-sub-container">
          <div className="left-main-container">
            <div className="left-mid-container">
              <div className="name-text">
                <h1 className="greeting-text">Gaurav Singh</h1>
              </div>
              <p className="greeting-text-p">
                A passionate individual who always thrives to work on <br />
                end-to-end products which develop sustainable and <br />
                scalable social and technical systems to create impact.
              </p>
              <div className="social-media-div">
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
          <div className="right-main-container">
            <div className="greeting-image-div">
              <img src={GauravImg} alt="Gaurav Singh" className="main-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="skill-main-container">
        <div className="skill-heading-div">
          <h1 className="skill-heading">What I Do?</h1>
        </div>

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
      </div>
    </>
  );
};

export default Mainsection;
