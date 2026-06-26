import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-oceanic/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="font-jetbrains text-forsythia text-xl font-bold tracking-tight">
              DataFlow
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 font-inter">
            <a href="#features" className="text-mystic hover:text-white transition-colors duration-200">Features</a>
            <a href="#pricing" className="text-mystic hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#case-studies" className="text-mystic hover:text-white transition-colors duration-200">Case Studies</a>
            <a href="#blog" className="text-mystic hover:text-white transition-colors duration-200">Blog</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-mystic hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              </svg>
            </button>
            <a href="#cta" className="bg-forsythia text-oceanic font-inter font-medium px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-200">
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-mystic hover:text-white focus:outline-none focus:ring-2 focus:ring-forsythia rounded-md p-1 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 z-40 bg-oceanic transition-all duration-[300ms] ease-in-out md:hidden flex flex-col pt-20 px-6 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <nav className="flex flex-col space-y-6 text-xl font-inter">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-mystic hover:text-forsythia transition-colors duration-200">Features</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-mystic hover:text-forsythia transition-colors duration-200">Pricing</a>
          <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-mystic hover:text-forsythia transition-colors duration-200">Case Studies</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-mystic hover:text-forsythia transition-colors duration-200">Blog</a>
        </nav>
        <div className="mt-10 flex flex-col space-y-4 font-inter">
          <button className="flex items-center text-mystic hover:text-forsythia transition-colors duration-200 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
            Search
          </button>
          <a href="#cta" onClick={() => setIsMobileMenuOpen(false)} className="bg-forsythia text-oceanic text-center font-medium px-4 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-200 w-full">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
