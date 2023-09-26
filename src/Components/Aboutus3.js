import React from "react";
import "./Aboutus3.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutpic4 from "../Assets/aboutpic-4.svg";
function Aboutus3() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },  {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },]
  };
  const contents = [
    {
      Heading: "Safety Stickers",
      content:"Safety stickers are essential visual aids that convey important information and guidelines to ensure the safety of individuals in various environments.",
    },
    {
      Heading: "Signage Stickers",
      content:"Signage stickers are versatile and effective tools for conveying information, providing directions, promoting brands, and enhancing safety in various settings.",
    },
    {
      Heading: "Safety Signage Board",
      content:
        "Safety Signage Board play a vital role in conveying important safety information, warning of potential hazards, and guiding individuals to ensure their well-being.",
    },
    {
      Heading: "Artistic Board",
      content:
        "An Artistic Board is a group of individuals with expertise in various artistic disciplines who provide guidance, support, and input to an arts organization, institution, or creative project.",
    },
    {
      Heading: "Road Thermal Marking",
      content:
        "Road thermal marking, often referred to as thermoplastic road marking or thermoplastic road striping, is a crucial element of road infrastructure and safety.",
    },
    {
      Heading: "Scaffolding Water Proofing",
      content:
        "Scaffolding waterproofing is a critical aspect of construction and maintenance projects involving scaffolds.",
    },
    {
      Heading: "Aluminium Louvers",
      content:
        "Aluminum louvers, often referred to as aluminum louvre systems or aluminum sunshades, are architectural elements used in building design and construction for a variety of purposes.",
    },
  ];
  return (
    <div className="Aboutus3">
      <div className="aboutus3-container-1">
        <div className="aboutus3-heading-container">
          <p className="aboutus-3-heading">
            Supporting
            <br />
            Jobs
          </p>
        </div>
      </div>
      <div className="aboutus3-container-2">
        <Slider {...settings} className="slider-carousel">
          {contents.map((content, index) => (
            <div key={index} className="supportingjobs-coursel-container">
              <p className="supportingjobs-heading">{content.Heading}</p>
              <br />
              <p className="supportingjobs-content">{content.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Aboutus3;
