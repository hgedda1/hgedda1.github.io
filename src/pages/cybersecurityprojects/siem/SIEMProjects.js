// src/pages/cybersecurityprojects/siem/SIEMProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../../components/CategoryCard';

const siemProjects = [
  {
    id: "01",
    title: "Building a SIEM Solution with ELK Stack",
    description: "Learn how to build a SIEM solution using the ELK Stack.",
    path: "/projects/cybersecurity/siem/siem1"
  },
  {
    id: "02",
    title: "Threat Intelligence Integration with SIEM",
    description: "Enhance SIEM with threat intelligence integration.",
    path: "/projects/cybersecurity/siem/siem2"
  },
  {
    id: "03",
    title: "Compliance Monitoring & Reporting with SIEM",
    description: "Monitor & report compliance with SIEM.",
    path: "/projects/cybersecurity/siem/siem3"
  }
];

export default function SIEMProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-12 sm:mt-16 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:translate-y-2 blue-line-breathing">
          SIEM Projects
        </h1>
      </div>

      {/* Max width container for project cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {siemProjects.map((project) => (
            <CategoryCard key={project.id} category={project} />
          ))}
        </div>
      </div>

      {/* Back Button positioned at the center-bottom */}
      <div className="mt-8 w-full flex justify-center">
        <button
          className="button-81"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
