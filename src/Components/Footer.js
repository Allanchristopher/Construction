import React from "react";
import "./Footer.css";
import footerlogo from "../Assets/footerlogo.svg";
function Footer() {
  const handleScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use "smooth" for smooth scrolling
    });
  };
  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.querySelector(".aboutus-section");
    if (aboutUsSection) {
      window.scrollTo({
        top: aboutUsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="Footer-logo">
          <img className="footerlogo" src={footerlogo} alt="img" />
          <br />
          <br />
          <p className="footerlogo-text">
            We are more than just a construction company; we are builders of
            dreams, architects of innovation, and stewards of quality.
          </p>
        </div>
        <div className="Footer-navbar">
          <p className="footer-navbar-heading">Pages</p>
          <br />
          <p className="footer-navbar" onClick={handleScrollToHome}>
            Home
          </p>
          <br />
          <p className="footer-navbar" onClick={handleScrollToAboutUs}>
            About Us
          </p>
          <br />
          <p className="footer-navbar">Our Clients</p>
          <br />
          <p className="footer-navbar">Our Journey</p>
          <br />
          <p className="footer-navbar">Supporting Jobs</p>
          <br />
          <p className="footer-navbar">Contact Us</p>
          <br />
        </div>
      </div>
      <div className="Footer-bottom">
        <div className="Address-container">
          <p className="address-heading"> Address</p>
          <br />
          <p className="address">
            No. 254, Walajabad Road, Panruti Village, Sriperumbudur, Tamil Nadu
            602105
          </p>
        </div>
        <div className="Contact-container">
          <p className="contact-heading">Contact</p>
          <br />
          <a href="tel:+91 9486470801" className="Contact">
            +91 9486470801
          </a>
          <p className="contact-heading"></p>
          <br />
          <a href="mailto:akash.rpaec@gmail.com" class="Contact">
            akash.rpaec@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
