import React from "react";
import "./Mainsection.css";
import GauravImg from "../../assets/images/Gauravmainimg.jpeg";
import { RiStarFill } from "react-icons/ri";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";

const Mainsection = () => {
  return (
    <div className="main-section">
      <div className="main-section-sub-container">
        <div className="left-main-container">
          <div className="left-mid-container">
            <h1 className="greeting-text">Gaurav Singh</h1>
            <p className="greeting-text-p">
              A passionate individual who always thrives to work on <br />
              end-to-end products which develop sustainable and <br /> scalable
              social and technical systems to create impact.
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
                <TiSocialLinkedin className="icon" size="30px" color="white" />
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
  );
};

export default Mainsection;
