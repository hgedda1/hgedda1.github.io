import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const categories = [
  {
    id: "01",
    title: "Cybersecurity Projects",
    description: "Explore various projects in cybersecurity.",
    route: "/projects/cybersecurity" // Ensure this route exists in your router
  },
  {
    id: "02",
    title: "Cloud Data Projects",
    description: "Handling the cloud data in AWS & Azure.",
    route: "/projects/cloud-data" // Ensure this route exists in your router
  },
];

export default function ProjectCategories() {
  const navigate = useNavigate(); // Initialize navigation hook

  const handleCardClick = (route) => {
    navigate(route); // Navigate to the specified route when card is clicked
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white transform sm:-translate-x-80 lg:-translate-x-[200%] inline-block relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:transform after:translate-y-2 blue-line-breathing">
          Domains
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="relative flex flex-col cursor-pointer" 
              onClick={() => handleCardClick(category.route)} // Handle the card click for navigation
            >
              <CardHeader>
                <CardTitle className="text-black dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="text-xs dark:text-black"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card click when clicking the button
                    handleCardClick(category.route); // Navigate on button click
                  }}
                >
                  View projects
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
