
import React, { useState, useContext, useRef } from "react";
import "./Aboutus1.css";
import nationalicon from "../Assets/National-icon.svg";
import appoloicon from "../Assets/applo-icon.svg";
import Danfoss from "../Assets/Danfoss-icon.svg";
import oerlikon from "../Assets/oerlikon-icon.svg";
import ourclientsimg from "../Assets/ourclients-img.svg";
import Dragapollo from "../Assets/Dragapollo.jpg";
import DragDanfoss from "../Assets/DragDanfoss.jpg";
import userContext from "../Datacontexter";

function Aboutus1() {
  const contexter = useContext(userContext);
  const [ClickedImg, setClickedImg] = useState(ourclientsimg);
  const [Nationalicon, setNationalicon] = useState(false);
  const [Appoloicon, setAppoloicon] = useState(false);
  const [danfoss, setdanfoss] = useState(false);
  const [Oerlikon, setOerlikon] = useState(false);

  const handleIconMouseLeave = () => {
    contexter.setIsHovered(false);
  };

  const handleImageClick = (newImg) => {
    setClickedImg(newImg);
    setNationalicon(false);
    setAppoloicon(false);
    setdanfoss(false);
    setOerlikon(false);
  };

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.getBoundingClientRect().left);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - containerRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 1; // Adjust the scroll speed here
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="Aboutus1">
      <div
  ref={containerRef}
  className="aboutus-container-1"
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={() => {
    handleMouseUp();
    contexter.setIsHovered(false);
    contexter.setIsHoveredDrag(false);
  }}
  onMouseEnter={() => {contexter.setIsHovered(true);
    contexter.setIsHoveredDrag(true)
  } }
      >
        <img
          className={`nationalicon ${Nationalicon ? "icon" : ""}`}
          src={nationalicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(nationalicon);
            setNationalicon(true);
          }}
        />
        <img
          className={`appoloicon ${Appoloicon ? "icon" : ""}`}
          src={appoloicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(Dragapollo);
            setAppoloicon(true);
          }}
        />
        <img
          className={`Danfoss ${danfoss ? "icon" : ""}`}
          src={Danfoss}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(DragDanfoss);
            setdanfoss(true);
          }}
        />
        <img
          className={`oerlikon ${Oerlikon ? "icon" : ""}`}
          src={oerlikon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(oerlikon);
            setOerlikon(true);
          }}
        />
        <img
          className={`nationalicon ${Nationalicon ? "icon" : ""}`}
          src={nationalicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(nationalicon);
            setNationalicon(true);
          }}
        />
        <img
          className={`appoloicon ${Appoloicon ? "icon" : ""}`}
          src={appoloicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(appoloicon);
            setAppoloicon(true);
          }}
        />
        <img
          className={`Danfoss ${danfoss ? "icon" : ""}`}
          src={Danfoss}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(Danfoss);
            setdanfoss(true);
          }}
        />
      </div>

      <div className="aboutus-container-2" onClick={() => handleImageClick(ourclientsimg)}>
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
        <div
  ref={containerRef}
  className="aboutus-container-1-mobile-view"
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
 
      >
        <img
          className={`nationalicon ${Nationalicon ? "icon" : ""}`}
          src={nationalicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(nationalicon);
            setNationalicon(true);
          }}
        />
        <img
          className={`appoloicon ${Appoloicon ? "icon" : ""}`}
          src={appoloicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(Dragapollo);
            setAppoloicon(true);
          }}
        />
        <img
          className={`Danfoss ${danfoss ? "icon" : ""}`}
          src={Danfoss}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(DragDanfoss);
            setdanfoss(true);
          }}
        />
        <img
          className={`oerlikon ${Oerlikon ? "icon" : ""}`}
          src={oerlikon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(oerlikon);
            setOerlikon(true);
          }}
        />
        <img
          className={`nationalicon ${Nationalicon ? "icon" : ""}`}
          src={nationalicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(nationalicon);
            setNationalicon(true);
          }}
        />
        <img
          className={`appoloicon ${Appoloicon ? "icon" : ""}`}
          src={appoloicon}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(appoloicon);
            setAppoloicon(true);
          }}
        />
        <img
          className={`Danfoss ${danfoss ? "icon" : ""}`}
          src={Danfoss}
          alt="icon"
          // onMouseEnter={() => contexter.setIsHovered(true)}
          // onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            handleImageClick(Danfoss);
            setdanfoss(true);
          }}
        />
      </div>
        <div className="ourclients-img-container">
          <img className="ourclients-img" src={ClickedImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus1;


// import React, { useState, useContext,useRef ,useEffect} from "react";
// import "./Aboutus1.css";
// import nationalicon from "../Assets/National-icon.svg";
// import appoloicon from "../Assets/applo-icon.svg";
// import Danfoss from "../Assets/Danfoss-icon.svg";
// import oerlikon from "../Assets/oerlikon-icon.svg";
// import ourclientsimg from "../Assets/ourclients-img.svg";
// import userContext from "../Datacontexter";

// function Aboutus1() {
//   const contexter = useContext(userContext);
//   const [ClickedImg, setClickedImg] = useState(ourclientsimg);
//   const [Nationalicon, setNationalicon] = useState(false);
//   const [Appoloicon, setAppoloicon] = useState(false);
//   const [danfoss, setdanfoss] = useState(false);
//   const [Oerlikon, setOerlikon] = useState(false);

//   const handleIconMouseLeave = () => {
//     contexter.setIsHovered(false);
//   };

//   const handleImageClick = (newImg) => {
//     setClickedImg(newImg);
//     setNationalicon(false);
//     setAppoloicon(false);
//     setdanfoss(false);
//     setOerlikon(false);
//   };
//   const containerRef = useRef(null); // Use useRef here

//   useEffect(() => {
//     containerRef.current?.scrollTo({
//       left: 1000,
//     });
//   }, []);

//   return (
//     <div className="Aboutus1">
 
//         <div ref={containerRef} className="aboutus-container-1">
//           {" "}
//           <img
//             className={`nationalicon ${Nationalicon ? "icon" : ""}`}
//             src={nationalicon}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(nationalicon);
//               setNationalicon(true);
//             }}
//           />
//           <img
//             className={`appoloicon ${Appoloicon ? "icon" : ""}`}
//             src={appoloicon}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(appoloicon);
//               setAppoloicon(true);
//             }}
//           />
//           <img
//             className={`Danfoss ${danfoss ? "icon" : ""}`}
//             src={Danfoss}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(Danfoss);
//               setdanfoss(true);
//             }}
//           />
//           <img
//             className={`oerlikon ${Oerlikon ? "icon" : ""}`}
//             src={oerlikon}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(oerlikon);
//               setOerlikon(true);
//             }}
//           />
//             <img
//             className={`nationalicon ${Nationalicon ? "icon" : ""}`}
//             src={nationalicon}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(nationalicon);
//               setNationalicon(true);
//             }}
//           />
//           <img
//             className={`appoloicon ${Appoloicon ? "icon" : ""}`}
//             src={appoloicon}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(appoloicon);
//               setAppoloicon(true);
//             }}
//           />
//           <img
//             className={`Danfoss ${danfoss ? "icon" : ""}`}
//             src={Danfoss}
//             alt="icon"
            // onMouseEnter={() => contexter.setIsHovered(true)}
//             onMouseLeave={handleIconMouseLeave}
//             onClick={() => {
//               handleImageClick(Danfoss);
//               setdanfoss(true);
//             }}
//           />
        
//         </div>
  
//       <div
//         className="aboutus-container-2"
//         onClick={() => handleImageClick(ourclientsimg)}
//       >
//         <div className="ourclients-text">
//           <p className="ourclients-heading">
//             Our
//             <br /> Clients
//           </p>
//           <p className="ourclients-text-content">
//             We started our journey in 2008, and we have come a long way from
//             there. Here’s a glimpse of our many firsts, our biggest milestone,
//             and our celebrations through the year.
//           </p>
//         </div>
//         <div className="ourclients-img-container">
//           <img className="ourclients-img" src={ClickedImg} alt="img" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutus1;
