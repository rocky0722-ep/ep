import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * ProjectsSection Component
 * Renders the filter pill bar and a responsive 3-column grid of ProjectCards
 * with 3D perspective tilt physics and cyber-emerald styling.
 */
export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 1,
      title: 'Campus Event Finder',
      category: 'Web Apps',
      categoryLabel: 'Web Application',
      badge: 'KSIT Campus',
      description:
        'A centralized discovery portal for KSIT students to browse, register, and track campus workshops, hackathons, and technical symposiums in real-time. Features automated calendar synchronization and notification alerts for event deadlines.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://github.com/eshwarmr',
      githubUrl: 'https://github.com/eshwarmr',
    },
    {
      id: 2,
      title: 'Smart Attendance Tracker',
      category: 'AI / ML',
      categoryLabel: 'Computer Vision',
      badge: 'Edge AI System',
      description:
        'An automated classroom attendance system utilizing computer vision face recognition to log student presence in under 200 milliseconds. Generates instant absentee telemetry and exports seamless CSV reports directly to the department ERP.',
      tags: ['Python', 'OpenCV', 'FastAPI', 'Tailwind'],
      liveUrl: 'https://github.com/eshwarmr',
      githubUrl: 'https://github.com/eshwarmr',
    },
    {
      id: 3,
      title: 'Smart Queue System',
      category: 'Mini-Projects', // also matches Web Apps
      secondaryCategory: 'Web Apps',
      categoryLabel: 'Real-Time Utility',
      badge: 'Live Token Engine',
      description:
        'A lightweight real-time queue management system eliminating congestion at campus administrative desks and cafeteria counters. Features live wait-time estimation, digital token generation, and an instant WebSocket status dashboard.',
      tags: ['Tailwind', 'Node.js', 'Socket.io', 'Express'],
      liveUrl: 'https://github.com/eshwarmr',
      githubUrl: 'https://github.com/eshwarmr',
    },
  ];

  // Filtering logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Apps') {
      return project.category === 'Web Apps' || project.secondaryCategory === 'Web Apps';
    }
    if (activeFilter === 'AI / ML') {
      return project.category === 'AI / ML';
    }
    if (activeFilter === 'Mini-Projects') {
      return project.category === 'Mini-Projects';
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-emerald-500/15 pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-mono text-emerald-400 text-sm font-semibold tracking-wider">
              01 // SHOWCASE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Practical hardware & software engineering solutions built for campus life, real-time automation, and computer vision.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center gap-2 bg-[#161b22]/80 p-1.5 rounded-2xl border border-emerald-500/20 backdrop-blur-md shadow-inner">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid with Smooth Filter Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project) => (
          <div key={project.id} className="animate-fadeIn">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Quick Repository Note */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/eshwarmr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-lime-300 transition-colors group"
        >
          <span>Explore all open-source repositories on GitHub</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;

