// src/pages/cybersecurityprojects/forensics/ForensicsProjects.js
import React from 'react';
import CategoryCard from '../../../components/CategoryCard';

const forensicsProjects = [
  {
    id: "01",
    title: "Building an Incident Response Plan and Playbook",
    description: "Develop a comprehensive incident response plan and playbook.",
    path: "/projects/cybersecurity/forensics/incident-response"
  },
  {
    id: "02",
    title: "Digital Forensics Investigation",
    description: "Conduct a digital forensics investigation to uncover the root cause of a cybersecurity incident.",
    path: "/projects/cybersecurity/forensics/digital-forensics"
  },
  {
    id: "03",
    title: "Integrating SIEM with Incident Response and Forensics",
    description: "Enhance incident response and forensics by integrating SIEM with incident management tools.",
    path: "/projects/cybersecurity/forensics/siem-incident-response"
  }
];

export default function ForensicsProjects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">
          Forensics Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {forensicsProjects.map((project) => (
            <CategoryCard key={project.id} category={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
