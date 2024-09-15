// src/components/Card.js

import React from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`rounded-lg shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-6 border-b ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h2 className={`text-2xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
}
