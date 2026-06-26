import React, { useEffect, useRef } from 'react';

export default function Dashboard() {
  const lineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (lineRef.current) lineRef.current.classList.add('animate-scale-x');
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" className="py-24 bg-oceanic overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-nocturnal/80 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5 relative backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Speedometer/Gauge */}
            <div className="flex flex-col items-center justify-center fade-up" style={{ transitionDelay: '0ms' }}>
              <div className="relative w-48 h-48 animate-pulse">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-oceanic)" strokeWidth="12" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="none" 
                    stroke="var(--color-forsythia)" 
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset="60"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-jetbrains text-4xl font-bold text-white">99<span className="text-2xl">%</span></span>
                </div>
              </div>
            </div>

            {/* Right: Text and Progress Line */}
            <div className="flex flex-col justify-center fade-up" style={{ transitionDelay: '150ms' }}>
              <h3 className="font-jetbrains text-3xl md:text-4xl font-bold text-white mb-6">
                Processing 1M+ rows/sec
              </h3>
              
              <div className="w-full h-2 relative rounded-full bg-oceanic overflow-hidden">
                <svg 
                  ref={lineRef}
                  className="absolute top-0 left-0 h-full w-full origin-left transition-transform duration-[1500ms] ease-out scale-x-0" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <rect width="100" height="10" fill="var(--color-saffron)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-scale-x { transform: scaleX(1) !important; }
      `}</style>
    </section>
  );
}
