import React from 'react';

const cloudDataProjects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description for data project 1.',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description for data science project 2.',
  },
];

export default function CloudDataProjects() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">cloud Data Projects</h1>
      {cloudDataProjects.map((project) => (
        <div key={project.id} className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <h2 className="text-2xl">{project.name}</h2>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
