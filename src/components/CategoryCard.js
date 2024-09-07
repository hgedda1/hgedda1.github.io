import { ArrowRight } from "lucide-react";

function CategoryCard({ category }) {
  return (
    <div className="relative p-3 sm:p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-xs sm:max-w-sm lg:max-w-md mx-auto border border-gray-300 dark:border-gray-700 min-h-[180px] flex flex-col justify-between">
      {/* Blue line on the top left */}
      <div className="absolute top-0 left-0 w-1/5 h-0.5 bg-cyan-400"></div>

      {/* Numbering aligned to the right */}
      <div className="absolute top-2 right-4 text-cyan-400 text-xs sm:text-sm">
        {category.id}
      </div>

      <div className="space-y-2 mt-4 flex-grow">
        <h2 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-tight">
          {category.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {category.description}
        </p>
      </div>

      <div className="relative inline-block group mt-2">
        <button className="bg-cyan-400 text-black text-xs sm:text-sm font-semibold py-1 px-3 flex items-center rounded transition-transform transform group-hover:scale-105 relative z-10">
          <span className="relative z-10">View project</span>
          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
        </button>

        {/* Skewed background behind the button */}
        <div className="absolute inset-0 bg-cyan-400 skew-x-6 transform transition-transform group-hover:scale-105 rounded z-0"></div>
      </div>
    </div>
  );
}

export default CategoryCard;
