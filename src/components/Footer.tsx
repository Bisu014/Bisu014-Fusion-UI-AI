import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-oceanic text-mystic pt-16 pb-8 border-t border-mystic/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-mystic/10 pb-12 mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="font-jetbrains text-2xl font-bold text-white mb-2">Weekly insights on automation.</h3>
            <p className="text-mystic/70 font-inter">Join 10,000+ data engineers subscribing to our newsletter.</p>
          </div>
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-nocturnal text-white border border-mystic/20 rounded-l-md px-4 py-3 focus:outline-none focus:border-forsythia font-inter w-full md:w-64"
              required
            />
            <button type="submit" className="bg-forsythia text-oceanic font-medium font-inter px-6 py-3 rounded-r-md hover:bg-yellow-400 transition-colors duration-[150ms] ease-out">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 font-inter">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center text-forsythia mb-4 hover:text-yellow-400 transition-colors">
              <span className="font-jetbrains text-xl font-bold tracking-tight mr-2">DataFlow</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5">
                <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
              </svg>
            </a>
            <p className="text-sm text-mystic/70 max-w-xs">
              Turn data chaos into precision pipelines in seconds. Built for scale, designed for speed.
            </p>
          </div>
          
          <div>
            <h4 className="font-jetbrains font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-forsythia transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a></li>
              <li><a href="#case-studies" className="hover:text-forsythia transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="hover:text-forsythia transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-jetbrains font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-forsythia transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-jetbrains font-bold text-white mb-4">Policies</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-forsythia transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-mystic/10 text-sm text-mystic/70 font-inter">
          <p>&copy; {new Date().getFullYear()} DataFlow Inc. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-mystic/10 flex items-center justify-center text-forsythia hover:bg-mystic/20 hover:-translate-y-1 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5">
              <path d="m4.5 15.75l7.5-7.5l7.5 7.5"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Giant Brand Name */}
      <div 
        className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none z-0 translate-y-1/4 opacity-50"
        aria-hidden="true"
        style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', lineHeight: 1 }}
      >
        <span className="font-jetbrains font-bold" style={{ color: 'var(--color-nocturnal)' }}>dataflow</span>
      </div>
    </footer>
  );
}
