import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

const categories = [
  {
    id: "01",
    title: "Implementing Role-Based Access Control (RBAC) with AWS IAM",
    description: "Learn how to implement RBAC using AWS IAM.",
    path: "/projects/cybersecurity/iam/rbac"
  },
  {
    id: "02",
    title: "Multi-Factor Authentication (MFA) Implementation with Azure AD",
    description: "Implement MFA using Azure Active Directory.",
    path: "/projects/cybersecurity/iam/mfa"
  },
  { 
    id: "03",
    title: "Implementing Single Sign-On (SSO) with Okta",
    description: "Learn how to implement SSO with Okta.",
    path: "/projects/cybersecurity/iam/sso"
  }
];

export default function IAMProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-12 sm:mt-16 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          IAM Projects
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="cursor-pointer" onClick={() => handleProjectClick(category.path)}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={(e) => {
                  e.stopPropagation();
                  handleProjectClick(category.path);
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
