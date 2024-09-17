// src/pages/cybersecurityprojects/endpointsecurity/ComprehensiveEndpoint.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import ReactMarkdown from "react-markdown";
import comprehensiveEndpointMarkdown from "../../../files/endpointsecurity/comprehensive-endpoint.md";

export default function ComprehensiveEndpoint() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(comprehensiveEndpointMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <motion.div
      className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="w-full max-w-4xl flex items-center mb-4 relative"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        {/* Project Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing">
          Comprehensive EPR
        </h1>
      </motion.div>

      {/* Markdown Content */}
      <motion.div
        className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>

      {/* Bottom Back Button */}
      <motion.div
        className="w-full max-w-4xl flex justify-center mt-8"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-6 py-3"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </motion.div>
    </motion.div>
  );
}
