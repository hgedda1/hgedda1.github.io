// src/pages/cybersecurityprojects/forensics/DigitalForensicsProject.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import ReactMarkdown from "react-markdown";
import digitalForensicsMarkdown from "../../../files/forensics/digital-forensics.md";

export default function DigitalForensicsProject() {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // for back navigation

  useEffect(() => {
    fetch(digitalForensicsMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <motion.div
      className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0, x: "-100vw" }} // Start off-screen
      animate={{ opacity: 1, x: 0 }} // Slide into view
      transition={{ duration: 1.0, type: "spring", stiffness: 100 }}
    >
      {/* Header Section */}
      <motion.div
        className="w-full max-w-4xl flex items-center mb-4 relative"
        initial={{ opacity: 0, y: -50 }} // Slide down the header
        animate={{ opacity: 1, y: 0 }} // Slide into position
        transition={{ duration: 0.8 }}
      >
        {/* Back Button at the top-left */}
        <motion.button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)} // Go back to the previous page
          initial={{ opacity: 0, x: -50 }} // Start slightly off-screen
          animate={{ opacity: 1, x: 0 }} // Slide in from the left
          transition={{ duration: 0.6 }}
        >
          &larr; Back
        </motion.button>

        {/* Project Header */}
        <motion.h1
          className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing"
          initial={{ scale: 0.8, opacity: 0 }} // Start smaller and faded out
          animate={{ scale: 1, opacity: 1 }} // Grow to normal size
          transition={{ duration: 0.8, delay: 0.2 }} // Delay to sync animations
        >
          Digital Forensics
        </motion.h1>
      </motion.div>

      {/* Markdown Content */}
      <motion.div
        className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content"
        initial={{ x: "-100vw" }} // Slide in from left
        animate={{ x: 0 }} // Move into place
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>

      {/* Back Button positioned at the center-bottom */}
      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }} // Start off-screen (below)
        animate={{ opacity: 1, y: 0 }} // Move into place
        transition={{ duration: 0.8, delay: 0.4 }} // Delay to sync with other elements
      >
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => window.history.back()} // Go back to the previous page
        >
          &larr; Back
        </button>
      </motion.div>
    </motion.div>
  );
}
