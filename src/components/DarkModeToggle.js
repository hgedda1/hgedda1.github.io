import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkModeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="absolute top-5 right-16 z-50 md:right-12 lg:right-16"> {/* Adjusted right positioning */}
      <button
        onClick={toggleDarkMode}
        className="p-1 sm:p-0.5 md:p-1 lg:p-1.5 rounded-full focus:outline-none"
      >
        {darkMode ? (
          <BsSun className="text-lg sm:text-sm md:text-lg lg:text-xl text-yellow-500" />
        ) : (
          <BsMoon className="text-lg sm:text-sm md:text-lg lg:text-xl text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
