import React from 'react';

export default function PricingControls({ isAnnual, onToggle }: { isAnnual: boolean, onToggle: (val: boolean) => void }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-inter">
      <div className="flex items-center p-1 bg-mystic rounded-full">
        <button
          onClick={() => onToggle(false)}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-[200ms] ease-out ${!isAnnual ? 'text-nocturnal bg-forsythia shadow-sm' : 'text-oceanic/70 hover:text-oceanic'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-[200ms] ease-out flex items-center ${isAnnual ? 'text-nocturnal bg-forsythia shadow-sm' : 'text-oceanic/70 hover:text-oceanic'}`}
        >
          Annual
          <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full transition-opacity duration-[200ms] ease-out ${isAnnual ? 'bg-nocturnal text-forsythia' : 'bg-mystic text-oceanic/50'}`}>
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}
