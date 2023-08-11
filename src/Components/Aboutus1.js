import React from "react";
import "./Aboutus1.css";
import nationalicon from "../Assets/National-icon.svg";
import appoloicon from "../Assets/applo-icon.svg";
import Danfoss from "../Assets/Danfoss-icon.svg";
import oerlikon from "../Assets/oerlikon-icon.svg";
import ourclientsimg from "../Assets/ourclients-img.svg";
function Aboutus1() {
  return (
    <div className="Aboutus1">
      <div className="aboutus-container-1">
        <img className="nationalicon" src={nationalicon} alt="icon" />
        <img className="appoloicon" src={appoloicon} alt="icon" />
        <img className="Danfoss" src={Danfoss} alt="icon" />
        <img className="oerlikon" src={oerlikon} alt="icon" />
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
        <div className="ourclients-img-container">
          <img className="ourclients-img" src={ourclientsimg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus1;
