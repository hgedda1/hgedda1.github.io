import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation

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
        <Link
          className="text-black dark:text-white font-customNunitoSans"
          to="/"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Home
        </Link>
        <Link
          className="text-black dark:text-white font-customNunitoSans"
          to="/projects"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Projects
        </Link>
        <Link
          className="text-black dark:text-white font-customNunitoSans"
          to="/skills"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Skills
        </Link>
        <Link
          className="text-black dark:text-white font-customNunitoSans"
          to="/about"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          About Me
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
