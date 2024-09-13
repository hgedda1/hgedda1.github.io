import React from 'react';

import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGitlab,
  FaLinux,
  FaReact,
  FaHtml5,
  FaGithub,
  FaNetworkWired,
  FaTerminal,
  FaSlack,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTerraform,
  SiPostgresql,
  SiMysql,
  SiApacheairflow,
  SiSplunk,
  SiUbuntu,
  SiElasticsearch,
  SiCsharp,
  SiTailwindcss,
  SiWebpack,
  SiRedis,
  SiMicrosoftazure,
  SiKubernetes,
  SiAnsible,
  SiPowerbi,
  SiJupyter,
  SiApachehadoop,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiApachespark,
  SiWireshark,
  SiMetasploit,
  SiOpenstack,
  SiVisualstudiocode,
  SiVim,
  SiNotepadplusplus,
  SiJira,
  SiNpm,
  SiVirtualbox,
  SiJenkins,
} from 'react-icons/si';

import { IoLogoMarkdown } from 'react-icons/io5';
import './skills.css';

const skills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'C#', icon: <SiCsharp /> },
      { name: 'Bash', icon: <FaLinux /> },
      { name: 'Markdown', icon: <IoLogoMarkdown /> },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    category: 'Front-End Technologies',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'NPM', icon: <SiNpm /> },
    ],
  },
  {
    category: 'Cloud Platforms & DevOps',
    skills: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Ansible', icon: <SiAnsible /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'GitLab', icon: <FaGitlab /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'Ubuntu', icon: <SiUbuntu /> },
    ],
  },
  {
    category: 'ML, AI & Data Processing',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
      { name: 'Apache Spark', icon: <SiApachespark /> },
      { name: 'Hadoop', icon: <SiApachehadoop /> },
      { name: 'Jupyter Notebooks', icon: <SiJupyter /> },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'VirtualBox', icon: <SiVirtualbox /> },
      { name: 'Apache Airflow', icon: <SiApacheairflow /> },
      { name: 'Slack', icon: <FaSlack /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
      { name: 'Vim', icon: <SiVim /> },
      { name: 'Notepad++', icon: <SiNotepadplusplus /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Power BI', icon: <SiPowerbi /> },
    ],
  },
  {
    category: 'Security & Compliance',
    skills: [
      { name: 'Splunk', icon: <SiSplunk /> },
      { name: 'Wireshark', icon: <SiWireshark /> },
      { name: 'Kali Linux', icon: <FaTerminal /> },
      { name: 'Metasploit', icon: <SiMetasploit /> },
      { name: 'Nmap', icon: <FaNetworkWired /> },
      { name: 'OpenStack', icon: <SiOpenstack /> },
      { name: 'ELK Stack', icon: <SiElasticsearch /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills-container">
      {skills.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-section">
          <h2 className="category-title blue-line-breathing">{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="icon-container">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
