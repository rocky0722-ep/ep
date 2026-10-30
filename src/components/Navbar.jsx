import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navbar fixed at top with responsive mobile drawer.
 * Navigation links: About, Projects, Skills, Campus Life, Contact.
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3 px-5 sm:px-6'
            : 'bg-[#0d1117]/70 backdrop-blur-lg border-emerald-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3.5 px-5 sm:px-6'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg py-1 px-1.5"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 group-hover:border-emerald-400 transition-colors shadow-[0_0_12px_rgba(16,185,129,0.25)]">
              <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                EM
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-emerald-400 transition-colors">
                Eshwar M R
              </span>
              <span className="text-[11px] font-mono tracking-wider text-emerald-500/80 -mt-0.5">
                ECE // DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#161b22]/60 border border-emerald-500/10 rounded-full px-3 py-1.5">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/15 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-lime-400 rounded-full shadow-[0_0_6px_#a3e635]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Header Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center text-xs font-medium text-emerald-400 hover:text-lime-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-400/60 rounded-xl px-4 py-2 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] group"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 group-hover:scale-125 transition-transform"></span>
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-emerald-500/15 flex flex-col gap-1 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeLink === link.href
                    ? 'text-emerald-300 bg-emerald-500/15 font-semibold'
                    : 'text-zinc-300 hover:text-emerald-400 hover:bg-emerald-500/5'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-emerald-500/60">→</span>
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-emerald-500/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-emerald-500 text-[#0d1117] hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>Connect with Eshwar</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

