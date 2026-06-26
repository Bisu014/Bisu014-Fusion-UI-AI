import React, { lazy, Suspense } from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const DashboardCanvas = lazy(() => import('./three/DashboardCanvas'));

export default function Dashboard() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.3);

  return (
    <section id="dashboard" className="py-24 bg-oceanic overflow-hidden relative" ref={triggerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-nocturnal/80 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5 relative backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left: Text and Progress Line */}
            <div className={`flex flex-col justify-center transition-all duration-[800ms] ease-out ${isFlowActive ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <h3 className="font-jetbrains text-3xl md:text-4xl font-bold text-white mb-6">
                Processing 1M+ rows/sec
              </h3>
              
              <div className="w-full h-2 relative rounded-full bg-oceanic overflow-hidden">
                <svg 
                  className={`absolute top-0 left-0 h-full w-full origin-left transition-transform duration-[1500ms] ease-out ${isFlowActive ? 'scale-x-100' : 'scale-x-0'}`}
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <rect width="100" height="10" fill="var(--color-saffron)" />
                </svg>
              </div>
            </div>

            {/* Right: 3D Rotating Wireframe */}
            <div className={`flex flex-col items-center justify-center h-[300px] relative transition-all duration-[800ms] ease-out delay-[150ms] ${isFlowActive ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <Suspense fallback={null}>
                <DashboardCanvas />
              </Suspense>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
