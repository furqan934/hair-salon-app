import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs"; // WhatsApp icon

const WhatsAppButton = () => {
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
      className="fixed z-50 cursor-pointer w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <a
        href="https://wa.me/923407174761"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
