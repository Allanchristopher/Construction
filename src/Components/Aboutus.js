import React, { useState, useEffect } from "react";
import "./Aboutus.css";
import aboutpic1 from "../Assets/aboutpic-1.svg";
import aboutpic2 from "../Assets/aboutpic-2.svg";
function Aboutus() {
  const [rotatedText, setRotatedText] = useState("");

  useEffect(() => {
    const originalText = "MAINTAINING 5S STANDARDS";
    setRotatedText(
      originalText.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 14.5}deg)` }}>
          {char}
        </span>
      ))
    );
  }, []);
  return (
    <div className="Aboutus">
      <div className="about-1">
        <div className="about-1-img">
          <div className="about-round-text">
            <div className="circle-container1">
              <div className="first-circle1">
                <div className="circle1">
                  <div className="logoo1"></div>
                  <div className="text1">
                    <p>{rotatedText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-pic-1">
            <img className="aboutpic1" src={aboutpic1} alt="img" />
          </div>
        </div>

        <div className="about-text">
          <p className="about-heading">
            About <br />
            Us
          </p>
          <p className="about-text-content">
            We started our journey in 2008, and we have come a long way from
            there. Here’s a glimpse of our many firsts, our biggest milestone,
            and our celebrations through the year of industrial solutions-about
            all kind of segments from hr, production,-safety, pantry in-house,
            logistic, testing labs,stp/etp, utilities, landscape, roofing and
            flooring supply AND services,fire hydrant, Windows and glazing works
            etc.
          </p>
        </div>
      </div>

      <div className="about-2">
        <img className="aboutpic2" src={aboutpic2} alt="img" />
      </div>
    </div>
  );
}

export default Aboutus;
