import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    id: "01",
    title: "Cybersecurity Projects",
    description: "Explore various projects in cybersecurity.",
  },
  {
    id: "02",
    title: "Cloud Data Projects",
    description: "Handling the cloud data in AWS & Azure.",
  },
];

export default function ProjectCategories() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      {/* Sidebar margin for proper alignment */}
      <div className="mt-24 sm:mt-28 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white transform sm:-translate-x-80 lg:-translate-x-[200%] inline-block relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:transform after:translate-y-2">
          Domains
        </h1>
      </div>

      {/* Max width container to reduce excessive space on wider screens */}
      <div className="max-w-4xl mx-auto">
        {/* Grid Layout for Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
