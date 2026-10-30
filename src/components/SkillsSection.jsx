import React from 'react';

/**
 * SkillsSection Component
 * Displays Eshwar M R's technical stack categorized into 3 clean panels:
 * 1. Languages (C, Python, Java)
 * 2. Frameworks & Tools (React, Tailwind CSS, Node.js, Git/GitHub)
 * 3. Core CS Concepts (Data Structures, OOPs, OS)
 *
 * Each badge features:
 * - Official tech icon
 * - Hover scale (scale-105) + emerald border glow
 * - Dynamic tooltip displaying comfort level
 */
export const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      badgeLabel: 'Syntax & Systems',
      icon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        {
          name: 'C',
          level: 'Familiar // Low-Level & Embedded',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#00599C" d="M64 14 14 42.9v57.8L64 129.6l50-28.9V42.9L64 14z" />
              <path fill="#FFF" d="M83.4 83.2c-4.9 5.3-11.2 8-19 8-7.7 0-14-2.7-19-8-5-5.3-7.5-12.1-7.5-20.4s2.5-15.1 7.5-20.4c5-5.3 11.3-8 19-8 8.1 0 14.6 2.8 19.5 8.3l-8.6 7.2c-3-3.6-6.6-5.4-10.9-5.4-4.8 0-8.8 1.7-12 5.1-3.2 3.4-4.8 7.8-4.8 13.2s1.6 9.8 4.8 13.2c3.2 3.4 7.2 5.1 12 5.1 4.3 0 7.9-1.8 10.9-5.4l8.6 7.2z" />
            </svg>
          ),
        },
        {
          name: 'Python',
          level: 'Proficient // AI & Scripting',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#3776AB" d="M63.2 6.4c-28.6 0-26.9 12.4-26.9 12.4l.1 12.8h27.4v3.9H25.4S6.2 33.3 6.2 62c0 28.6 16.8 27.6 16.8 27.6h10v-14s-.5-16.8 16.5-16.8h28.3s15.8.3 15.8-15.3V21.7s2.3-15.3-30.4-15.3zm-14.7 9.1a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6z" />
              <path fill="#FFD43B" d="M64.8 121.6c28.6 0 26.9-12.4 26.9-12.4l-.1-12.8H64.2v-3.9h38.4s19.2 2.2 19.2-26.5c0-28.6-16.8-27.6-16.8-27.6h-10v14s.5 16.8-16.5 16.8H50.2s-15.8-.3-15.8 15.3v21.8s-2.3 15.3 30.4 15.3zm14.7-9.1a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z" />
            </svg>
          ),
        },
        {
          name: 'Java',
          level: 'Familiar // OOP & Concurrency',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#EA2D2E" d="M47.7 94.6s-4.6 2.6 3.3 3.6c9.6 1.1 14.5 1.1 25.3-.9 0 0 3.7 2.3 8.8 4.2-30.8 13.5-62.7-1.6-37.4-6.9zm-2.8-14.6s-5.3 3.9 3.8 4.9c11.2 1.3 18.2 1.4 32.2-.9 0 0 2.6 1.7 6.4 3.7-36.9 11-71.1.9-42.4-7.7z" />
              <path fill="#007396" d="M68.7 54.4c4.8 5.6-1.3 10.9-1.3 10.9s12.2-6.3 6.6-14.1c-5.2-7.3-9.5-10.9 12.8-23.7 0 0-27.2 6.9-18.1 26.9zm18.4 22.8c12.2-6.3 6.6-14.1-5.2-7.3-9.5 7.3-12.2 6.3-12.2 6.3s12.6 6.6 17.4 1zm-32.9 30.7s-5.6 1.9 2.5 2.8c9.9 1.1 19.3 1.1 34.6-.9 0 0 2.1 1.7 5.5 3.1-41.9 9.3-77 1.8-42.6-5z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Frameworks & Tools',
      badgeLabel: 'Runtimes & Ecosystem',
      icon: (
        <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        {
          name: 'React',
          level: 'Proficient // Component Architecture',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <ellipse cx="64" cy="64" rx="14.8" ry="43.5" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 64 64)" />
              <ellipse cx="64" cy="64" rx="14.8" ry="43.5" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 64 64)" />
              <ellipse cx="64" cy="64" rx="14.8" ry="43.5" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 64 64)" />
              <circle cx="64" cy="64" r="9" fill="#61DAFB" />
            </svg>
          ),
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient // Responsive Design',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#38BDF8" d="M64 32c-19.2 0-30.4 9.6-33.6 28.8 7.2-7.2 16-9.6 26.4-7.2 5.9 1.4 10.2 5.7 14.8 10.5 7.6 7.7 16.3 16.7 34.4 16.7 19.2 0 30.4-9.6 33.6-28.8-7.2 7.2-16 9.6-26.4 7.2-5.9-1.4-10.2-5.7-14.8-10.5C80.8 40.9 72.1 32 64 32zM30.4 68.8C11.2 68.8 0 78.4-3.2 97.6c7.2-7.2 16-9.6 26.4-7.2 5.9 1.4 10.2 5.7 14.8 10.5 7.6 7.7 16.3 16.7 34.4 16.7 19.2 0 30.4-9.6 33.6-28.8-7.2 7.2-16 9.6-26.4 7.2-5.9-1.4-10.2-5.7-14.8-10.5-7.6-7.8-16.3-16.7-34.4-16.7z" transform="translate(16, 0) scale(0.75)" />
            </svg>
          ),
        },
        {
          name: 'Node.js',
          level: 'Familiar // APIs & Async I/O',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#68A063" d="M64 8.7 14 37.6v57.8L64 124.3l50-28.9V37.6L64 8.7z" />
              <path fill="#FFF" d="M64 30.6c13.7 0 24.8 11.1 24.8 24.8 0 11.4-7.7 21-18.1 23.9v-7.8c6.1-2.4 10.5-8.3 10.5-15.3 0-9.1-7.4-16.4-16.4-16.4s-16.4 7.4-16.4 16.4c0 7.4 4.8 13.6 11.4 15.6v7.7C48.6 77.2 40.1 67.2 40.1 55.4 40.1 41.7 50.8 30.6 64 30.6z" />
            </svg>
          ),
        },
        {
          name: 'Git / GitHub',
          level: 'Proficient // Version Control',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 128 128">
              <path fill="#F05032" d="M124.6 57.2 70.8 3.4c-4.5-4.5-11.9-4.5-16.4 0L42.5 15.3l17.7 17.7c4.3-1.4 9.2-.5 12.7 3 3.5 3.5 4.4 8.4 3 12.7l17 17c4.3-1.4 9.2-.5 12.7 3 4.9 4.9 4.9 12.8 0 17.7s-12.8 4.9-17.7 0c-3.6-3.6-4.4-8.8-2.7-13.2L68.7 56.7v35.8c1.3.6 2.5 1.5 3.6 2.6 4.9 4.9 4.9 12.8 0 17.7s-12.8 4.9-17.7 0-4.9-12.8 0-17.7c1.3-1.3 2.8-2.2 4.4-2.8V56.1c-1.6-.6-3.1-1.5-4.4-2.8-3.6-3.6-4.4-8.8-2.7-13.2L34.2 22.4 3.4 53.2c-4.5 4.5-4.5 11.9 0 16.4l53.8 53.8c4.5 4.5 11.9 4.5 16.4 0l51-51c4.5-4.5 4.5-11.9 0-16.4z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Core CS Concepts',
      badgeLabel: 'Foundations & Architecture',
      icon: (
        <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      skills: [
        {
          name: 'Data Structures',
          level: 'Familiar // Arrays, Trees, Graphs',
          icon: (
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="5" r="3" fill="currentColor" fillOpacity="0.2" />
              <circle cx="6" cy="19" r="3" fill="currentColor" fillOpacity="0.2" />
              <circle cx="18" cy="19" r="3" fill="currentColor" fillOpacity="0.2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m-3.5 2.5L6 16m9.5-1.5L18 16" />
            </svg>
          ),
        },
        {
          name: 'OOPs',
          level: 'Proficient // Encapsulation & Inheritance',
          icon: (
            <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          ),
        },
        {
          name: 'OS',
          level: 'Familiar // Processes & Memory Mgmt',
          icon: (
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" fillOpacity="0.1" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l3 3-3 3m5 0h4" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 border-t border-emerald-500/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-emerald-500/15 pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-mono text-emerald-400 text-sm font-semibold tracking-wider">
              02 // CAPABILITIES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & Skills
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Core programming languages, modern web frameworks, and foundational computer science principles applied in coursework and projects.
          </p>
        </div>

        {/* Live Comfort Level Indicator Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Hover badges to reveal familiarity</span>
        </div>
      </div>

      {/* 3 Categorized Skill Panels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {skillCategories.map((cat, idx) => (
          <div
            key={cat.category}
            className="group relative rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 p-6 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300"
          >
            {/* Top Subtle Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {cat.badgeLabel}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/70 border border-emerald-500/20 px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/badge relative inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0d1117]/85 border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)] hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {/* Official Tech Icon */}
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs font-medium text-zinc-200 group-hover/badge:text-white transition-colors">
                      {skill.name}
                    </span>

                    {/* Tiny Tooltip Displaying Comfort Level */}
                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/badge:opacity-100 group-hover/badge:-translate-y-1 transition-all duration-200 z-30">
                      <div className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#07090c] border border-emerald-400/70 text-emerald-300 shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_12px_rgba(16,185,129,0.4)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                        <span>{skill.level}</span>
                      </div>
                      {/* Tooltip Downward Caret */}
                      <div className="w-2 h-2 bg-[#07090c] border-r border-b border-emerald-400/70 transform rotate-45 mx-auto -mt-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Telemetry */}
            <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{cat.skills.length} core competencies</span>
              </span>
              <span className="text-emerald-500/60">ECE // CS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

