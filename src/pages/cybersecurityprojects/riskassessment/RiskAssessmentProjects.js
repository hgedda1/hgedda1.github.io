import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          Risk Assessment Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {riskAssessmentProjects.map((project) => (
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
        <Button className="button-81" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </div>
    </div>
  );
}
