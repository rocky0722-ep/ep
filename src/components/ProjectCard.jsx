import React, { useRef, useState } from 'react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective tilt physics, cursor shine,
 * dark glass styling, and responsive layout.
 */
export const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-8 to +8 degrees for subtle, premium feel)
    const rotateX = -((y - centerY) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    // Dynamic 3D transform with translateY lift
    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
    );

    // Dynamic radial shine following the cursor
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle 220px at ${x}px ${y}px, rgba(16, 185, 129, 0.22), rgba(163, 230, 53, 0.08) 50%, transparent 80%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)');
    setShineStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out, border-color 0.4s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`group relative rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 p-6 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300 ${
        isHovered
          ? 'border-emerald-500/50 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.3)]'
          : 'shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* Sleek Mouse Shine Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10"
        style={shineStyle}
        aria-hidden="true"
      />

      {/* Decorative Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-20'
        }`}
        aria-hidden="true"
      />

      {/* Card Header & Content */}
      <div className="relative z-20">
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
            {project.badge}
          </span>
          <span className="text-xs font-mono text-zinc-500 group-hover:text-emerald-400 transition-colors">
            {project.categoryLabel}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-2.5">
          {project.title}
        </h3>

        {/* 2-Sentence Description */}
        <p className="text-sm text-zinc-300/85 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#0d1117]/80 text-zinc-300 border border-emerald-500/15 group-hover:border-emerald-500/35 group-hover:text-emerald-300 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons (Footer) */}
      <div className="relative z-20 pt-4 border-t border-emerald-500/15 flex items-center gap-3">
        {/* Live Demo Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0d1117] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95"
        >
          <span>Live Demo</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* GitHub Code Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-emerald-300 hover:text-white bg-[#0d1117]/80 hover:bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

