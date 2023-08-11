import React, { useState, useEffect } from "react";
import "./Courser.css";

const CustomCursor = () => {
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
    <><div
    className="custom-cursor"
    style={{
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
    }}
  ></div>
  <div
      className="dot-cursor"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    ></div>
  </>
    
  );
};

export default CustomCursor;
