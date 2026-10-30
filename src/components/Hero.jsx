import React, { useState } from 'react';

/**
 * Hero Component
 * Opening Hero intro screen for Eshwar M R's portfolio.
 * Cyber-Emerald & Matte Carbon theme with radar badge, headline, bio, and glowing CTAs.
 */
export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText('eshwarmr.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Animated Blinking Radar Pill Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-6 hover:border-emerald-400/60 transition-all duration-300">
            {/* Blinking Radar Beacon */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>

            <span className="text-xs font-mono font-medium tracking-wide text-emerald-300">
              Student Developer <span className="text-emerald-500/60">//</span> Open for Internships
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.15] mb-5">
            Hey, I am{' '}
            <span className="relative inline-block whitespace-nowrap text-white font-black">
              Eshwar M R
              <span
                className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full"
                aria-hidden="true"
              />
            </span>{' '}
            — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
              Building the Future of Tech.
            </span>
          </h1>

          {/* Student Bio */}
          <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed font-normal max-w-2xl mb-8">
            2nd Year Electronics and Communication Engineering Student at{' '}
            <span className="text-emerald-300 font-medium">K S Institute of Technology</span>{' '}
            passionate about <span className="text-zinc-100 font-medium">web development</span>,{' '}
            <span className="text-lime-300 font-medium">AI</span>, and building real-world projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            {/* Glowing Emerald Primary Button */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0d1117] bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 hover:from-lime-300 hover:via-emerald-400 hover:to-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
            >
              <span>View My Projects</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Outline Secondary Button */}
            <a
              href="#resume"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium text-emerald-300 hover:text-lime-300 bg-[#0d1117]/80 hover:bg-emerald-950/40 border border-emerald-500/35 hover:border-lime-400/80 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_16px_rgba(0,0,0,0.4)] w-full sm:w-auto backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4 text-emerald-400 group-hover:text-lime-400 transition-colors group-hover:translate-y-0.5 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Resume / CV</span>
            </a>
          </div>

          {/* Quick Hardware & Software Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-emerald-500/15 w-full">
            <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Core Focus:
            </span>
            {['React & Next.js', 'Tailwind CSS', 'Applied AI / ML', 'IoT & Embedded', 'Python / C++'].map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161b22]/70 text-zinc-300 border border-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Cybernetic Live Terminal & Telemetry Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative group">
            {/* Ambient neon back glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-lime-500/20 to-emerald-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />

            <div className="relative rounded-2xl bg-[#0d1117]/90 border border-emerald-500/25 backdrop-blur-xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_#10b981]"></span>
                </div>
                <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="text-emerald-400">eshwar@ksit</span>:~/profile.ts
                </div>
                <div className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest bg-emerald-950/70 border border-emerald-500/20 px-2 py-0.5 rounded">
                  v2.4
                </div>
              </div>

              {/* Code / Telemetry Content */}
              <div className="font-mono text-xs text-zinc-300 space-y-2.5 leading-relaxed">
                <div>
                  <span className="text-emerald-400">const</span>{' '}
                  <span className="text-lime-300">developer</span> = &#123;
                </div>

                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-zinc-400">name:</span>{' '}
                    <span className="text-emerald-300">'Eshwar M R'</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">institution:</span>{' '}
                    <span className="text-emerald-300">'K. S. Institute of Technology'</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">degree:</span>{' '}
                    <span className="text-emerald-300">'B.E. in Electronics & Communication'</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">year:</span>{' '}
                    <span className="text-lime-300">2</span> <span className="text-zinc-400">// Sophmore (Class of '28)</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">passions:</span> [
                    <span className="text-lime-300">'Web Dev'</span>,{' '}
                    <span className="text-emerald-300">'Artificial Intelligence'</span>,{' '}
                    <span className="text-cyan-300">'Embedded Systems'</span>
                    ],
                  </div>
                  <div>
                    <span className="text-zinc-400">status:</span>{' '}
                    <span className="text-emerald-400 font-semibold">'Ready for Impact'</span>,
                  </div>
                </div>

                <div>&#125;;</div>

                {/* Live Console Output Box */}
                <div className="mt-4 pt-3 border-t border-emerald-500/15 bg-black/40 rounded-lg p-3">
                  <div className="text-[11px] text-zinc-400 flex items-center justify-between mb-1.5">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span>
                      SYSTEM TELEMETRY
                    </span>
                    <span className="text-zinc-400 text-[10px]">Ping: 24ms</span>
                  </div>
                  <p className="text-[11px] text-zinc-300">
                    &gt; Bridging hardware physics with modern software architectures.
                  </p>
                </div>
              </div>

              {/* Terminal Footer Quick Action */}
              <div className="mt-4 pt-3 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Bangalore, Karnataka
                </span>

                <button
                  onClick={copyEmail}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/40 transition-colors flex items-center gap-1.5"
                  title="Copy contact email"
                >
                  {copied ? (
                    <>
                      <span className="text-lime-400">✓ Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>copy contact</span>
                      <span className="text-[10px] text-emerald-400/80">📋</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1">
          Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-emerald-500/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-lime-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

