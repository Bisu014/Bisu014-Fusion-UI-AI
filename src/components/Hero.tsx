import React, { lazy, Suspense, useEffect, useState } from 'react';
import { calculateNeuralLerp } from '../hooks/useNeuralFlow';

const HeroCanvas = lazy(() => import('./three/HeroCanvas'));

export default function Hero() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    // track scroll to create the "slideshow flip" effect
    let animationFrameId: number;
    let targetScroll = 0;
    let currentScroll = 0;

    const onScroll = () => {
      // Get the scroll percentage relative to the first 600px
      targetScroll = Math.min(window.scrollY / 600, 1);
    };

    const updateScroll = () => {
      // Smooth out the scroll value
      currentScroll = calculateNeuralLerp(currentScroll, targetScroll, 0.1);
      
      // Only trigger state update if there's a meaningful change
      if (Math.abs(currentScroll - scrollDepth) > 0.01) {
        setScrollDepth(currentScroll);
      }
      
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollDepth]);

  // Calculate transform and opacity based on scroll
  const translateY = -(scrollDepth * 150); // slide up
  const opacity = 1 - (scrollDepth * 1.5); // fade out slightly faster than scroll
  const pointerEvents = scrollDepth > 0.5 ? 'none' : 'auto';

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, var(--color-nocturnal) 0%, var(--color-oceanic) 100%)'
      }}
    >
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <div 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Decorative SVG grid pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none text-white overflow-hidden z-0" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMin slice">
          <path d="M0,0 L400,400 M100,0 L500,400 M200,0 L600,400 M300,0 L700,400 M400,0 L800,400 M-100,100 L300,500 M0,200 L400,600 M0,300 L400,700 M0,400 L400,800 M0,100 L400,-300 M0,200 L400,-200 M0,300 L400,-100 M0,400 L400,0" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M400,0 L0,400 M500,0 L100,400 M600,0 L200,400 M700,0 L300,400 M800,0 L400,400 M300,-100 L-100,300 M400,-200 L0,200 M400,-300 L0,100" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-16"
        style={{ 
          transform: `translateY(${translateY}px)`, 
          opacity: Math.max(0, opacity),
          pointerEvents: pointerEvents as any,
          willChange: 'transform, opacity'
        }}
      >
        <h1 
          className="font-jetbrains text-[40px] md:text-[72px] text-white font-bold leading-tight mb-6 animate-fade-up delay-0"
        >
          Automate Data Pipelines at Scale.
        </h1>
        
        <p 
          className="text-mystic font-inter text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-up delay-150"
        >
          Connect databases, clean messy formats, and route information securely without writing a single script. DataFlow is the silent engine for modern teams.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300 w-full sm:w-auto mb-16"
        >
          <button className="w-full sm:w-auto flex items-center justify-center bg-forsythia text-black font-medium font-inter px-8 py-3.5 rounded-md hover:bg-yellow-400 transition-colors duration-[150ms]">
            Start Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5 ml-2">
              <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
            </svg>
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-mystic text-mystic font-medium font-inter px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors duration-[150ms]">
            View Documentation
          </button>
        </div>

        <div 
          className="w-full flex flex-col items-center animate-fade-up delay-[400ms]"
        >
          <span className="text-[12px] uppercase tracking-widest text-mystic/70 mb-6 font-inter">Trusted by teams at</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
            {['Acme', 'Globex', 'Soylent', 'Initech', 'Umbrella'].map((logo, i) => (
              <span key={i} className="font-inter font-bold text-xl md:text-2xl text-white tracking-tight">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
