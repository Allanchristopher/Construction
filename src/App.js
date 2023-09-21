import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import userContext from "./Datacontexter";
import Home from "./Components/Home";
import Courser from "./Components/Courser";
import Aboutus from "./Components/Aboutus";
import Aboutus1 from "./Components/Aboutus1";
import aboutpic3 from "./Assets/aboutpic-3.svg";
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

  useEffect(() => {
    console.clear();
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
    const sections = gsap.utils.toArray(".panel");
    const stops = [];
    sections.forEach((section, index) => {
      if (section.dataset.pin) stops.push(index);
    });
    console.log(stops);

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 2,
        end: "+=25000",
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
        )
        .staggerTo(
          q(".title-fade-in-4"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-5"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-5"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-6"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-6"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-7"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-7"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-8"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-8"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-9"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-9"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-10"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerTo(
          q(".title-fade-in-10"),
          0.5,
          { opacity: 0, y: 0, ease: "power2.out" },
          0.5
        )
        .staggerFromTo(
          q(".title-fade-in-11"),
          0.5,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.2
        );

      if (index === stops.length - 1) {
        tl.to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stop,
        });
      }
    });
  }, []);
  return (
    <div
      className="container noise"
      style={{ backgroundColor: backgroundColor }}
    >
      <userContext.Provider
        value={{
          isHovered,
          setIsHovered,
          isHoveredDrag,
          setIsHoveredDrag,
        }}
      >
        <section className="panel Nav-home">
          <Home />
        </section>
        <section className="panel">
          <Aboutus />
        </section>
        <section className="panel purple" data-pin="true">
          <div className="Aboutus2 title-fade-in-1">
            <div className="aboutus2-container-1   ">
              <p className="year ">2006 -2007</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer ">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Durr India</p>
                  <p className="smallheading">2006 -2007(40 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">Painting and Structural</p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                {" "}
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-2">
            <div className="aboutus2-container-1">
              <p className="year title-fade-in">2007</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">National Plastics</p>
                  <p className="smallheading">2007(70 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">
                    Trolyes, Mezzanine floor, EOT Cranes, Structural and
                    Moveable main gate
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-3">
            <div className="aboutus2-container-1">
              <p className="year title-fade-in">2007 -2008</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Hyundai Phase - 2</p>
                  <p className="smallheading">2007 -2008(7.5 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">Utility piping</p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-4">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2007 - 2015</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Blue Star</p>
                  <p className="smallheading">2007 - 2015(2 Crores)</p>
                  <br />
                  <p className="aboutus2-text">
                    Trolyes, Mezzanine floor, EOT Cranes, Structural and
                    Moveable main gate.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-5">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2009 - 2012</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Applo Tyres</p>
                  <p className="smallheading">2009 - 2012(3 Crores)</p>
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
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-6">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2009 - 2021</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">oerlikon balzers</p>
                  <p className="smallheading">2009 - 2021(1 Crore)</p>
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
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-7">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2014</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">EDAC</p>
                  <p className="smallheading">2014(52 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">
                    Expansion project and piping work.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                {" "}
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-8">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2015 - Tillnow...</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">DanFoss</p>
                  <p className="smallheading">2015 - Tillnow...(5 Crores)</p>
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
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-9">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2017</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Tesa Tapes</p>
                  <p className="smallheading">2017(22 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">
                    Partition work and Cold storage room.
                  </p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-10">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2017 - Tillnow...</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">Seoyyn</p>
                  <p className="smallheading">2017 - Tillnow...(2 Crores)</p>
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
                  src={aboutpic3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="Aboutus2 title-fade-in-11">
            <div className="aboutus2-container-1">
              <p className="year title-fade1-in">2020 - 2023</p>
            </div>
            <div className="aboutus2-container-2">
              <div className="aboutus2-container-2-container">
                <div className="aboutus2-textcontainer">
                  <p className="smallheading ">Our Projects</p>
                  <p className="smallheading">
                    Seoyyn (World Trade Center Chennai)
                  </p>
                  <p className="smallheading">2020 - 2023(30 Lakhs)</p>
                  <br />
                  <p className="aboutus2-text">Canopy and Structural works</p>
                </div>
              </div>
              <div className="aboutus-2-img-container">
                {" "}
                <img
                  className="aboutpic3 "
                  // title-fade-in
                  src={aboutpic3}
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
          {/* <div className="Aboutus3">
                <div className="aboutus3-piccontainer">
                  <img
                    className="aboutpic4 about3-1fade-out-in"
                    src={aboutpic4}
                    alt="img"
                  />
                  <img
                    className="aboutpic4 about3-2fade-out-in"
                    src={aboutpic4}
                    alt="img"
                  />
                </div>
                <div className="aboutus-2-container">
                  <div className="aboutpic4-heading-container ">
                    <p className="aboutpic4-heading about3-1fade-in">
                      Supporting
                      <br />
                      Jobs
                    </p>
                    <p className="aboutpic4-heading about3-2fade-in">
                      Supporting
                      <br />
                      Jobs
                    </p>
                  </div>
    
                  <div className="aboutpic4-text">
                    <div className="aboutpic4-text-container about3-1fade-out">
                      <p className="aboutus3-text-heading">Safety Stickers</p>
                      <br />
                      <br />
                      <p className="aboutus3-text">
                        We started our journey in 2008, and we have come a long way
                        from there. Here’s a glimpse of our many firsts, our biggest
                        milestone, and our celebrations through the year.
                      </p>
                    </div>
                    <div className="aboutpic4-text-container about3-2fade-out">
                      <p className="aboutus3-text-heading">Safety Stickers</p>
                      <br />
                      <br />
                      <p className="aboutus3-text">
                        We started our journey in 2008, and we have come a long way
                        from there. Here’s a glimpse of our many firsts, our biggest
                        milestone, and our celebrations through the year.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
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
                <br />
                <br />
                <p className="footerlogo-text">
                  We started our journey in 2008, and we have come a long way
                  from there.
                </p>
              </div>
              <div className="Footer-navbar">
                <p className="footer-navbar-heading">Pages</p>
                <br />
                <p className="footer-navbar">Home</p>
                <br />
                <p className="footer-navbar">About Us</p>
                <br />
                <p className="footer-navbar">Our Clients</p>
                <br />
                <p className="footer-navbar">Our Journey</p>
                <br />
                <p className="footer-navbar">Supporting Jobs</p>
                <br />
                <p className="footer-navbar">Contact Us</p>
                <br />
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
                <p className="Contact">+91 94864 70801</p>
                <p className="contact-heading"></p>
                <br />
                <p className="Contact">akash.rpaec@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <Courser />
      </userContext.Provider>
    </div>
  );
};

export default App;
