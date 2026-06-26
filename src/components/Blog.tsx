import React from 'react';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-mystic overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-[48px] font-jetbrains text-nocturnal font-bold mb-12 fade-up">
          From the Engineering Desk
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured */}
          <article className="fade-up lg:col-span-2 bg-arctic rounded-2xl overflow-hidden group flex flex-col border border-nocturnal/10 hover:-translate-y-1 transition-transform duration-[200ms] ease-out shadow-sm hover:shadow-lg">
            <div className="w-full aspect-video bg-nocturnal relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-16 h-16 text-oceanic absolute opacity-30">
                <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
              </svg>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center mb-4">
                <span className="bg-nocturnal text-saffron text-xs font-jetbrains font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Engineering
                </span>
                <span className="text-oceanic/70 ml-4 font-inter text-sm">April 12, 2026</span>
              </div>
              <h3 className="text-3xl font-jetbrains font-bold text-nocturnal leading-tight mb-4 group-hover:text-oceanic transition-colors">
                Redesigning the Data Ingestion Engine for Sub-Millisecond Latency
              </h3>
              <p className="text-oceanic font-inter text-lg line-clamp-2">
                We rebuilt our core message broker from the ground up to eliminate backpressure during massive spikes. Here's exactly how we achieved a 10x throughput improvement.
              </p>
            </div>
          </article>
          
          {/* Side Articles */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <article className="fade-up bg-arctic rounded-2xl p-8 flex flex-col flex-1 border border-nocturnal/10 group hover:-translate-y-1 transition-transform duration-[200ms] ease-out shadow-sm hover:shadow-lg" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center mb-4">
                <span className="bg-nocturnal text-saffron text-xs font-jetbrains font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Update
                </span>
              </div>
              <h3 className="text-2xl font-jetbrains font-bold text-nocturnal mb-4 leading-tight group-hover:text-oceanic transition-colors">
                DataFlow v2.4: Native Snowflake Integration
              </h3>
              <div className="text-oceanic/70 font-inter mt-auto pt-4 text-sm">March 28, 2026</div>
            </article>
            
            <article className="fade-up bg-arctic rounded-2xl p-8 flex flex-col flex-1 border border-nocturnal/10 group hover:-translate-y-1 transition-transform duration-[200ms] ease-out shadow-sm hover:shadow-lg" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-4">
                <span className="bg-nocturnal text-saffron text-xs font-jetbrains font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Research
                </span>
              </div>
              <h3 className="text-2xl font-jetbrains font-bold text-nocturnal mb-4 leading-tight group-hover:text-oceanic transition-colors">
                Why Static Pipelines are Dead: The Case for Dynamic Routing
              </h3>
              <div className="text-oceanic/70 font-inter mt-auto pt-4 text-sm">March 15, 2026</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
