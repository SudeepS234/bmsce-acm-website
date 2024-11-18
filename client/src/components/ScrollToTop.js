import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"; // Import the CSS file

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    setScrollProgress(progress);

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(
            #2785d5 ${scrollProgress}%,
            transparent ${scrollProgress}%
          )`,
        }}
      ></div>
      <span className="arrow-up">↑</span>
    </div>
  );
};

export default ScrollToTop;
