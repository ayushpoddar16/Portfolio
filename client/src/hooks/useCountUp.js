import { useState, useEffect, useRef } from "react";

export function useCountUp(target, duration = 1500, shouldStart = false) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    startRef.current = performance.now();

    const update = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(ease * target));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldStart, target, duration]);

  return count;
}
