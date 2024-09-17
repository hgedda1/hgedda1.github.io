// src/pages/CybersecurityProjects.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const categories = [
  {
    id: "01",
    title: "IAM Projects",
    description: "Explore various Identity and Access Management (IAM) Projects.",
    path: "/projects/cybersecurity/iam",
  },
  {
    id: "02",
    title: "SIEM Projects",
    description: "Explore Security Information & Event Management (SIEM) projects.",
    path: "/projects/cybersecurity/siem",
  },
  {
    id: "03",
    title: "Forensics Projects",
    description: "Explore Cyber Incident Response and Digital Forensics projects.",
    path: "/projects/cybersecurity/forensics",
  },
  {
    id: "04",
    title: "Risk Assessment Projects",
    description: "Explore Cyber Risk Assessment and Quantification projects.",
    path: "/projects/cybersecurity/riskassessment",
  },
  {
    id: "05",
    title: "Data Protection Projects",
    description: "Explore Data Protection and Privacy projects.",
    path: "/projects/cybersecurity/dataprotection",
  },
  {
    id: "06",
    title: "Endpoint Security Projects",
    description: "Explore Endpoint Security projects.",
    path: "/projects/cybersecurity/endpointsecurity",
  },
  {
    id: "07",
    title: "Regulatory Compliance and Auditing Projects",
    description: "Explore projects related to regulatory compliance and auditing.",
    path: "/projects/cybersecurity/regulatorycompliance",
  },
  {
    id: "08",
    title: "Vulnerability Management Projects",
    description: "Explore projects on vulnerability management and patch automation.",
    path: "/projects/cybersecurity/vulnerabilitymanagement",
  }
];

export default function CybersecurityProjects() {
  const navigate = useNavigate(); // Initialize navigation hook

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specific project page
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
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Cybersecurity Projects
        </h1>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * category.id }} // Staggered animation
            >
              <Card className="relative flex flex-col bg-white dark:bg-gray-800">
                <div className="absolute top-2 right-2 text-cyan-400 text-sm">
                  {category.id}
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-gray-900 dark:text-gray-200">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {category.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="bg-cyan-400 text-black dark:text-black hover:bg-cyan-500 w-auto px-3 py-1 flex items-center text-sm"
                    onClick={() => handleCardClick(category.path)}
                  >
                    View projects
                    <ArrowRight className="ml-2 h-3 w-3" />
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
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => window.history.back()}
        >
          &larr; Back
        </button>
      </motion.div>
    </motion.div>
  );
}
