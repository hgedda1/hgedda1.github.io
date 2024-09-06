import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-100 dark:bg-gray-900 w-16 flex flex-col items-center">
      {/* Logo at the top */}
      <div className="py-8">
        <span className="text-3xl font-bold text-black dark:text-white font-customMadeOfScars">
          HG
        </span>
      </div>
      {/* Rotated navigation links */}
      <nav className="flex flex-col space-y-10 mt-20">
        <a
          className="text-black dark:text-white font-customNunitoSans"
          href="#home"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Home
        </a>
        <a
          className="text-black dark:text-white font-customNunitoSans"
          href="#projects"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Projects
        </a>
        <a
          className="text-black dark:text-white font-customNunitoSans"
          href="#skills"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Skills
        </a>
        <a
          className="text-black dark:text-white font-customNunitoSans"
          href="#about"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          About Me
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
