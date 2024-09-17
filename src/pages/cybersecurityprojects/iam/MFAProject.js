// src/pages/cybersecurityprojects/iam/MFAProject.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion"; // Import motion from framer-motion
import mfaMarkdown from "../../../files/iam/mfa.md";

export default function MFAProject() {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // for back navigation

  useEffect(() => {
    fetch(mfaMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      {/* Header Section with animation */}
      <motion.div
        className="w-full max-w-4xl flex items-center mb-4 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Back Button at the top-left */}
        <motion.button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)} // Go back to the previous page
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &larr; Back
        </motion.button>

        {/* MFA Project Header */}
        <motion.h1
          className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          MFA Project
        </motion.h1>
      </motion.div>

      {/* Markdown Content with animation */}
      <motion.div
        className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>

      {/* Back Button at the bottom of the page */}
      <motion.div
        className="w-full max-w-4xl flex justify-center mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-6 py-3"
          onClick={() => navigate(-1)} // Go back to the previous page
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &larr; Back
        </motion.button>
      </motion.div>
    </div>
  );
}
