// src/pages/ProjectCategories.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const categories = [
  {
    id: "01",
    title: "Cybersecurity Projects",
    description: "Explore various projects in cybersecurity.",
    route: "/projects/cybersecurity"
  },
  {
    id: "02",
    title: "Cloud Data Projects",
    description: "Handling the cloud data in AWS & Azure.",
    route: "/projects/datacloud"
  },
];

export default function ProjectCategories() {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route); // Navigate to the specified route when card is clicked
  };

  return (
    <motion.div 
      className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="mt-24 sm:mt-28 w-full flex justify-center relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white transform sm:-translate-x-80 lg:-translate-x-[200%] inline-block relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-cyan-400 after:bottom-0 after:left-0 after:transform after:translate-y-2 blue-line-breathing">
          Domains
        </h1>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * category.id }} // Staggered animation for each card
            >
              <Card 
                className="relative flex flex-col cursor-pointer" 
                onClick={() => handleCardClick(category.route)}
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
                      handleCardClick(category.route);
                    }}
                  >
                    View projects
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
