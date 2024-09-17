import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

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

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }} // Smooth fade-in transition
    >
      <motion.div
        className="mt-24 sm:mt-28 w-full flex justify-center relative"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Slide down header animation
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Risk Assessment Projects
        </h1>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }} // Staggered fade-in for content
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {riskAssessmentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }} // Hover effect to scale up the card
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered slide-in animation
            >
              <Card key={project.id} className="cursor-pointer" onClick={() => handleProjectClick(project.path)}>
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
                  }}>View project</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back Button positioned at the center-bottom */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Slide up back button animation
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
