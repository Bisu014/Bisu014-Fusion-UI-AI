import React, { useState } from 'react';

const PRICING_MATRIX = {
  tiers: {
    starter: {
      label: "Starter",
      monthly: 49,
      annual: 39,
      features: ["Up to 100k events/mo", "Basic templates", "Community support"]
    },
    pro: {
      label: "Pro",
      monthly: 199,
      annual: 159,
      features: ["Up to 1M events/mo", "Custom Python nodes", "Priority support", "Advanced monitoring"]
    },
    enterprise: {
      label: "Enterprise",
      monthly: 'Custom',
      annual: 'Custom',
      features: ["Unlimited events", "VPC deployment", "24/7 SLA", "Dedicated account manager"]
    }
  }
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-arctic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold mb-6">
            Transparent Pricing
          </h2>
          <p className="text-lg text-oceanic max-w-2xl mx-auto mb-8 font-inter">
            Choose the plan that fits your pipeline velocity. Upgrade anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-inter">
            {/* Billing Toggle */}
            <div className="flex items-center p-1 bg-mystic rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-[200ms] ease-out ${!isAnnual ? 'text-nocturnal bg-forsythia shadow-sm' : 'text-oceanic/70 hover:text-oceanic'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-[200ms] ease-out flex items-center ${isAnnual ? 'text-nocturnal bg-forsythia shadow-sm' : 'text-oceanic/70 hover:text-oceanic'}`}
              >
                Annual
                <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full transition-opacity duration-[200ms] ease-out ${isAnnual ? 'bg-nocturnal text-forsythia' : 'bg-mystic text-oceanic/50'}`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Card */}
          <article className="fade-up bg-white rounded-2xl p-8 border border-mystic shadow-sm flex flex-col transition-transform duration-[200ms] hover:-translate-y-1">
            <h3 className="font-jetbrains text-xl font-bold text-nocturnal mb-2">{PRICING_MATRIX.tiers.starter.label}</h3>
            <div className="mb-6 flex items-baseline">
              <span className="font-jetbrains text-[3rem] font-bold text-nocturnal tracking-tight">
                ${isAnnual ? PRICING_MATRIX.tiers.starter.annual : PRICING_MATRIX.tiers.starter.monthly}
              </span>
              <span className="text-oceanic/70 ml-2 font-inter">/mo</span>
            </div>
            <a href="#" className="w-full flex items-center justify-center bg-mystic text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-mystic/80 transition-colors duration-[150ms] ease-out mb-8">
              Get Started
            </a>
            <ul className="space-y-4 font-inter mt-auto">
              {PRICING_MATRIX.tiers.starter.features.map(feat => (
                <li key={feat} className="flex items-start text-oceanic">
                  <span className="text-nocturnal mr-3 font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </article>

          {/* Pro Card */}
          <article className="fade-up bg-nocturnal rounded-2xl p-8 border border-oceanic shadow-xl relative md:scale-[1.03] z-10 flex flex-col transition-transform duration-[200ms]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forsythia text-nocturnal font-bold font-inter px-4 py-1 rounded-full text-sm whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="font-jetbrains text-xl font-bold text-white mb-2">{PRICING_MATRIX.tiers.pro.label}</h3>
            <div className="mb-6 flex items-baseline">
              <span className="font-jetbrains text-[3rem] font-bold text-white tracking-tight">
                ${isAnnual ? PRICING_MATRIX.tiers.pro.annual : PRICING_MATRIX.tiers.pro.monthly}
              </span>
              <span className="text-mystic/70 ml-2 font-inter">/mo</span>
            </div>
            <a href="#" className="w-full flex items-center justify-center bg-forsythia text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-[150ms] ease-out mb-8">
              Get Started
            </a>
            <ul className="space-y-4 font-inter mt-auto">
              {PRICING_MATRIX.tiers.pro.features.map(feat => (
                <li key={feat} className="flex items-start text-mystic">
                  <span className="text-forsythia mr-3 font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </article>

          {/* Enterprise Card */}
          <article className="fade-up bg-white rounded-2xl p-8 border border-mystic shadow-sm flex flex-col transition-transform duration-[200ms] hover:-translate-y-1">
            <h3 className="font-jetbrains text-xl font-bold text-nocturnal mb-2">{PRICING_MATRIX.tiers.enterprise.label}</h3>
            <div className="mb-6 flex items-baseline">
              <span className="font-jetbrains text-[3rem] font-bold text-nocturnal tracking-tight">
                {PRICING_MATRIX.tiers.enterprise.monthly}
              </span>
            </div>
            <a href="#" className="w-full flex items-center justify-center bg-mystic text-nocturnal font-medium font-inter px-4 py-3 rounded-md hover:bg-mystic/80 transition-colors duration-[150ms] ease-out mb-8">
              Contact Sales
            </a>
            <ul className="space-y-4 font-inter mt-auto">
              {PRICING_MATRIX.tiers.enterprise.features.map(feat => (
                <li key={feat} className="flex items-start text-oceanic">
                  <span className="text-nocturnal mr-3 font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
