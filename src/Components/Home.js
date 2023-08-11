import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../Assets/logo.svg";
import { gsap } from "gsap";
import moduleName from "../Assets/Right.svg";
import Hoverimg from "../Assets/hoverimg.jpg";

const Home = () => {
  const [rotatedText, setRotatedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const originalText = "SCROLL TO EXPLORE";
    setRotatedText(
      originalText.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 18}deg)` }}>
          {char}
        </span>
      ))
    );
  }, []);

  useEffect(() => {
    gsap.to(".circle-container", {
      x: 100,
      scale: 0,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".circle-container",
        start: "top 50%",
        scrub: 2,
      },
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const hoveredImageStyle = {
 transform: `translate(${mousePosition.x - 83}px, ${mousePosition.y - 50}px) translate(-50%, -50%)`,
    opacity: isHovered ? 1 : 0,
    position: "absolute",
    transition: "transform 0.2s , opacity 0.4s ease", // Adjust the duration and easing as needed
  };

  return (
    <div className="Home">
      <div className="Home-top">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="Home-center">
        <p className="Home-center-AAKAASH">AAKAASH ENGINEERING</p>
        <p
          className="Home-center-BIG"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Where Performance Speaks
        </p>
      </div>
      <div className="circle-container">
        <div className="first-circle">
          <div className="circle">
            <div className="logoo">
              <img className="rightarrow" src={moduleName} alt="Logo" />
            </div>
            <div className="text">
              <p>{rotatedText}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hovered-image" style={hoveredImageStyle}>
        <img className="hover-img" src={Hoverimg} alt="Illustration" />
      </div>
    </div>
  );
};

export default Home;
