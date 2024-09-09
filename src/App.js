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
import ForensicsProjects from './pages/cybersecurityprojects/forensics/ForensicsProjects';
import IncidentResponseProject from './pages/cybersecurityprojects/forensics/IncidentResponseProject';
import DigitalForensicsProject from './pages/cybersecurityprojects/forensics/DigitalForensicsProject';
import SIEMIncidentResponseProject from './pages/cybersecurityprojects/forensics/SIEMIncidentResponseProject';
import RiskAssessmentProjects from './pages/cybersecurityprojects/riskassessment/RiskAssessmentProjects';
import DevelopingRiskAssessmentFramework from './pages/cybersecurityprojects/riskassessment/DevelopingRiskAssessmentFramework';
import CybersecurityRiskAssessmentAudit from './pages/cybersecurityprojects/riskassessment/CybersecurityRiskAssessmentAudit';
import ContinuousRiskMonitoring from './pages/cybersecurityprojects/riskassessment/ContinuousRiskMonitoring';
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
    "/projects/cybersecurity/siem/siem3",
    "/projects/cybersecurity/forensics/incident-response",
    "/projects/cybersecurity/forensics/digital-forensics",
    "/projects/cybersecurity/forensics/siem-incident-response",
    "/projects/cybersecurity/riskassessment/developing-risk-framework",
    "/projects/cybersecurity/riskassessment/risk-assessment-audit",
    "/projects/cybersecurity/riskassessment/continuous-risk-monitoring"
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

          {/* IAM Projects */}
          <Route path="/projects/cybersecurity/iam" element={<IAMProjects />} />
          <Route path="/projects/cybersecurity/iam/rbac" element={<RBACProject />} />
          <Route path="/projects/cybersecurity/iam/mfa" element={<MFAProject />} />
          <Route path="/projects/cybersecurity/iam/sso" element={<SSOProject />} />

          {/* SIEM Projects */}
          <Route path="/projects/cybersecurity/siem" element={<SIEMProjects />} />
          <Route path="/projects/cybersecurity/siem/siem1" element={<SIEMProject1 />} />
          <Route path="/projects/cybersecurity/siem/siem2" element={<SIEMProject2 />} />
          <Route path="/projects/cybersecurity/siem/siem3" element={<SIEMProject3 />} />
          
          {/* Forensics Projects */}
          <Route path="/projects/cybersecurity/forensics" element={<ForensicsProjects />} />
          <Route path="/projects/cybersecurity/forensics/incident-response" element={<IncidentResponseProject />} />
          <Route path="/projects/cybersecurity/forensics/digital-forensics" element={<DigitalForensicsProject />} />
          <Route path="/projects/cybersecurity/forensics/siem-incident-response" element={<SIEMIncidentResponseProject />} />

          {/* Risk Assessment Projects */}
          <Route path="/projects/cybersecurity/riskassessment" element={<RiskAssessmentProjects />} />
          <Route path="/projects/cybersecurity/riskassessment/developing-risk-framework" element={<DevelopingRiskAssessmentFramework />} />
          <Route path="/projects/cybersecurity/riskassessment/risk-assessment-audit" element={<CybersecurityRiskAssessmentAudit />} />
          <Route path="/projects/cybersecurity/riskassessment/continuous-risk-monitoring" element={<ContinuousRiskMonitoring />} />
        </Routes>

        {/* Dark/Light Mode Toggle */}
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </Layout>
    </Router>
  );
}

export default App;
