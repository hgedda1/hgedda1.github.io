// src/pages/CloudDataProjects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const categories = [
  {
    id: "01",
    title: "AWS Projects",
    description: "Explore various AWS data-related projects.",
    path: "/projects/datacloud/awsprojects",
  },
  {
    id: "02",
    title: "Azure Projects",
    description: "Explore various Azure cloud data projects.",
    path: "/projects/datacloud/azureprojects",
  }
];

export default function CloudDataProjects() {
  const navigate = useNavigate(); // Initialize navigation hook

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specific project page
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Cloud Data Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="relative flex flex-col bg-white dark:bg-gray-800">
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
                  onClick={() => handleCardClick(category.path)} // Correct navigation
                >
                  View projects
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Back Button positioned at the center-bottom */}
      <div className="mt-8 w-full flex justify-center">
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => window.history.back()} // Go back to the previous page
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
