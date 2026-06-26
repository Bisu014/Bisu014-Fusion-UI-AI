import React from 'react';

const STUDIES = [
  {
    category: "FINANCIAL SERVICES",
    title: "How GlobalBank cut reconciliation time by 90%",
    desc: "By deploying DataFlow's automated engines, GlobalBank automated their cross-border transaction reconciliation, eliminating manual reviews and reducing errors to near-zero.",
    imageFirst: true
  },
  {
    category: "HEALTHCARE",
    title: "Scaling patient data ingestion securely",
    desc: "HealthSync used our node-based editor to map HL7 feeds directly into their data lake, ensuring HIPAA compliance while processing over 10M records daily without a single script.",
    imageFirst: false
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-mystic overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 fade-up">
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold">
            Customer Stories
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {STUDIES.map((study, i) => (
            <article 
              key={i}
              className={`fade-up group flex flex-col md:flex-row items-center border border-nocturnal hover:border-forsythia rounded-2xl overflow-hidden transition-all duration-[200ms] ease-out hover:-translate-y-2 bg-arctic`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              
              {/* Visual Block */}
              <div className={`w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-oceanic ${study.imageFirst ? 'order-1' : 'order-1 md:order-2'}`}>
                <div className="w-full aspect-video bg-nocturnal rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="w-16 h-16 bg-forsythia/20 rounded-full animate-pulse blur-xl absolute" />
                  <div className="font-jetbrains font-bold text-white tracking-widest text-xl z-10 opacity-50 mix-blend-overlay">
                    DATA_VISUALIZATION
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${study.imageFirst ? 'order-2' : 'order-2 md:order-1'}`}>
                <div className="flex items-center text-saffron font-jetbrains text-sm font-bold tracking-widest mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
                  </svg>
                  {study.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-jetbrains text-nocturnal font-bold mb-6 leading-tight group-hover:text-oceanic transition-colors">
                  {study.title}
                </h3>
                <p className="text-oceanic font-inter text-lg leading-relaxed mb-8">
                  {study.desc}
                </p>
                
                <a href="#" className="inline-flex items-center text-nocturnal font-medium font-inter group-hover:text-forsythia transition-colors self-start border-b border-transparent group-hover:border-forsythia pb-1">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </a>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
