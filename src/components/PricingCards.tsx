import React from 'react';

const PLAN_DICTIONARY = {
  starter: {
    label: "Starter",
    moPrice: 49,
    yrPrice: 39,
    perks: ["Up to 100k events/mo", "Basic templates", "Community support"]
  },
  pro: {
    label: "Pro",
    moPrice: 199,
    yrPrice: 159,
    perks: ["Up to 1M events/mo", "Custom Python nodes", "Priority support", "Advanced monitoring"]
  },
  enterprise: {
    label: "Enterprise",
    moPrice: 'Custom',
    yrPrice: 'Custom',
    perks: ["Unlimited events", "VPC deployment", "24/7 SLA", "Dedicated account manager"]
  }
};

export default function PricingCards({ isAnnual, isFlowActive }: { isAnnual: boolean, isFlowActive: boolean }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Starter Card */}
      <article 
        className={`bg-white rounded-2xl p-8 border border-mystic shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        style={{ transitionDelay: '100ms' }}
      >
        <h3 className="font-jetbrains text-xl font-bold text-nocturnal mb-2">{PLAN_DICTIONARY.starter.label}</h3>
        <div className="mb-6 flex items-baseline">
          <span className="font-jetbrains text-[3rem] font-bold text-nocturnal tracking-tight">
            ${isAnnual ? PLAN_DICTIONARY.starter.yrPrice : PLAN_DICTIONARY.starter.moPrice}
          </span>
          <span className="text-oceanic/70 ml-2 font-inter">/mo</span>
        </div>
        <a href="#" className="w-full flex items-center justify-center bg-mystic text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-mystic/80 transition-colors duration-[150ms] ease-out mb-8">
          Get Started
        </a>
        <ul className="space-y-4 font-inter mt-auto">
          {PLAN_DICTIONARY.starter.perks.map(perkItem => (
            <li key={perkItem} className="flex items-start text-oceanic">
              <span className="text-nocturnal mr-3 font-bold">✓</span>
              {perkItem}
            </li>
          ))}
        </ul>
      </article>

      {/* Pro Card */}
      <article 
        className={`bg-nocturnal rounded-2xl p-8 border border-oceanic shadow-xl relative md:scale-[1.03] z-10 flex flex-col transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forsythia text-nocturnal font-bold font-inter px-4 py-1 rounded-full text-sm whitespace-nowrap">
          Most Popular
        </div>
        <h3 className="font-jetbrains text-xl font-bold text-white mb-2">{PLAN_DICTIONARY.pro.label}</h3>
        <div className="mb-6 flex items-baseline">
          <span className="font-jetbrains text-[3rem] font-bold text-white tracking-tight">
            ${isAnnual ? PLAN_DICTIONARY.pro.yrPrice : PLAN_DICTIONARY.pro.moPrice}
          </span>
          <span className="text-mystic/70 ml-2 font-inter">/mo</span>
        </div>
        <a href="#" className="w-full flex items-center justify-center bg-forsythia text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-[150ms] ease-out mb-8">
          Start Pro Trial
        </a>
        <ul className="space-y-4 font-inter mt-auto">
          {PLAN_DICTIONARY.pro.perks.map(perkItem => (
            <li key={perkItem} className="flex items-start text-mystic">
              <span className="text-forsythia mr-3 font-bold">✓</span>
              {perkItem}
            </li>
          ))}
        </ul>
      </article>

      {/* Enterprise Card */}
      <article 
        className={`bg-white rounded-2xl p-8 border border-mystic shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        style={{ transitionDelay: '300ms' }}
      >
        <h3 className="font-jetbrains text-xl font-bold text-nocturnal mb-2">{PLAN_DICTIONARY.enterprise.label}</h3>
        <div className="mb-6 flex items-baseline">
          <span className="font-jetbrains text-[3rem] font-bold text-nocturnal tracking-tight">
            {PLAN_DICTIONARY.enterprise.moPrice}
          </span>
        </div>
        <a href="#" className="w-full flex items-center justify-center bg-mystic text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-mystic/80 transition-colors duration-[150ms] ease-out mb-8">
          Contact Sales
        </a>
        <ul className="space-y-4 font-inter mt-auto">
          {PLAN_DICTIONARY.enterprise.perks.map(perkItem => (
            <li key={perkItem} className="flex items-start text-oceanic">
              <span className="text-nocturnal mr-3 font-bold">✓</span>
              {perkItem}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
