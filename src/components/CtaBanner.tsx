import React from 'react';

export default function CtaBanner() {
  return (
    <section id="cta" className="py-24" style={{ background: 'linear-gradient(135deg, var(--color-nocturnal), var(--color-oceanic))' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 className="text-4xl md:text-[48px] font-jetbrains font-bold text-white leading-tight mb-10">
          Ready to Automate Your Data?
        </h2>
        <button className="bg-forsythia text-black font-medium font-inter px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors duration-[180ms] ease-out inline-flex items-center text-lg">
          Start Free Trial
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-5 h-5 ml-2">
            <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
