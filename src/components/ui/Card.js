import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 font-NunitoSans ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mb-4 text-gray-700 dark:text-gray-300 font-NunitoSans">{children}</div>; // Added font-NunitoSans
}

export function CardFooter({ children }) {
  return <div>{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-NunitoSans"> {/* Applied the font */}
      {children}
    </h2>
  );
}
