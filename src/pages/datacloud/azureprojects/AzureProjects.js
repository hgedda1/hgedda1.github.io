// src/pages/datacloud/azureprojects/AzureProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

const azureProjects = [
  {
    id: "01",
    title: "Data Lake Architecture",
    description: "Design and implementation of scalable data lakes with Azure Data Lake Storage and Databricks.",
    path: "/projects/datacloud/azureprojects/data-lake",
  },
  {
    id: "02",
    title: "Batch and Streaming Data Pipeline",
    description: "Real-time data pipeline with Azure Event Hubs and Stream Analytics for monitoring.",
    path: "/projects/datacloud/azureprojects/stream-analytics",
  },
  {
    id: "03",
    title: "Data Warehouse with Azure Synapse",
    description: "Build a data warehouse solution with Azure Synapse Analytics.",
    path: "/projects/datacloud/azureprojects/data-warehouse",
  },
  {
    id: "04",
    title: "Big Data Processing with HDInsight",
    description: "Process and analyze big data with Azure HDInsight using Spark and Hadoop.",
    path: "/projects/datacloud/azureprojects/big-data",
  },
  {
    id: "05",
    title: "Machine Learning Pipelines",
    description: "Deploy machine learning models using Azure Machine Learning Service.",
    path: "/projects/datacloud/azureprojects/ml-pipelines",
  },
];

export default function AzureProjects() {
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
      {/* Header with smooth animation */}
      <motion.div
        className="mt-24 sm:mt-28 w-full flex justify-center relative"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Azure Cloud Projects
        </h1>
      </motion.div>

      {/* Project Cards with staggered motion animation */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {azureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative flex flex-col bg-white dark:bg-gray-800 cursor-pointer">
                <div className="absolute top-2 right-2 text-cyan-400 text-sm">
                  {project.id}
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-gray-900 dark:text-gray-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="bg-cyan-400 text-black dark:text-black hover:bg-cyan-500 w-auto px-3 py-1 flex items-center text-sm"
                    onClick={() => handleCardClick(project.path)}
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

      {/* Back Button with slide-up animation */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
