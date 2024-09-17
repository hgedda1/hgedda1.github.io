// src/pages/datacloud/awsprojects/AWSProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

const awsProjects = [
  {
    id: "01",
    title: "Machine Learning Model Deployment with AWS SageMaker",
    description: "Deploy predictive models using AWS SageMaker for real-time predictions.",
    path: "/projects/datacloud/awsprojects/machine-learning"
  },
  {
    id: "02",
    title: "Predictive Modeling for Insurance Claims",
    description: "Forecast insurance claims using AWS S3, Redshift, and SageMaker.",
    path: "/projects/datacloud/awsprojects/predictive-modeling"
  },
  {
    id: "03",
    title: "Cloud-Based Data Pipeline for Real-Time Analytics",
    description: "Build real-time analytics pipelines using AWS Kinesis and Redshift.",
    path: "/projects/datacloud/awsprojects/data-pipeline"
  },
  {
    id: "04",
    title: "Intelligent Data Management System for Policy Data",
    description: "Manage policy data with AWS Redshift, RDS, and Glue.",
    path: "/projects/datacloud/awsprojects/data-management"
  }
];

export default function AWSProjects() {
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
        className="mt-12 sm:mt-16 w-full flex justify-center relative"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white font-customNunitoSans relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:translate-y-2  blue-line-breathing">
          AWS Projects
        </h1>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {awsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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

      {/* Back Button */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
