import React from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

export default function CtaBanner() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.3);

  return (
    <section id="cta" className="py-24" style={{ background: 'linear-gradient(135deg, var(--color-nocturnal), var(--color-oceanic))' }} ref={triggerRef}>
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[800ms] ease-out ${isFlowActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <h2 className="text-4xl md:text-[48px] font-jetbrains font-bold text-white leading-tight mb-10">
          Ready to Automate Your Data?
        </h2>
        <button className="bg-forsythia text-black font-medium font-inter px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors duration-[180ms] ease-out inline-flex items-center text-lg">
          Yes, I want 10x faster
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5 ml-2">
            <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
