import React, { useEffect, useRef, useState } from 'react';
import { useNeuralFlow } from '../hooks/useNeuralFlow';

const METRICS_PAYLOAD = [
  { val: 12, symbol: 'ms', descriptor: 'Average Latency' },
  { val: 10, symbol: 'x', descriptor: 'Faster Development' },
  { val: 99.9, symbol: '%', descriptor: 'Uptime SLA' }
];

function NeuralCounter({ targetNum, decimalSpots = 0, symbol = '', tickLength = 1200, isRunning = false }: { targetNum: number, decimalSpots?: number, symbol?: string, tickLength?: number, isRunning?: boolean }) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    let birthTime: number;
    
    // the recursive frame stepper
    const stepTick = (tickTime: number) => {
      if (!birthTime) birthTime = tickTime;
      const lifespan = tickTime - birthTime;
      const progressRatio = Math.min(lifespan / tickLength, 1);
      
      // custom ease-out curve so it snaps nicely at the end
      const easeCurve = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);
      
      setCurrentVal(targetNum * easeCurve);
      
      if (progressRatio < 1) {
        requestAnimationFrame(stepTick);
      } else {
        setCurrentVal(targetNum);
      }
    };
    
    requestAnimationFrame(stepTick);
  }, [targetNum, tickLength, isRunning]);

  return (
    <div className="font-jetbrains text-[48px] md:text-[64px] font-bold text-nocturnal leading-none mb-2">
      {currentVal.toFixed(decimalSpots)}{symbol}
    </div>
  );
}

export default function Stats() {
  const { triggerRef, isFlowActive } = useNeuralFlow(0.2);

  return (
    <section ref={triggerRef} className="py-20 bg-mystic border-y border-mystic/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-mystic/20">
          {METRICS_PAYLOAD.map((metric, idx) => (
            <div 
              key={idx} 
              className={`pt-8 md:pt-0 transition-all duration-[600ms] ease-out ${isFlowActive ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <NeuralCounter 
                targetNum={metric.val} 
                decimalSpots={metric.val % 1 !== 0 ? 1 : 0} 
                symbol={metric.symbol} 
                isRunning={isFlowActive}
              />
              <div className="text-oceanic font-inter uppercase tracking-widest text-sm font-bold mt-4">
                {metric.descriptor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
