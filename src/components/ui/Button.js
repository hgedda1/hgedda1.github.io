// src/components/Button.js
import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`py-2 px-4 bg-cyan-400 text-sm sm:text-base text-black dark:text-black font-semibold font-NunitoSans rounded hover:bg-cyan-500 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
