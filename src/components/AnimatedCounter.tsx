"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}
