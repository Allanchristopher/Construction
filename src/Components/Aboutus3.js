import React from "react";
import "./Aboutus3.css";
import aboutpic4 from "../Assets/aboutpic-4.svg";
function Aboutus3() {
  return (
    <div className="Aboutus3">
      <div className="aboutus3-piccontainer">
        <img className="aboutpic4" src={aboutpic4} alt="img" />

        <div className="aboutpic4-text">
          <p className="aboutus3-text-heading">Safety Stickers</p>
          <br/>
          <br/>
          <p className="aboutus3-text">
            We started our journey in 2008, and we have come a long way from
            there. Here’s a glimpse of our many firsts, our biggest milestone,
            and our celebrations through the year.
          </p>
        </div>
      </div>
      <div>
        <p className="aboutpic4-heading">Supporting<br/>
Jobs</p>
      </div>
    </div>
  );
}

export default Aboutus3;
