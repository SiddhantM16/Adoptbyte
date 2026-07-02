"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
}

/**
 * Animates a number from 0 to `target` once it enters the viewport.
 */
export default function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.4 });
  const value = useMotionValue(0);
  const spring = useSpring(value, { damping: 28, stiffness: 80 });

  useEffect(() => {
    if (isInView) value.set(target);
  }, [isInView, target, value]);

  useEffect(() => {
    return spring.on("change", (latest) => setCount(Math.round(latest)));
  }, [spring]);

  return (
    <div ref={divRef} className="num">
      <span>{count}</span>
      {suffix}
    </div>
  );
}
