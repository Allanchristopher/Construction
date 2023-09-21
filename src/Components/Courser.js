import React, { useState, useEffect, useContext } from "react";
import "./Courser.css";
import userContext from "../Datacontexter";
const CustomCursor = () => {
  const contexter = useContext(userContext);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={
          contexter.isHovered ? "cursor  cursor-border corseractive" : "cursor cursor-border"
        }
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      >{contexter.isHoveredDrag ? "Drag" : null}</div>
      <div
        className={contexter.isHovered ? "" : "cursor cursor-dot"}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
