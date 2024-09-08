// src/pages/CybersecurityProjects.js
import React from 'react';
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
  }
];

export default function CybersecurityProjects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:translate-y-2 blue-line-breathing">
          Cybersecurity Projects
        </h1>
      </div>

      {/* Max width container */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
