import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import userContext from "./Datacontexter";
import Home from "./Components/Home";
import Courser from "./Components/Courser";
import Aboutus from "./Components/Aboutus";
import Aboutus1 from "./Components/Aboutus1";
import scrollapploimg from "./Assets/scroll-applo-img.jpg";
import Danfossscrollimg from "./Assets/Danfoss-scroll-img.jpg";
import oerlikonscrollimg from "./Assets/oerlikon-scroll-img.jpg";
import seoyonscrollimg from "./Assets/seoyon-scroll-img.jpg";
import appoloicon from "./Assets/applo-icon.svg";
import oerlikon from "./Assets/oerlikon-icon.svg";
import Danfoss from "./Assets/Danfoss-icon.svg";
import seyon from "./Assets/seyon-icon.svg";
import aboutpic4 from "./Assets/aboutpic-4.svg";
import footerlogo from "./Assets/footerlogo.svg";
import "./Components/Aboutus2.css";
import "./Components/Aboutus3.css";
import "./Components/Footer.css";
import Aboutus3 from "./Components/Aboutus3";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDrag, setIsHoveredDrag] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const sectionsRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  useEffect(() =>{
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains("black")) {
          if (entry.isIntersecting) {
            setBackgroundColor("black");
          } else {
            setBackgroundColor("");
          }
        } else if (entry.target.classList.contains("gray")) {
          if (entry.isIntersecting) {
            setBackgroundColor("f5f1ee");
          } else {
            setBackgroundColor("");
          }
        } else if (entry.target.classList.contains("contactus-section")) {
          if (entry.isIntersecting) {
            setBackgroundColor("black");
          } else {
            setBackgroundColor("");
          }
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      threshold: 0.5,
    });
    observer.observe(sectionsRef.current[3]);
    observer.observe(sectionsRef.current[4]);
  },[])
  useEffect(() => {
    console.clear();
    
    const sections = gsap.utils.toArray(".panel");
    const stops = [];
    sections.forEach((section, index) => {
      if (section.dataset.pin) stops.push(index);
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 2,
        end: "+=16000",
      },
    });
    stops.forEach((stop, index) => {
      const q = gsap.utils.selector(sections[stop]);
      tl.to(sections, {
        xPercent: -(100 * stop),
        duration: stop,
      })

        .staggerTo(
          q(".title-fade-in-1"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-2"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-2"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )

        .staggerFromTo(
          q(".title-fade-in-3"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-3"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )

        .staggerFromTo(
          q(".title-fade-in-4"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        );
      // .staggerTo(
      //   q(".title-fade-in-4"),
      //   0.5,
      //   { opacity: 0, y: 0, ease: "power2.out" },
      //   0.5
      // );
      if (index === stops.length - 1) {
        tl.to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stop,
        });
      }
    });
  }, []);
  return (
    <div>  
    <userContext.Provider
    value={{
      isHovered,
      setIsHovered,
      isHoveredDrag,
      setIsHoveredDrag,
    }}
  >
    {windowWidth < 1000 ? (
      <div className="mob-container">
        <section className="Nav-home section-0">
      <Home />
    </section>
    <section className="section-1">
          <Aboutus />
        </section>
     
      </div>
      
    ) : (
     <div
      className="container noise"
      style={{ backgroundColor: backgroundColor }}
    >
     
        <section className="panel Nav-home">
          <Home />
        </section>
        <section className="panel">
          <Aboutus />
        </section>
        <section className="panel purple" data-pin="true">
          <div className="Aboutus2 title-fade-in-1">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2009 - 2012</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <img
                    src={appoloicon}
                    className="scroll-img-logo"
                    alt="logo"
                  />
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Applo Tyres</p>
                  <p className="smallheading">2009 - 2012 (3 Crores)</p>
                  <br />
                  <p className="aboutus2-text">
                    Mezzanine floors, Trolyes , Utility Piping.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={scrollapploimg}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-2">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2009 - 2021</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <img src={oerlikon} className="scroll-img-logo" alt="logo" />
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">oerlikon balzers</p>
                  <p className="smallheading">2009 - 2021 (1 Crore)</p>
                  <br />
                  <p className="aboutus2-text">
                    Office Partitions, Granite, Fall ceiling and Roofings.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={oerlikonscrollimg}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-3">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2015 - Tillnow...</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <img src={Danfoss} className="scroll-img-logo" alt="logo" />
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">DanFoss</p>
                  <p className="smallheading">2015 - Tillnow... (5 Crores)</p>
                  <br />
                  <p className="aboutus2-text">
                    Roofings, Floor carpets, Roof thermal markings, Rest rooms,
                    Solo meeting rooms.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={Danfossscrollimg}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-4">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2017 - Tillnow...</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <img src={seyon} className="scroll-img-logo" alt="logo" />
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Seoyon</p>
                  <p className="smallheading">2017 - Tillnow... (2 Crores)</p>
                  <br />
                  <p className="aboutus2-text">
                    Security off room, Civil constructions, Epoxy flooring,
                    Store room and Movable main gate.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={seoyonscrollimg}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="panel black"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <Aboutus1 />
        </section>
        <section className="panel gray">
          <Aboutus3 />
        </section>
        <section
          className="panel black"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <Contactus />
        </section>
        <section className="panel gray">
          <div className="Footer">
            <div className="Footer-top">
              <div className="Footer-logo">
                <img className="footerlogo" src={footerlogo} alt="img" />
              </div>
              <div className="Footer-navbar">
                 <p className="footerlogo-text">
                  We are more than just a construction company; we are builders
                  of dreams, architects of innovation, and stewards of quality.
                </p>
              </div>
            </div>
            <div className="Footer-bottom">
              <div className="Address-container">
                <p className="address-heading"> Address</p>
                <br />
                <p className="address">
                  No. 254, Walajabad Road, Panruti Village, Sriperumbudur, Tamil
                  Nadu 602105
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
        </section>
        <Courser />
    
    </div>
    )}
    </userContext.Provider>
    </div>
  
  

  );
};

export default App;
