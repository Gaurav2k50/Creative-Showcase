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
} from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import skillMern from "../../assets/images/skillmern.png";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

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
                end-to-end products which develop sustainable and <br />{" "}
                scalable social and technical systems to create impact.
              </p>
              <div className="social-media-div">
                <a
                  href="https://github.com/Gaurav2k50"
                  className="social-media-icons github"
                  target="_blank"
                >
                  <FaGithub className="icon" size="25px" color="white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurav2k50/"
                  className="social-media-icons linkedin"
                  target="_blank"
                >
                  <TiSocialLinkedin
                    className="icon"
                    size="30px"
                    color="white"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ezecoding"
                  className="social-media-icons youtube"
                  target="_blank"
                >
                  <FaYoutube className="icon" size="20px" color="white" />
                </a>
                <a
                  href="mailto:gaurav2k50@gmail.com"
                  className="social-media-icons email"
                  target="_blank"
                >
                  <BsGoogle className="icon" size="20px" color="white" />
                </a>
                <a
                  href="https://x.com/Gaurav2k01"
                  className="social-media-icons twitter"
                  target="_blank"
                >
                  <FaTwitter className="icon" size="20px" color="white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php"
                  className="social-media-icons facebook"
                  target="_blank"
                >
                  <FaFacebookF className="icon" size="20px" color="white" />
                </a>
                <a
                  href="https://www.instagram.com/___iamgaurav/"
                  className="social-media-icons instagram"
                  target="_blank"
                >
                  <FaInstagram className="icon" size="20px" color="white" />
                </a>
              </div>
              <div className="portfolio-repo-btn">
                <a
                  href="https://github.com/Gaurav2k50"
                  className="a"
                  target="_blank"
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
              <img src={skillMern} alt="" className="mern-png" />
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
    </>
  );
};

export default Mainsection;
