// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DarkModeToggle from "./components/DarkModeToggle";
import ProjectCategories from './pages/ProjectCategories';
import CybersecurityProjects from './pages/CybersecurityProjects';
import IAMProjects from './pages/cybersecurityprojects/iam/IAMProjects';
import RBACProject from './pages/cybersecurityprojects/iam/RBACProject'; 
import MFAProject from './pages/cybersecurityprojects/iam/MFAProject'; 
import SSOProject from './pages/cybersecurityprojects/iam/SSOProject';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content with Routing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/projects" element={<ProjectCategories />} />
            <Route path="/projects/cybersecurity" element={<CybersecurityProjects />} />
            <Route path="/projects/cybersecurity/iam" element={<IAMProjects />} />
            <Route path="/projects/cybersecurity/iam/rbac" element={<RBACProject />} />
            <Route path="/projects/cybersecurity/iam/mfa" element={<MFAProject />} />
            <Route path="/projects/cybersecurity/iam/sso" element={<SSOProject />} />
          </Routes>
        </div>

        {/* Dark/Light Mode Toggle */}
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
