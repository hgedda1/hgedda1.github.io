// src/pages/cybersecurityprojects/iam/MFAProject.js
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import mfaMarkdown from "../../../files/mfa.md";

export default function MFAProject() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(mfaMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      {/* MFA Project Header with Breathing Animation */}
      <div className="mt-12 sm:mt-16 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white blue-line-breathing">
          MFA Project
        </h1>
      </div>

      {/* Markdown Content */}
      <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
