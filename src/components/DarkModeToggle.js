import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkModeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="absolute top-5 right-5">
      <button onClick={toggleDarkMode}>
        {darkMode ? <BsSun className="text-3xl text-white" /> : <BsMoon className="text-3xl text-black" />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
