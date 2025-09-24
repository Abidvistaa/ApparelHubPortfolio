import React, { useState, useEffect } from "react";
import "./scrollUpButton.css"; // We'll add CSS next

const ScrollUpButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 100px
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-up-btn ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
        🡹
    </button>
  );
};

export default ScrollUpButton;
