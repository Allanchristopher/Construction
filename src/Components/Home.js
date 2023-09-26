import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import logo from "../Assets/logo.svg";
import { gsap } from "gsap";
import moduleName from "../Assets/Right.svg";
import Hoverimg1 from "../Assets/hoverimg1.jpg";
import Hoverimg2 from "../Assets/hoverimg2.jpg";
import Hoverimg3 from "../Assets/hoverimg3.jpg";
import Hoverimg4 from "../Assets/hoverimg4.jpg";
import aboutpic1 from "../Assets/aboutpic-1.svg";
import userContext from "../Datacontexter";
const Home = () => {
  const contexter = useContext(userContext);
  const [rotatedText, setRotatedText] = useState(Hoverimg1);
  const [image, setImage] = useState();
  const [imageno, setImageno] = useState();
  useEffect(() => {
    if (imageno === "1") {
      setImage(Hoverimg1);
    } 
    else if (imageno === "2") {
      setImage(Hoverimg2);
    }
    else if (imageno === "3") {
      setImage(Hoverimg3);
    }
    else if (imageno === "4") {
      setImage(Hoverimg4);
    }
  }, [imageno]);

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

  // useEffect(() => {
  //   gsap.to(".circle-container", {
  //     x: 100,
  //     scale: 0,
  //     opacity: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".circle-container",
  //       start: "top 50%",
  //       scrub: 2,
  //     },
  //   });
  // }, []);

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
    transform: `translate(${mousePosition.x - 83}px, ${
      mousePosition.y - 50
    }px) translate(-50%, -50%)`,
    opacity: contexter.isHovered ? 1 : 0,
    visibility: contexter.isHovered ? "visible" : "hidden",
    width: contexter.isHovered ? "281px" : "281px", // Change this to the desired width
    height: contexter.isHovered ? "222px" : "222px", // Change this to the desired height
    position: "absolute",
    transition: "all 0.18s linear, all 0.2s linear",
    zindex: -1,
  };

  return (
    <div className="Home">
      <div className="Home-top">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="Home-center">
        <p className="Home-center-AAKAASH" onMouseEnter={() => {
              contexter.setIsHovered(true);
              setImageno("4");
            }}
            onMouseLeave={() => contexter.setIsHovered(false)}>AAKAASH ENGINEERING</p>
        <p className="Home-center-BIG" >
          <span
            onMouseEnter={() => {
              contexter.setIsHovered(true);
              setImageno("1");
            }}
            onMouseLeave={() => contexter.setIsHovered(false)}
          >
            Where {""}
          </span>
          <span
            onMouseEnter={() => {
              contexter.setIsHovered(true);
              setImageno("2");
            }}
            onMouseLeave={() => contexter.setIsHovered(false)}
          >
            Performance
          </span>
          <br/>
          <span 
           onMouseEnter={() => {
            contexter.setIsHovered(true);
            setImageno("3");
          }}
          onMouseLeave={() => contexter.setIsHovered(false)}
          >
             Speaks
          </span>
         
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
        <img className="hover-img" src={image} alt="Illustration" />
      </div>
    </div>
  );
};

export default Home;
