// src/pages/cybersecurityprojects/dataprotection/DataProtectionProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

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

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mt-24 sm:mt-28 w-full flex justify-center relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Data Protection Projects
        </h1>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {dataProtectionProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card onClick={() => handleProjectClick(project.path)}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.path);
                  }}>
                    View project
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back Button positioned at the center-bottom */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => window.history.back()} // Go back to the previous page
        >
          &larr; Back
        </button>
      </motion.div>
    </motion.div>
  );
}
