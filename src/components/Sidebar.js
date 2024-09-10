import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Use icons from react-icons

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Track the state for the dropdown menu in mobile

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  // Define routes to hide the sidebar in desktop view
  const hideSidebarRoutes = [
    "/projects/cybersecurity",
    "/projects/cloud-data",
    "/projects/cybersecurity/forensics",
    "/projects/cybersecurity/iam",
    "/projects/cybersecurity/riskassessment",
    "/projects/cybersecurity/siem",
    "/projects/cybersecurity/dataprotection",
    "/projects/cybersecurity/endpointsecurity",
    "/projects/cybersecurity/regulatorycompliance",
    "/projects/cybersecurity/vulnerabilitymanagement"
  ];

  const showSidebar = !hideSidebarRoutes.includes(pathname);

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden fixed top-5 right-5 z-50"> {/* Positioned for mobile */}
        <button
          className="p-1 text-black dark:text-white focus:outline-none" // Reduced padding for smaller button
          onClick={toggleDropdown}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />} {/* Smaller size for the menu icons */}
        </button>
      </div>

      {/* Dropdown Menu in Mobile */}
      {isOpen && (
        <div className="absolute top-14 right-5 z-40 w-40 bg-white dark:bg-gray-900 shadow-lg rounded-lg md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            <Link to="/" className="text-black dark:text-white" onClick={handleLinkClick}>Home</Link>
            <Link to="/projects" className="text-black dark:text-white" onClick={handleLinkClick}>Projects</Link>
            <Link to="/skills" className="text-black dark:text-white" onClick={handleLinkClick}>Skills</Link>
            <Link to="/about" className="text-black dark:text-white" onClick={handleLinkClick}>About Me</Link>
          </nav>
        </div>
      )}

      {/* Sidebar for Desktop (Visible for larger screens) */}
      <div className={`fixed left-0 top-0 h-full bg-gray-100 dark:bg-gray-900 w-16 flex flex-col items-center ${showSidebar ? '' : 'hidden md:flex'}`}>
        {/* Logo at the top */}
        <div className="py-8">
          <span className="text-3xl font-bold text-black dark:text-white font-customMadeOfScars">
            HG
          </span>
        </div>
        {/* Rotated navigation links for desktop */}
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
    </>
  );
};

export default Sidebar;
