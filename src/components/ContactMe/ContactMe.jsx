import React, { useEffect } from "react";
import "./ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/Gaurav2k50",
      icon: <FaGithub size="25px" />,
      className: "github",
    },
    {
      href: "https://www.linkedin.com/in/gaurav2k50/",
      icon: <TiSocialLinkedin size="30px" />,
      className: "linkedin",
    },
    {
      href: "https://www.youtube.com/@ezecoding",
      icon: <FaYoutube size="20px" />,
      className: "youtube",
    },
    {
      href: "mailto:gaurav2k50@gmail.com",
      icon: <BsGoogle size="20px" />,
      className: "email",
    },
    {
      href: "https://x.com/Gaurav2k01",
      icon: <FaTwitter size="20px" />,
      className: "twitter",
    },
    {
      href: "https://www.facebook.com/profile.php",
      icon: <FaFacebookF size="20px" />,
      className: "facebook",
    },
    {
      href: "https://www.instagram.com/___iamgaurav/",
      icon: <FaInstagram size="20px" />,
      className: "instagram",
    },
  ];

  return (
    <div className="contact-main">
      <section className="contact-heading" data-aos="fade-up">
        <div
          className="contact-heading-img-div"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={myImg} alt="Profile" className="contact-my-img" />
        </div>
        <div
          className="contact-heading-text-div"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h1 className="contact-heading-text">Contact Me</h1>
          <p className="contact-heading-detail-text">
            I am available on almost every social media. You can message me, and
            I will reply within 24 hours. I can help you with HTML, CSS,
            JavaScript, React.js, Node.js, and Open Source Development.
          </p>
          <div className="contact-social-media-div">
            {socialLinks.map(({ href, icon, className }) => (
              <a
                href={href}
                className={`social-media-icons ${className}`}
                target="_blank"
                rel="noopener noreferrer"
                key={className}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="resume-btn-div">
            <a
              href="https://drive.google.com/file/d/18wVtSIQ6NMcI--zDLx9kqJmm9DYM3cEh/view?usp=sharing"
              className="main-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              See My Resume
            </a>
          </div>
        </div>
      </section>

      <section className="blog-section" data-aos="fade-up">
        <div
          className="blog-heading-text-div"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="blog-heading-text">Blogs</h1>
          <p className="blog-heading-details-text">
            I like to write powerful lessons that create impact on each reader,
            inspiring individual empowerment.
          </p>
          <div className="button-div">
            {" "}
            <a
              href="https://your-blog-url.com"
              className="main-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Blogsite
            </a>
          </div>
        </div>
        <div
          className="blog-heading-img-div"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={contactBlog} alt="Blogs" className="responsive-img" />
        </div>
      </section>

      <section className="address-section" data-aos="fade-up">
        <div
          className="address-heading-img-div"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={contactAddress} alt="Address" className="responsive-img" />
        </div>
        <div
          className="address-heading-text-div"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h1 className="address-heading-text">Address</h1>
          <p className="address-heading-details-text">
            Jamshedpur, Gamharia, T.A.-Adityapur, Dist.-Saraikella-Khrashwan,
            Jharkhand - 832108
          </p>
          <div className="button-div">
            {" "}
            <a
              href="https://www.google.com/maps/place/Gamharia,+Jharkhand+832108"
              className="main-button main-visit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
