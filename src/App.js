// src/App.js
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DarkModeToggle from "./components/DarkModeToggle";
import ProjectCategories from './pages/ProjectCategories';
import CybersecurityProjects from './pages/CybersecurityProjects';
import IAMProjects from './pages/cybersecurityprojects/iam/IAMProjects';
import RBACProject from './pages/cybersecurityprojects/iam/RBACProject'; 
import MFAProject from './pages/cybersecurityprojects/iam/MFAProject'; 
import SSOProject from './pages/cybersecurityprojects/iam/SSOProject';
import SIEMProjects from './pages/cybersecurityprojects/siem/SIEMProjects';
import SIEMProject1 from './pages/cybersecurityprojects/siem/SIEMProject1';
import SIEMProject2 from './pages/cybersecurityprojects/siem/SIEMProject2';
import SIEMProject3 from './pages/cybersecurityprojects/siem/SIEMProject3';
import "./App.css";

// Layout component to conditionally show/hide Sidebar
const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where the sidebar should be hidden (markdown projects)
  const hideSidebarRoutes = [
    "/projects/cybersecurity/iam/rbac",
    "/projects/cybersecurity/iam/mfa",
    "/projects/cybersecurity/iam/sso",
    "/projects/cybersecurity/siem/siem1",
    "/projects/cybersecurity/siem/siem2",
    "/projects/cybersecurity/siem/siem3"
  ];

  // Check if the current route should hide the sidebar
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      {/* Conditionally render Sidebar */}
      <Sidebar showSidebar={showSidebar} />

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

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
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<ProjectCategories />} />
          <Route path="/projects/cybersecurity" element={<CybersecurityProjects />} />
          <Route path="/projects/cybersecurity/iam" element={<IAMProjects />} />
          <Route path="/projects/cybersecurity/iam/rbac" element={<RBACProject />} />
          <Route path="/projects/cybersecurity/iam/mfa" element={<MFAProject />} />
          <Route path="/projects/cybersecurity/iam/sso" element={<SSOProject />} />
          <Route path="/projects/cybersecurity/siem" element={<SIEMProjects />} />
          <Route path="/projects/cybersecurity/siem/siem1" element={<SIEMProject1 />} />
          <Route path="/projects/cybersecurity/siem/siem2" element={<SIEMProject2 />} />
          <Route path="/projects/cybersecurity/siem/siem3" element={<SIEMProject3 />} />
        </Routes>

        {/* Dark/Light Mode Toggle */}
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </Layout>
    </Router>
  );
}

export default App;
