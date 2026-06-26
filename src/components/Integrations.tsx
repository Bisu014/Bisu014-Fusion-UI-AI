import React from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const DATA_PARTNERS = [
  'Postgres', 'MongoDB', 'Snowflake', 'Databricks', 'dbt', 'Fivetran', 'AWS', 'DigitalOcean', 'Azure', 'Kafka', 'Redis', 'Elasticsearch'
];

export default function Integrations() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.15);

  return (
    <section id="integrations" className="py-24 bg-white border-y border-mystic" ref={triggerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-jetbrains text-nocturnal font-bold mb-12 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Works with your stack
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {DATA_PARTNERS.map((partnerName, idx) => (
            <div 
              key={partnerName}
              className={`flex items-center justify-center px-6 py-3 border-2 border-mystic rounded-full hover:border-saffron group bg-arctic transition-all duration-[400ms] ease-out ${isFlowActive ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-0'}`}
              style={{ transitionDelay: `${idx * 60}ms`, transitionDuration: '300ms' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-4 h-4 mr-2 text-oceanic group-hover:text-saffron transition-colors">
                <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
              </svg>
              <span className="font-inter text-oceanic font-medium group-hover:text-nocturnal transition-colors">{partnerName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
