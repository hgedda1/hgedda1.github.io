import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

const endpointSecurityProjects = [
  {
    id: "01",
    title: "Comprehensive Endpoint Protection and Response",
    description: "Learn how to implement and manage comprehensive endpoint protection and response solutions.",
    path: "/projects/cybersecurity/endpointsecurity/comprehensive-endpoint"
  },
  {
    id: "02",
    title: "Endpoint Compliance and Patch Management",
    description: "Explore strategies for maintaining endpoint compliance and effective patch management.",
    path: "/projects/cybersecurity/endpointsecurity/endpoint-compliance"
  },
  {
    id: "03",
    title: "Implementing Endpoint Security with Open Source Tools",
    description: "Discover how to deploy endpoint security solutions using open-source tools.",
    path: "/projects/cybersecurity/endpointsecurity/endpoint-security"
  }
];

export default function EndpointSecurityProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Endpoint Security Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {endpointSecurityProjects.map((project) => (
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
