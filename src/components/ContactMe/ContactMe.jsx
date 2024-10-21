import React from "react";
import "./ContactMe.css";
import myImg from "../../assets/images/contact-myimg.jpg";
import contactBlog from "../../assets/images/contact-blog.png";
import contactAddress from "../../assets/images/contact-address.png";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";

const ContactMe = () => {
  return (
    <div className="contact-main">
      <div className="contact-heading-div">
        <div className="contact-heading-img-div">
          <img src={myImg} alt="" className="contact-my-img" />
        </div>
        <div className="contact-heading-text-div">
          <h1 className="contact-heading-text">Contact Me</h1>
          <p className="contact-heading-detail-text">
            I am available on almost every social media. You can <br /> message
            me, I will reply within 24 hours. I can help you <br />
            with Html, Css, JavaScript, React Js, Node Js, and Opensource
            Development.
          </p>
          <div className="contact-social-media-div">
            <a
              href="https://github.com/Gaurav2k50"
              className="social-media-icons github"
              target="blank"
            >
              <FaGithub className="icon" size="25px" color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav2k50/"
              target="blank"
              className="social-media-icons linkedin"
            >
              <TiSocialLinkedin className="icon" size="30px" color="white" />
            </a>
            <a
              href="https://www.youtube.com/@ezecoding"
              target="blank"
              className="social-media-icons youtube"
            >
              <FaYoutube className="icon" size="20px" color="white" />
            </a>
            <a
              href="mailto:gaurav2k50@gmail.com"
              target="blank"
              className="social-media-icons email"
            >
              <BsGoogle className="icon" size="20px" color="white" />
            </a>
            <a
              href="https://x.com/Gaurav2k01"
              target="blank"
              className="social-media-icons twitter"
            >
              <FaTwitter className="icon" size="20px" color="white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php"
              target="blank"
              className="social-media-icons facebook"
            >
              <FaFacebookF className="icon" size="20px" color="white" />
            </a>
            <a
              href="https://www.instagram.com/___iamgaurav/"
              target="blank"
              className="social-media-icons instagram"
            >
              <FaInstagram className="icon" size="20px" color="white" />
            </a>
          </div>
          <div className="resume-btn-div">
            <a
              href="https://drive.google.com/file/d/1B45nr0ACIdaSdUavSH45nuZsdz1SD1iN/view?usp=drive_link"
              className="resume-main-button"
              target="_blank"
            >
              See My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="blog-heading-main-div">
        <div className="blog-heading-text-div">
          <h1 className="blog-heading-text">Blogs</h1>
          <p className="blog-heading-details-text">
            For individual fundamental empowerment, I like to write powerful
            lessons that create impact on each of the reader individually to
            change the core of their character.
          </p>
          <div className="blogsite-btn-div">
            <a href="" className="blogsite-btn-a">
              Visit My Blogsite
            </a>
          </div>
        </div>
        <div className="blog-heading-img-div">
          <img src={contactBlog} alt="" className="blog-heading-img" />
        </div>
      </div>

      <div className="address-heading-main-div">
        <div className="address-heading-img-div">
          <img src={contactAddress} alt="" className="address-heading-img" />
        </div>
        <div className="address-heading-text-div">
          <h1 className="address-heading-text">Address</h1>
          <p className="address-heading-details-text">
            Jamshedpur, Gamharia, T.A.-Adityapur, Dist.-Saraikella-Khrashwan,
            Jharkhand - 832108
          </p>
          <div className="addresssite-btn-div">
            <a href="" className="addresssite-btn-a">
              Visit on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
