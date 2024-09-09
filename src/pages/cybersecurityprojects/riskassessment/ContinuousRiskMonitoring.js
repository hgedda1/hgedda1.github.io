// src/pages/cybersecurityprojects/riskassessment/ContinuousRiskMonitoring.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import continuousRiskMonitoringMarkdown from "../../../files/continuous-risk-monitoring.md";

export default function ContinuousRiskMonitoring() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(continuousRiskMonitoringMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex items-center mb-4 relative">
        <button
          className="button-81 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-4 py-2"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold mx-auto text-black dark:text-white blue-line-breathing">
          Continuous Risk Monitoring and Management
        </h1>
      </div>

      <div className="max-w-4xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <div className="w-full max-w-4xl flex justify-center mt-8">
        <button
          className="button-81 text-gray-900 dark:text-white dark:bg-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-600 border rounded-3xl px-6 py-3"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
