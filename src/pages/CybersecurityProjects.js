// src/pages/CybersecurityProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    id: "01",
    title: "IAM Projects",
    description: "Explore various Identity and Access Management (IAM) Projects.",
    path: "/projects/cybersecurity/iam"
  },
  {
    id: "02",
    title: "SIEM Projects",
    description: "Explore Security Information & Event Management (SIEM) projects.",
    path: "/projects/cybersecurity/siem"
  },
  {
    id: "03",
    title: "Forensics Projects",
    description: "Explore Cyber Incident Response and Digital Forensics projects.",
    path: "/projects/cybersecurity/forensics"
  },
  {
    id: "04",
    title: "Risk Assessment Projects",
    description: "Explore Cyber Risk Assessment and Quantification projects.",
    path: "/projects/cybersecurity/riskassessment"
  }
];

export default function CybersecurityProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      {/* Container for Title */}
      <div className="mt-12 sm:mt-16 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:translate-y-2 blue-line-breathing">
          Cybersecurity Projects
        </h1>
      </div>

      {/* Max width container for project cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
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
