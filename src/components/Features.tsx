import React, { useState } from 'react';

const FEATURES = [
  {
    id: 1,
    title: "Visual Pipeline Builder",
    desc: "Drag-and-drop nodes to construct complex data routing, transformation, and ingestion workflows. No code required for 90% of use cases."
  },
  {
    id: 2,
    title: "Auto-Healing Schema",
    desc: "When source data structures change unexpectedly, our adaptive engine infers the new mapping and updates the pipeline dynamically without failing."
  },
  {
    id: 3,
    title: "Real-Time Tracing",
    desc: "Monitor event payloads at every step. Pinpoint bottlenecks and identify exactly where and why a transformation failed with sub-millisecond precision."
  },
  {
    id: 4,
    title: "VPC Deployment",
    desc: "Run the entire engine inside your own infrastructure. We provide Kubernetes helm charts and Docker images for true air-gapped security."
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);

  return (
    <section id="features" className="py-24 bg-mystic overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center fade-up">
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-oceanic max-w-2xl mx-auto font-inter">
            A comprehensive toolset for modern data engineering teams.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 fade-up">
            {FEATURES.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`text-left p-6 rounded-xl transition-all duration-[200ms] ease-out border-2 ${
                  activeFeature === feature.id
                    ? 'border-nocturnal bg-arctic shadow-sm'
                    : 'border-transparent hover:border-nocturnal/20 hover:bg-arctic/50'
                }`}
              >
                <h3 className={`text-xl font-jetbrains font-bold mb-2 ${
                  activeFeature === feature.id ? 'text-nocturnal' : 'text-oceanic'
                }`}>
                  {feature.title}
                </h3>
                <div 
                  className={`overflow-hidden transition-all duration-[300ms] ease-out`}
                  style={{
                    maxHeight: activeFeature === feature.id ? '200px' : '0',
                    opacity: activeFeature === feature.id ? 1 : 0
                  }}
                >
                  <p className="text-oceanic font-inter mt-2">
                    {feature.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-1/2 fade-up delay-150">
            <div className="aspect-square md:aspect-video lg:aspect-square bg-oceanic rounded-2xl p-8 relative overflow-hidden flex items-center justify-center border border-nocturnal/10 shadow-xl">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-forsythia/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-forsythia/30 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10 text-forsythia">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="font-jetbrains text-white text-xl font-bold tracking-widest uppercase opacity-80">
                      Feature Module {activeFeature}
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
