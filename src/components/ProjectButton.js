// src/components/ProjectButton.js

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProjectButton() {
  return (
    <div className="relative inline-block group mt-2">
      <button className="bg-cyan-400 text-black text-xs sm:text-sm font-semibold py-1 px-3 inline-flex items-center rounded transition-all duration-200 ease-in-out transform group-hover:scale-105 relative z-10 overflow-hidden">
        <span className="relative z-10 transition-transform duration-200 ease-in-out transform group-hover:scale-110">
          View project
        </span>
        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 relative z-10 transition-transform duration-200 ease-in-out transform group-hover:scale-110" />
      </button>
      {/* Adjusted skewed background behind the button */}
      <div className="absolute inset-0 bg-cyan-400 rounded-lg skew-x-6 transform scale-105 transition-transform duration-200 ease-in-out group-hover:scale-110"></div>
    </div>
  );
}
