// src/pages/cybersecurityprojects/forensics/IncidentResponseProject.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importing motion for animations
import ReactMarkdown from "react-markdown";
import incidentResponseMarkdown from "../../../files/forensics/incident-response.md";

export default function IncidentResponseProject() {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // for back navigation

  useEffect(() => {
    fetch(incidentResponseMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <motion.div
      className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade into view
      transition={{ duration: 0.8 }} // Smooth fade-in
    >
      {/* Header Section */}
      <motion.div
        className="w-full max-w-4xl flex items-center mb-4 relative"
        initial={{ x: "-100vw" }} // Slide in from the left
        animate={{ x: 0 }} // End at the right position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth sliding
      >
        {/* Back Button at the top-left */}
        <button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          &larr; Back
        </button>

        {/* Project Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing">
          Incident Response
        </h1>
      </motion.div>

      {/* Markdown Content */}
      <motion.div
        className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content"
        initial={{ scale: 0.8 }} // Start with a smaller scale
        animate={{ scale: 1 }} // Scale up to normal size
        transition={{ duration: 0.8 }} // Smooth scaling
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>

      {/* Back Button at the bottom of the page */}
      <motion.div
        className="w-full max-w-4xl flex justify-center mt-8"
        initial={{ y: "100vh" }} // Start below the screen
        animate={{ y: 0 }} // Slide up into view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth sliding
      >
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-6 py-3"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          &larr; Back
        </button>
      </motion.div>
    </motion.div>
  );
}
