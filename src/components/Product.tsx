import React, { lazy, Suspense } from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const ProductCanvas = lazy(() => import('./three/ProductCanvas'));

export default function Product() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.2);

  return (
    <section id="product" className="py-24 bg-arctic overflow-hidden" ref={triggerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center text-saffron font-jetbrains text-sm font-bold tracking-widest mb-4">
            <span className="mr-2">///</span> OUR PRODUCT
          </div>
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold mb-6">
            Build Logic at Scale
          </h2>
          <p className="text-lg text-oceanic max-w-2xl mx-auto font-inter">
            Design, deploy, and manage sophisticated data workflows through an intuitive visual interface.
          </p>
        </div>

        {/* Central Mockup */}
        <div className={`relative w-full max-w-4xl mx-auto h-[400px] bg-nocturnal rounded-xl border border-nocturnal/10 mb-20 overflow-hidden shadow-2xl transition-all duration-[800ms] ease-out ${isFlowActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Suspense fallback={null}>
            <ProductCanvas triggerDraw={isFlowActive} />
          </Suspense>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
              title: "Infinite Pipelines", desc: "Map multi-step data transformations on a precision grid."
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854-.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71-.505-.781.929l-.149.894Z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></svg>,
              title: "Automated Execution", desc: "Complex decision trees handled without manual intervention."
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd"/></svg>,
              title: "End-to-End Encryption", desc: "Every node and data transfer shielded by industrial-grade security."
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/></svg>,
              title: "Production-Ready Stack", desc: "Connect core platforms and scale with your volume."
            }
          ].map((col, i) => (
            <div key={i} className={`transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="w-12 h-12 bg-mystic rounded-lg flex items-center justify-center text-nocturnal mb-6">
                <div className="w-6 h-6">
                  {col.icon}
                </div>
              </div>
              <h3 className="font-jetbrains text-xl font-bold text-nocturnal mb-3">{col.title}</h3>
              <p className="text-oceanic leading-relaxed font-inter">{col.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
