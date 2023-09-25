import React from "react";
import "./Aboutus1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nationalicon from "../Assets/National-icon.svg";
import appoloicon from "../Assets/applo-icon.svg";
import Danfoss from "../Assets/Danfoss-icon.svg";
import oerlikon from "../Assets/oerlikon-icon.svg";
import seyon from "../Assets/seyon-icon.svg";

function Aboutus1() {
  const logos = [nationalicon, appoloicon, oerlikon, Danfoss, seyon];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    // centerPadding: "10px",
    // className: "center",
      // centerMode: true,
  };

  return (
    <div className="Aboutus1">
      <div className="aboutus-container-1">
        <Slider {...settings} className="slider-carousel">
          {logos.map((logo, index) => (
            <div key={index} className="carousel-icon">
              <img src={logo} alt={`Logo ${index + 1}`} className="carousel-logo"/>
            </div>
          ))}
        </Slider>
      </div>
      <div className="aboutus-container-2">
        <div className="ourclients-text">
          <p className="ourclients-heading">
            Our
            <br /> Clients
          </p>
          <p className="ourclients-text-content">
            We started our journey in 2008, and we have come a long way from
            there. Here’s a glimpse of our many firsts, our biggest milestone,
            and our celebrations through the year.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus1;
