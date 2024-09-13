// src/App.js
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DarkModeToggle from "./components/DarkModeToggle";
import ProjectCategories from './pages/ProjectCategories';
import CybersecurityProjects from './pages/CybersecurityProjects';
import Skills from './pages/Skills';
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
import DataProtectionProjects from './pages/cybersecurityprojects/dataprotection/DataProtectionProjects';
import EncryptionProject from './pages/cybersecurityprojects/dataprotection/EncryptionProject';
import DLPProject from './pages/cybersecurityprojects/dataprotection/DLPProject';
import GDPRProject from './pages/cybersecurityprojects/dataprotection/GDPRProject';
import EndpointSecurityProjects from './pages/cybersecurityprojects/endpointsecurity/EndpointSecurityProjects';
import ComprehensiveEndpoint from './pages/cybersecurityprojects/endpointsecurity/ComprehensiveEndpoint';
import EndpointCompliance from './pages/cybersecurityprojects/endpointsecurity/EndpointCompliance';
import EndpointSecurity from './pages/cybersecurityprojects/endpointsecurity/EndpointSecurity';
import RegulatoryComplianceProjects from './pages/cybersecurityprojects/regulatorycompliance/RegulatoryComplianceProjects';
import GDPRCompliance from './pages/cybersecurityprojects/regulatorycompliance/GDPRCompliance';
import PCIDSSCompliance from './pages/cybersecurityprojects/regulatorycompliance/PCIDSSCompliance';
import ComplianceMonitoring from './pages/cybersecurityprojects/regulatorycompliance/ComplianceMonitoring';
import VulnerabilityManagementProjects from './pages/cybersecurityprojects/vulnerabilitymanagement/VulnerabilityManagementProjects';
import PatchAutomation from './pages/cybersecurityprojects/vulnerabilitymanagement/PatchAutomation';
import WebApplication from './pages/cybersecurityprojects/vulnerabilitymanagement/WebApplication';
import CloudDataProjects from './pages/CloudDataProjects';
import AWSProjects from "./pages/datacloud/awsprojects/AWSProjects";
import MachineLearning from "./pages/datacloud/awsprojects/MachineLearning";
import PredictiveModeling from "./pages/datacloud/awsprojects/PredictiveModeling";
import DataPipeline from "./pages/datacloud/awsprojects/DataPipeline";
import DataManagement from "./pages/datacloud/awsprojects/DataManagement";
import AzureProjects from './pages/datacloud/azureprojects/AzureProjects';
import DataLake from './pages/datacloud/azureprojects/DataLake';
import StreamAnalytics from './pages/datacloud/azureprojects/StreamAnalytics';
import DataWarehouse from './pages/datacloud/azureprojects/DataWarehouse';
import BigData from './pages/datacloud/azureprojects/BigData';
import MLPipelines from './pages/datacloud/azureprojects/MLPipelines';

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
          <Route path="/skills" element={<Skills />} />

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
          
          {/* Data Protection Projects */}
          <Route path="/projects/cybersecurity/dataprotection" element={<DataProtectionProjects />} />
          <Route path="/projects/cybersecurity/dataprotection/encryption" element={<EncryptionProject />} />
          <Route path="/projects/cybersecurity/dataprotection/dlp" element={<DLPProject />} />
          <Route path="/projects/cybersecurity/dataprotection/gdpr" element={<GDPRProject />} />
          
          {/* Endpoint Protection Projects */}
          <Route path="/projects/cybersecurity/endpointsecurity" element={<EndpointSecurityProjects />} />
          <Route path="/projects/cybersecurity/endpointsecurity/comprehensive-endpoint" element={<ComprehensiveEndpoint />} />
          <Route path="/projects/cybersecurity/endpointsecurity/endpoint-compliance" element={<EndpointCompliance />} />
          <Route path="/projects/cybersecurity/endpointsecurity/endpoint-security" element={<EndpointSecurity />} />

          {/* Regulatory compliance Projects */}
          <Route path="/projects/cybersecurity/regulatorycompliance" element={<RegulatoryComplianceProjects />} />
          <Route path="/projects/cybersecurity/regulatorycompliance/gdpr-compliance" element={<GDPRCompliance />} />
          <Route path="/projects/cybersecurity/regulatorycompliance/pci-dss-compliance" element={<PCIDSSCompliance />} />
          <Route path="/projects/cybersecurity/regulatorycompliance/compliance-monitoring" element={<ComplianceMonitoring />} />

          {/* vulnerability management Projects */}
          <Route path="/projects/cybersecurity/vulnerabilitymanagement" element={<VulnerabilityManagementProjects />} />
          <Route path="/projects/cybersecurity/vulnerabilitymanagement/patchautomation" element={<PatchAutomation />} />
          <Route path="/projects/cybersecurity/vulnerabilitymanagement/webapplication" element={<WebApplication />} />

          {/* Cloud Data route */}
          <Route path="/projects/datacloud" element={<CloudDataProjects />} />

          {/* AWS Projects */}
          <Route path="/projects/datacloud/awsprojects" element={<AWSProjects />} />
          <Route path="/projects/datacloud/awsprojects/machine-learning" element={<MachineLearning />} />
          <Route path="/projects/datacloud/awsprojects/predictive-modeling" element={<PredictiveModeling />} />
          <Route path="/projects/datacloud/awsprojects/data-pipeline" element={<DataPipeline />} />
          <Route path="/projects/datacloud/awsprojects/data-management" element={<DataManagement />} />

          {/* Azure Projects */}
          <Route path="/projects/datacloud/azureprojects" element={<AzureProjects />} />
          <Route path="/projects/datacloud/azureprojects/data-lake" element={<DataLake />} />
          <Route path="/projects/datacloud/azureprojects/stream-analytics" element={<StreamAnalytics />} />
          <Route path="/projects/datacloud/azureprojects/data-warehouse" element={<DataWarehouse />} />
          <Route path="/projects/datacloud/azureprojects/big-data" element={<BigData />} />
          <Route path="/projects/datacloud/azureprojects/ml-pipelines" element={<MLPipelines />} />
        </Routes>

        {/* Dark/Light Mode Toggle */}
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </Layout>
    </Router>
  );
}

export default App;
