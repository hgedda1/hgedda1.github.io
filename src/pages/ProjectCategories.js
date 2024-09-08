import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    id: "01",
    title: "Cybersecurity Projects",
    description: "Explore various projects in cybersecurity.",
    route: "/projects/cybersecurity" // Add a route for cybersecurity projects
  },
  {
    id: "02",
    title: "Cloud Data Projects",
    description: "Handling the cloud data in AWS & Azure.",
    route: "/projects/cloud-data" // Add a route for cloud data projects
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
            <div key={category.id} onClick={() => handleCardClick(category.route)}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
