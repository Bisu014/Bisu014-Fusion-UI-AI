import React, { useState } from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const BENTO_SPECS = [
  {
    uuid: 'f-1',
    heading: "Visual Pipeline Builder",
    detail: "Drag-and-drop nodes to construct complex data routing, transformation, and ingestion workflows. No code required for 90% of use cases."
  },
  {
    uuid: 'f-2',
    heading: "Auto-Healing Schema",
    detail: "When source data structures change unexpectedly, our adaptive engine infers the new mapping and updates the pipeline dynamically without failing."
  },
  {
    uuid: 'f-3',
    heading: "Real-Time Tracing",
    detail: "Monitor event payloads at every step. Pinpoint bottlenecks and identify exactly where and why a transformation failed with sub-millisecond precision."
  },
  {
    uuid: 'f-4',
    heading: "VPC Deployment",
    detail: "Run the entire engine inside your own infrastructure. We provide Kubernetes helm charts and Docker images for true air-gapped security."
  }
];

export default function Features() {
  const [focusId, setFocusId] = useState(BENTO_SPECS[0].uuid);
  const { triggerRef, isFlowActive } = useNeuralFlow(0.2);

  return (
    <section id="features" className="py-24 bg-mystic overflow-hidden" ref={triggerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-oceanic max-w-2xl mx-auto font-inter">
            A comprehensive toolset for modern data engineering teams.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {BENTO_SPECS.map((spec, flowIndex) => (
              <button
                key={spec.uuid}
                onClick={() => setFocusId(spec.uuid)}
                className={`text-left p-6 rounded-xl transition-all duration-[400ms] ease-out border-2 ${isFlowActive ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-0'} ${
                  focusId === spec.uuid
                    ? 'border-nocturnal bg-arctic shadow-sm'
                    : 'border-transparent hover:border-nocturnal/20 hover:bg-arctic/50'
                }`}
                style={{ transitionDelay: `${80 + flowIndex * 80}ms` }}
              >
                <h3 className={`text-xl font-jetbrains font-bold mb-2 ${
                  focusId === spec.uuid ? 'text-nocturnal' : 'text-oceanic'
                }`}>
                  {spec.heading}
                </h3>
                <div 
                  className={`overflow-hidden transition-all duration-[300ms] ease-out`}
                  style={{
                    maxHeight: focusId === spec.uuid ? '200px' : '0',
                    opacity: focusId === spec.uuid ? 1 : 0
                  }}
                >
                  <p className="text-oceanic font-inter mt-2">
                    {spec.detail}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div 
            className={`w-full lg:w-1/2 transition-all duration-[600ms] ease-out ${isFlowActive ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-0'}`}
            style={{ transitionDelay: '0ms' }} // animates first
          >
            <div className="aspect-square md:aspect-video lg:aspect-square bg-oceanic rounded-2xl p-8 relative overflow-hidden flex items-center justify-center border border-nocturnal/10 shadow-xl transition-transform hover:scale-[1.01]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-forsythia/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-forsythia/30 animate-[spin_10s_linear_infinite]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10 text-forsythia">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="font-jetbrains text-white text-xl font-bold tracking-widest uppercase opacity-80">
                      Module: {focusId}
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
