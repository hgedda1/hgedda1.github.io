// src/pages/cybersecurityprojects/dataprotection/DataProtectionProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../../components/CategoryCard';

const dataProtectionProjects = [
  {
    id: "01",
    title: "Implementing Data Encryption and Secure Storage",
    description: "Set up and manage data encryption and secure storage to protect sensitive information.",
    path: "/projects/cybersecurity/dataprotection/encryption"
  },
  {
    id: "02",
    title: "Data Loss Prevention (DLP) Implementation",
    description: "Implement a DLP strategy to monitor and protect sensitive data.",
    path: "/projects/cybersecurity/dataprotection/dlp"
  },
  {
    id: "03",
    title: "GDPR Compliance and Data Privacy Auditing",
    description: "Ensure GDPR compliance by auditing data privacy practices.",
    path: "/projects/cybersecurity/dataprotection/gdpr"
  }
];

export default function DataProtectionProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">
          Data Protection Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {dataProtectionProjects.map((project) => (
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
