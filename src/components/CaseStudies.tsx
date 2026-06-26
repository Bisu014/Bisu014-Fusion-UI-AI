import React from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const CUSTOMER_WINS = [
  {
    sector: "FINANCIAL SERVICES",
    headline: "How GlobalBank cut reconciliation time by 90%",
    summary: "By deploying DataFlow's automated engines, GlobalBank automated their cross-border transaction reconciliation, eliminating manual reviews and reducing errors to near-zero.",
    imageLeads: true
  },
  {
    sector: "HEALTHCARE",
    headline: "Scaling patient data ingestion securely",
    summary: "HealthSync used our node-based editor to map HL7 feeds directly into their data lake, ensuring HIPAA compliance while processing over 10M records daily without a single script.",
    imageLeads: false
  }
];

export default function CaseStudies() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.15);

  return (
    <section id="case-studies" className="py-24 bg-mystic overflow-hidden" ref={triggerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`mb-16 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold">
            Customer Stories
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {CUSTOMER_WINS.map((winRec, index) => {
            // odd rows from left, even rows from right
            const slideDir = index % 2 === 0 ? '-translate-x-[60px]' : 'translate-x-[60px]';
            
            return (
              <article 
                key={index}
                className={`group flex flex-col md:flex-row items-center border border-nocturnal hover:border-forsythia rounded-2xl overflow-hidden bg-arctic shadow-sm hover:shadow-xl transition-all duration-[600ms] ease-in-out ${isFlowActive ? 'translate-x-0 opacity-100' : `${slideDir} opacity-0`}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                
                {/* Graphics Block */}
                <div className={`w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-oceanic ${winRec.imageLeads ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="w-full aspect-video bg-nocturnal rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="w-16 h-16 bg-forsythia/20 rounded-full animate-pulse blur-xl absolute" />
                    <div className="font-jetbrains font-bold text-white tracking-widest text-xl z-10 opacity-50 mix-blend-overlay">
                      DATA_VISUALIZATION
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${winRec.imageLeads ? 'order-2' : 'order-2 md:order-1'}`}>
                  <div className="flex items-center text-saffron font-jetbrains text-sm font-bold tracking-widest mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
                    </svg>
                    {winRec.sector}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-jetbrains text-nocturnal font-bold mb-6 leading-tight group-hover:text-oceanic transition-colors duration-300">
                    {winRec.headline}
                  </h3>
                  <p className="text-oceanic font-inter text-lg leading-relaxed mb-8">
                    {winRec.summary}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-nocturnal font-medium font-inter group-hover:text-forsythia transition-colors self-start border-b border-transparent group-hover:border-forsythia pb-1">
                    Read Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                  </a>
                </div>
                
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
