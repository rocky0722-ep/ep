import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationJourney from './components/EducationJourney';
import MatrixGridCanvas from './components/MatrixGridCanvas';

export const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-[#0d1117] overflow-x-hidden">
      {/* Interactive Matrix Dot Grid Background Canvas */}
      <MatrixGridCanvas />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Opening Hero Intro Screen */}
        <Hero />

        {/* Featured Projects Showcase with 3D Tilt Cards & Filtering */}
        <ProjectsSection />

        {/* Categorized Tech Stack & Skills Section */}
        <SkillsSection />

        {/* Education & Campus Journey with Interactive Timeline & 2x2 Achievement Badges */}
        <EducationJourney />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/10 max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono text-lime-400 tracking-widest uppercase mb-2 block">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Whether you have an internship opportunity, a project idea, or just want to chat about tech and electronics, my inbox is always open.
          </p>
          <a
            href="mailto:eshwarmr.dev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#0d1117] bg-emerald-400 hover:bg-lime-400 transition-colors shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            Say Hello ✉️
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 py-8 px-4 text-center text-xs font-mono text-zinc-500 relative z-10">
        <p>Crafted by Eshwar M R • Cyber-Emerald Theme • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
