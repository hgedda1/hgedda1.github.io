import React from "react";
import { useSpring, animated } from "react-spring"; // For breathing effect

const MainContent = () => {
  const breathingAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.7 },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  return (
    <div className="main-content-container">
      {/* Name with breathing effect */}
      <animated.h1
        className="text-6xl text-black dark:text-white font-customDancingScript breathing-animation"
        style={breathingAnimation}
      >
        Hemanth Gedda
      </animated.h1>

      {/* Subtitle with caret animation */}
      <div className="relative">
        <h2 className="h2-solid">Cybersecurity Professional</h2>
        <div className="caret-reveal"></div>
      </div>
    </div>
  );
};

export default MainContent;
