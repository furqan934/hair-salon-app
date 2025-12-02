import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  // Start slightly above bottom-right
  const [position, setPosition] = useState({
    x: window.innerWidth - 100,  // 100px from left
    y: window.innerHeight - 160, // 160px from top (slightly up)
  });

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Keep the button within viewport on window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 80),
        y: Math.min(prev.y, window.innerHeight - 80),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="fixed z-50 cursor-pointer w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <a
        href="https://wa.me/923407174761"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
