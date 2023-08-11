import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Aboutus1 from "./Components/Aboutus1";
import Aboutus2 from "./Components/Aboutus2";
import Aboutus3 from "./Components/Aboutus3";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import Courser from "./Components/Courser";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Get references to all the sections
    sectionsRef.current = [
      ...document.querySelectorAll(".home-section"),
      ...document.querySelectorAll(".aboutus-section"),
      ...document.querySelectorAll(".aboutus1-section"),
      ...document.querySelectorAll(".aboutus2-section"),
      ...document.querySelectorAll(".aboutus3-section"),
      ...document.querySelectorAll(".contactus-section"),
      ...document.querySelectorAll(".footer-section")
    ];

    // Set up horizontal scrolling animations
    gsap.to(sectionsRef.current, {
      xPercent: -100 * (sectionsRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
        pin: true,
        // snap: {
        //   snapTo: 1 / (sectionsRef.current.length - 1),
        //   duration: 0.5
        // }
// Disable snapping
        end: () => "+=" + containerRef.current.offsetWidth * 5 // Use the width of the content as the end point
      
      }
    });

   
    // Add more animations for other sections as needed
  }, []);




  

  return (
    <div className="App">
      <div className="horizontalscrolling" ref={containerRef}>
        <div className="home-section" ref={el => (sectionsRef.current[0] = el)}>
          <Home />
        </div>
        <div className="aboutus-section" ref={el => (sectionsRef.current[1] = el)}>
          <Aboutus />
        </div>
        <div className="aboutus1-section" ref={el => (sectionsRef.current[2] = el)}>
          <Aboutus1 />
        </div>
        <div className="aboutus2-section" ref={el => (sectionsRef.current[3] = el)}>
          <Aboutus2 />
        </div>
        <div className="aboutus3-section" ref={el => (sectionsRef.current[4] = el)}>
          <Aboutus3 />
        </div>
        <div className="contactus-section" ref={el => (sectionsRef.current[5] = el)}>
          <Contactus />
        </div>
        <div className="footer-section" ref={el => (sectionsRef.current[6] = el)}>
          <Footer />
        </div>
      </div>
      <Courser/>
    </div>
  );
}

export default App;
