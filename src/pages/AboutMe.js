// src/pages/AboutMe.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import DarkModeToggle from '../components/DarkModeToggle';
import { Button } from '../components/ui/Button';
import resumePdf from '../assets/hemanth_gedda.pdf'; 

export default function AboutMe({ darkMode, toggleDarkMode }) {
  useEffect(() => {
    // Apply the dark mode state based on the passed props
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const experiences = [
    { title: "Information Security Specialist", company: "Kdex Global", date: "June 2024 - Present", description: "Leading information security initiatives and implementing robust cybersecurity measures." },
    { title: "TRON Associate", company: "Amazon", date: "2020 - 2021", description: "Worked on cutting-edge technologies and contributed to Amazon's technical operations." },
    { title: ".NET Developer", company: "FusionIT", date: "2019 - 2020", description: "Developed and maintained enterprise-level applications using .NET framework." },
    { title: "Unity Developer", company: "Puffy Thumb Game Studio", date: "2018 - 2019", description: "Created immersive gaming experiences using Unity game engine." }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Dark Mode Toggle */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-customNuttoSans mb-4 breathing-animation">
            Hemanth Gedda
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-customDancingScript mb-8 h2-fill-animation">
            Information Security Specialist
          </h2>
        </motion.div>

        {/* About Me Section */}
        <motion.section 
          id="about" 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 blue-line-breathing">About Me</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Passionate about information security and cutting-edge technologies. 
            With a diverse background in development and security, I bring a unique 
            perspective to solving complex cybersecurity challenges.
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 blue-line-breathing">Experience</h3>
          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <h3 className="flex flex-col md:flex-row items-start md:items-center mb-1 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title} 
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mt-2 md:mt-0 md:ml-3">
                    {exp.company}
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.date}</time>
                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 blue-line-breathing text-center">
            Contact Me
          </h3>

          <div className="flex justify-center space-x-4">
            <motion.a 
              href="https://www.linkedin.com/in/hemanth-gedda-6b8419252/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsLinkedin className="text-2xl sm:text-3xl text-blue-600 hover:text-blue-800 transition-colors duration-300" />
            </motion.a>
            <motion.a 
              href="https://github.com/hgedda1" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsGithub className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" />
            </motion.a>
            <motion.a 
              href="mailto:hgedda1@binghamton.edu"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsEnvelope className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.section>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <a href={resumePdf} download="hemanth_gedda_resume.pdf">
            <Button className="mt-8">Download Resume</Button>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
