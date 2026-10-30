import React from 'react';

/**
 * EducationJourney Component
 * Highlights Eshwar M R's college background, milestone timeline, and student accomplishments.
 * Features:
 * - Vertical illuminated emerald line with glowing nodal dots
 * - 3 Milestones: 2026 (NOTARC Drone Workshop 2nd Place), 2026 (SIH 2026), 2025 (Started BE at KSIT)
 * - 2x2 Achievement Badges grid with subtle hover highlights
 */
export const EducationJourney = () => {
  const milestones = [
    {
      year: '2026',
      status: 'Latest Achievement',
      title: 'Won 2nd Place — Drone Workshop in NOTARC',
      description:
        'Engineered, calibrated, and piloted autonomous aerial drones during the intense NOTARC technical workshop. Optimized sensor telemetry and PID motor controllers to secure second place among regional engineering teams.',
      tag: 'Robotics & Hardware',
      isLatest: true,
    },
    {
      year: '2026',
      status: 'National Hackathon',
      title: 'Participated in Smart India Hackathon (SIH 2026)',
      description:
        'Competed in SIH 2026 with a cross-functional student squad. Developed a real-world software prototype solving complex administrative bottleneck challenges under high-pressure competitive sprint conditions.',
      tag: 'Full-Stack & Systems',
      isLatest: false,
    },
    {
      year: '2025',
      status: 'Foundation Milestone',
      title: 'Commenced B.E. in Electronics & Communication at KSIT',
      description:
        'Began undergraduate journey at K S Institute of Technology, Bangalore. Dedicated coursework to digital electronics, signal processing, embedded microcontrollers, and modern software engineering.',
      tag: 'Academic Origin',
      isLatest: false,
    },
  ];

  const achievementBadges = [
    {
      icon: '🏆',
      title: '1st Place — University Hackathon',
      subtitle: 'Top project out of 50+ college development teams',
      metric: 'Champion',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      subtitle: 'Consistent algorithmic practice in Arrays, Trees & DP',
      metric: 'DSA Mastery',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'Coordinated campus technical workshops & coding jams',
      metric: 'KSIT Chapter',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Verified credentials in React, Node.js & Tailwind CSS',
      metric: 'Industry Ready',
    },
  ];

  return (
    <section id="campus-life" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 border-t border-emerald-500/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-emerald-500/15 pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-mono text-emerald-400 text-sm font-semibold tracking-wider">
              03 // EXPERIENCE & CAMPUS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Campus Journey
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            My engineering trajectory at K S Institute of Technology — from core academic foundations to competitive hackathons and drone robotics.
          </p>
        </div>

        {/* Current Standing Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span>B.E. Class of 2028 // KSIT</span>
        </div>
      </div>

      {/* Main Grid: Left Timeline (7 Cols) & Right Achievements (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Vertical Illuminated Timeline */}
        <div className="lg:col-span-7 relative pl-6 sm:pl-8">
          {/* Vertical Illuminated Emerald Line */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500 to-lime-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Nodal Dot */}
                <div
                  className={`absolute -left-[27px] sm:-left-[31px] top-1.5 w-6 h-6 rounded-full bg-[#0d1117] border-2 transition-all duration-300 flex items-center justify-center ${
                    milestone.isLatest
                      ? 'border-emerald-400 shadow-[0_0_16px_#10b981]'
                      : 'border-emerald-500/60 group-hover:border-lime-400 group-hover:shadow-[0_0_12px_#a3e635]'
                  }`}
                >
                  {milestone.isLatest ? (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:bg-lime-400 transition-colors"></span>
                  )}
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.35)] group-hover:border-emerald-400/50 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 group-hover:-translate-y-1">
                  {/* Card Header: Year + Status Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.2)]">
                        {milestone.year}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400/80">
                        // {milestone.status}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-400 border border-emerald-500/10">
                      {milestone.tag}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {milestone.title}
                  </h3>

                  {/* Milestone Description */}
                  <p className="text-xs sm:text-sm text-zinc-300/85 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Compact 2x2 Achievement Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Key Accomplishments</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/20 px-2 py-0.5 rounded">
                CALLOUTS
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Highlights from competitive hackathons, algorithmic problem solving, and student community leadership.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementBadges.map((badge, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 p-4 sm:p-5 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-emerald-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Top Row: Icon + Metric Chip */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-lg shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0d1117] text-lime-300 border border-emerald-500/20">
                    {badge.metric}
                  </span>
                </div>

                {/* Badge Title */}
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5 leading-snug">
                  {badge.title}
                </h4>

                {/* Subtitle */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {badge.subtitle}
                </p>

                {/* Subtle bottom glow line on hover */}
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* College Info Box */}
          <div className="mt-6 p-4 rounded-xl bg-[#0d1117]/80 border border-emerald-500/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-mono font-bold">
                KS
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-200">K S Institute of Technology</p>
                <p className="text-[11px] font-mono text-zinc-500">Dept. of Electronics & Communication // VTU</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 border border-emerald-500/20 px-2 py-1 rounded">
              Bengaluru
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationJourney;

