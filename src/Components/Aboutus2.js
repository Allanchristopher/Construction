import React from "react";
import "./Aboutus2.css";
import aboutpic3 from "../Assets/aboutpic-3.svg";
function Aboutus2() {
  
  return (
    <div className="Aboutus2">
      <div className="aboutus2-container-1">
        <p className="year">2006</p>
        <p className="year">2007</p>
      </div>
      <div className="aboutus2-container-2">
        <div className="aboutus2-textcontainer">
          <p className="smallheading">Our Projects</p>
          <p className="smallheading">Durr India</p>
          <p className="smallheading">2006 - 2007</p>
          <br/>
          <p className="aboutus2-text">We started our journey in 2008, and we have come a long way from there. Here’s a glimpse of our many firsts, our biggest milestone, and our celebrations through the year.</p>
        </div>

        <img className="aboutpic3" src={aboutpic3} alt="img" />

      </div>
    </div>
  );
}

export default Aboutus2;
