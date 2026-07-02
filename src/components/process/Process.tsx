"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/siteData";

interface StepProps {
  step: { n: string; t: string; d: string };
  delay: number;
}

function ProcessStep({ step, delay }: StepProps) {
  const [isActive, setIsActive] = useState(false);
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsActive(true);
      },
      { threshold: 0.5 }
    );
    if (numRef.current) observer.observe(numRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      as="div"
      className={`process-step${isActive ? " active" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="process-num" ref={numRef}>
        {step.n}
      </div>
      <h5>{step.t}</h5>
      <p>{step.d}</p>
    </Reveal>
  );
}

/**
 * Horizontal 7-step process timeline with scroll-activated
 * gradient number bubbles.
 */
export default function Process() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How We Work</span>
          <h2>A process built for clarity at every stage.</h2>
        </Reveal>

        <div className="process-track">
          {processSteps.map((s, idx) => (
            <ProcessStep key={s.n} step={s} delay={idx * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
