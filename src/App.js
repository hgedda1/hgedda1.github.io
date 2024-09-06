import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sync dark mode with the document body (so Tailwind can toggle classes)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent />

        {/* Dark/Light Mode Toggle */}
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
