// src/pages/cybersecurityprojects/riskassessment/RiskAssessmentProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../../components/CategoryCard';

const riskAssessmentProjects = [
  {
    id: "01",
    title: "Developing a Cyber Risk Assessment Framework",
    description: "Learn how to develop a comprehensive risk assessment framework.",
    path: "/projects/cybersecurity/riskassessment/developing-risk-framework"
  },
  {
    id: "02",
    title: "Cybersecurity Risk Assessment Audit",
    description: "Perform a cybersecurity risk assessment audit.",
    path: "/projects/cybersecurity/riskassessment/risk-assessment-audit"
  },
  {
    id: "03",
    title: "Continuous Risk Monitoring and Management",
    description: "Learn continuous risk monitoring strategies.",
    path: "/projects/cybersecurity/riskassessment/continuous-risk-monitoring"
  }
];

export default function RiskAssessmentProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">
          Risk Assessment Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {riskAssessmentProjects.map((project) => (
            <CategoryCard key={project.id} category={project} />
          ))}
        </div>
      </div>

      {/* Back Button positioned at the center-bottom */}
      <div className="mt-8 w-full flex justify-center">
        <button
          className="button-81"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
