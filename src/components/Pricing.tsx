import React from 'react';
import PricingCards from './PricingCards';
import PricingControls from './PricingControls';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

export default function Pricing() {
  const { triggerRef, isFlowActive } = useNeuralFlow();
  // extracting the toggling state to the parent so cards can read it
  const [isAnnualBilling, setAnnualBilling] = React.useState(true);

  return (
    <section id="pricing" className="py-24 bg-arctic" ref={triggerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-16 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-[56px] font-jetbrains text-nocturnal font-bold mb-6">
            Transparent Pricing
          </h2>
          <p className="text-lg text-oceanic max-w-2xl mx-auto mb-8 font-inter">
            Choose the plan that fits your pipeline velocity. Upgrade anytime.
          </p>

          <PricingControls isAnnual={isAnnualBilling} onToggle={setAnnualBilling} />
        </div>

        <PricingCards isAnnual={isAnnualBilling} isFlowActive={isFlowActive} />
        
      </div>
    </section>
  );
}
