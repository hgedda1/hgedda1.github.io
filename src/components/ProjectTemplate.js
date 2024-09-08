import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectTemplate = ({ projectNumber, title, description }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl grid grid-cols-1 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Decorative cyan line and number */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-16 h-0.5 bg-cyan-400"></div>
          <span className="text-cyan-400 text-sm sm:text-base absolute top-0 left-20">{projectNumber}</span>
        </div>

        {/* Project Title and Description */}
        <div className="text-center space-y-2 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-black dark:text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* View Project Button */}
        <div className="text-center relative inline-block group">
          <button className="bg-cyan-400 text-black text-sm sm:text-base font-semibold py-1 px-3 sm:py-2 sm:px-5 flex items-center transition-colors relative z-10">
            <span className="relative z-10">View project</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
          </button>
          <div className="absolute inset-0 bg-cyan-400 skew-x-12 -skew-y-2 transform origin-bottom-right transition-transform group-hover:scale-105"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
