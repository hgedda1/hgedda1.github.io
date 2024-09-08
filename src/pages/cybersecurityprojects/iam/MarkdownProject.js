import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Enables GitHub-flavored markdown (lists, tables, etc.)
import rehypeRaw from "rehype-raw"; // Enables rendering HTML within markdown
import rbacMarkdown from "../../../files/rbac.md";

export default function RBACProject() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(rbacMarkdown)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="mt-12 sm:mt-16 w-full flex justify-center relative">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">
          RBAC Project
        </h1>
      </div>

      {/* Markdown Content with remark-gfm and rehype-raw */}
      <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown
          rehypePlugins={[rehypeRaw]}  // Enable rendering HTML within markdown
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Download Button */}
      <div className="mt-8">
        <a
          href={rbacMarkdown}
          download="rbac.md"
          className="bg-cyan-400 text-black text-sm sm:text-base font-semibold py-2 px-4 rounded transition-colors hover:bg-cyan-300"
        >
          Download RBAC Report
        </a>
      </div>
    </div>
  );
}
