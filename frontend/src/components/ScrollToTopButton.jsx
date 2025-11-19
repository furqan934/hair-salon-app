import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 z-50"
          style={{
            backgroundColor: "#aa9e5f", // brand color
            color: "#fff", // icon color for contrast
            border: "2px solid white", // adds contrast outline
            transform: "translateX(-5px)", // slight left shift
          }}
        >
          <FaArrowUp className="text-white text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
