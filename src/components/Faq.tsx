import React, { useState } from 'react';

const FAQS = [
  { q: "How does the engine infer schema changes?", a: "It uses a semantic diffing engine that reads unstructured payload shifts in real-time, rewriting mapping rules before the pipeline fails." },
  { q: "Can I run this on-premise or in VPC?", a: "Yes, the Enterprise tier supports full VPC peering and air-gapped deployments using Docker and Kubernetes helm charts." },
  { q: "What is the maximum throughput per node?", a: "A single standard node handles up to 50k rows/second, but the architecture scales horizontally to handle millions of events." },
  { q: "Does it support custom Python transforms?", a: "Absolutely. You can inject custom Python or TypeScript lambdas directly into the visual canvas via our Code Node feature." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-arctic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="lg:col-span-1 fade-up">
            <h2 className="text-5xl md:text-[64px] font-jetbrains font-bold text-nocturnal leading-tight">
              Questions?
            </h2>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-4 border-t border-nocturnal/20 pt-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="fade-up border-b border-nocturnal/20" style={{ transitionDelay: `${i * 100}ms` }}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-jetbrains font-bold text-xl text-nocturnal pr-8">{faq.q}</span>
                    <span className="text-forsythia flex-shrink-0">
                      {openIndex === i ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  <div 
                    id={`faq-panel-${i}`}
                    className="overflow-hidden transition-all duration-[400ms] ease-in-out"
                    style={{ maxHeight: openIndex === i ? '300px' : '0', opacity: openIndex === i ? 1 : 0 }}
                  >
                    <p className="text-oceanic pb-8 font-inter text-lg">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
