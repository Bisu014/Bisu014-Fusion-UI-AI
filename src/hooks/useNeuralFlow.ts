import { useEffect, useRef, useState } from 'react';

// Little helper to calculate smooth values
export const calculateNeuralLerp = (startValue: number, targetValue: number, easeFactor: number) => {
  // basic math to creep towards the target
  return startValue + (targetValue - startValue) * easeFactor;
};

export function useNeuralFlow(thresholdLevel = 0.15) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [isFlowActive, setFlowActive] = useState(false);

  useEffect(() => {
    // locking onto the element as it scrolls in
    const flowWatcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlowActive(true);
          // kill the observer once triggered so it doesn't flip out
          if (triggerRef.current) flowWatcher.unobserve(triggerRef.current);
        }
      },
      { threshold: thresholdLevel }
    );

    if (triggerRef.current) {
      flowWatcher.observe(triggerRef.current);
    }

    return () => flowWatcher.disconnect();
  }, [thresholdLevel]);

  return { triggerRef, isFlowActive };
}
