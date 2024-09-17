// src/pages/cybersecurityprojects/forensics/ForensicsProject.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing motion for animations
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

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
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }} // Start with reduced size and opacity
      animate={{ opacity: 1, scale: 1 }} // Scale and fade into place
      transition={{ duration: 0.8 }} // Smooth transition effect
    >
      {/* Header Section */}
      <motion.div
        className="mt-24 sm:mt-28 w-full flex justify-center relative"
        initial={{ opacity: 0, y: -50 }} // Start off-screen upwards
        animate={{ opacity: 1, y: 0 }} // Slide down into view
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Forensics Projects
        </h1>
      </motion.div>

      {/* Project Cards Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }} // Start off-screen downwards
        animate={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for smoother effect
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {forensicsProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }} // Each card starts off-screen
              animate={{ opacity: 1, y: 0 }} // Slides into view
              transition={{ duration: 0.6, delay: project.id * 0.2 }} // Delayed entry for each card
            >
              <Card className="cursor-pointer" onClick={() => handleProjectClick(project.path)}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.path);
                    }}
                  >
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
        initial={{ opacity: 0, y: 50 }} // Start off-screen downwards
        animate={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ duration: 0.8, delay: 0.4 }} // Slight delay for smoother effect
      >
        <Button className="button-81" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </motion.div>
    </motion.div>
  );
}
