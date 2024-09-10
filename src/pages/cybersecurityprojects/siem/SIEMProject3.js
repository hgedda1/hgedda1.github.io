// src/pages/cybersecurityprojects/siem/SIEMProject3.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import siemMarkdown from "../../../files/siem/siem3.md";

export default function SIEMProject3() {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // useNavigate for back navigation

  useEffect(() => {
    fetch(siemMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-4xl flex items-center mb-4 relative">
        {/* Back Button at the top-left */}
        <button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          &larr; Back
        </button>

        {/* SIEM Project Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing">
          Compliance M & R
        </h1>
      </div>

      {/* Markdown Content */}
      <div className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // For GitHub-Flavored Markdown support
          rehypePlugins={[rehypeRaw]}  // For rendering raw HTML content
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Back Button at the bottom of the page */}
      <div className="w-full max-w-4xl flex justify-center mt-8">
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-6 py-3"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
