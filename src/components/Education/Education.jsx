import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import education from "../../assets/images/education.png";
import collgLogo from "../../assets/images/cllgLogo.png";
import virtual from "../../assets/images/virtual.png";
import iitbombay from "../../assets/images/iitbombay.png";
import irjcs from "../../assets/images/irjcs.png";
import edupng1 from "../../assets/images/edupng1.png";
import edupng2 from "../../assets/images/edupng2.png";
import edupng4 from "../../assets/images/edupng4.png";
import edupng3 from "../../assets/images/edupng3.png";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <div className="education-main-div">
      <div className="education-main" data-aos="fade-up">
        <div
          className="heading-img-div"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src={education} alt="" className="education-img" />
        </div>
        <div
          className="heading-text-div"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h1 className="heading-text">Education</h1>
          <h3 className="heading-sub-div">
            Basic Qualification and Certifications
          </h3>
          <div
            className="competitive-site-main-div"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ul className="dev-icon">
              {" "}
              <li className="competitive-sites-inline">
                <a
                  href="https://www.coursera.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={edupng1} alt="Coursera" width={40} />
                </a>
              </li>
              <li className="competitive-sites-inline">
                <a
                  href="https://www.udemy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={edupng2} alt="Udemy" width={40} />
                </a>
              </li>
              <li className="competitive-sites-inline">
                <a
                  href="https://www.edx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={edupng3} alt="edX" width={40} />
                </a>
              </li>
              <li className="competitive-sites-inline">
                <a
                  href="https://www.codecademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={edupng4} alt="Codecademy" width={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education-degree-main-div">
        <h1 className="educations-headers" data-aos="fade-up">
          Degree Received
        </h1>
        <div className="degree-card" data-aos="fade-up" data-aos-delay="200">
          <div
            className="degree-card-img"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img src={collgLogo} alt="" className="degree-img" />
          </div>
          <div
            className="degree-card-body"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="degree-card-sub-body">
              <div className="body-header">
                <h2 className="degree-h2">
                  Greater Noida Institute of Technology
                </h2>
                <h3 className="degree-h3">B.Tech. in Information Technology</h3>
              </div>
              <div className="body-header-duration">
                <h3 className="body-header-h3">2021-2024</h3>
              </div>
            </div>
            <div className="body-content">
              <p>
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA, AI etc.
              </p>
              <p>
                ⚡ Apart from this, I have done courses on AWS, Java and Full
                Stack Development.
              </p>
              <p>
                ⚡ Privileged to unveil my custom College ERP, a pioneering
                solution crafted for seamless campus management. Proudly
                acknowledged by the director for its transformative impact on
                student efficiency and administrative excellence.
              </p>
            </div>
            <a
              href="https://www.gniotgroup.edu.in/"
              className="visit-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="visit-btn">
                <p className="visit-btn-p">Visit Website</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="certs-header-div">
        <h1 className="certs-h1" data-aos="fade-up">
          Certifications
        </h1>
        <div className="cert-body-div">
          <div className="cert-card" data-aos="fade-up" data-aos-delay="200">
            <a
              href="https://drive.google.com/file/d/1KdhyBOLWxbAkA8Oasu3osehSTOF3LfMg/view?usp=drivesdk"
              target="blank"
            >
              <div className="cert-img-div">
                <img src={virtual} alt="" className="cart-img" />
              </div>
            </a>
            <div className="cert-body">
              <h2 className="cert-body-h2">AI-ML Internship</h2>
              <h3 className="cert-body-h3">- AWS</h3>
            </div>
          </div>

          <div className="cert-card" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://drive.google.com/file/d/1zr8Ol6RfdGMwNDgekR7l_Zazz-3Cj2M_/view?usp=drivesdk"
              target="blank"
            >
              <div className="cert-img-div">
                <img src={iitbombay} alt="" className="cart-img2" />
              </div>
            </a>
            <div className="cert-body">
              <h2 className="cert-body-h2">Java Training</h2>
              <h3 className="cert-body-h3">- IIT Bombay</h3>
            </div>
          </div>

          <div className="cert-card" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://drive.google.com/file/d/1zlRnVNtEepploe8XhE5HdxJeGBZFz-5D/view?usp=drivesdk"
              target="blank"
            >
              <div className="cert-img-div cert-div-3">
                <img src={irjcs} alt="" className="cart-img3" />
              </div>
            </a>
            <div className="cert-body">
              <h2 className="cert-body-h2">Research Journal</h2>
              <h3 className="cert-body-h3">- IRJCS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
