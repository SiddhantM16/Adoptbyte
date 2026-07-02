"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";

interface ProcessStepProps {
  step: { n: string; t: string; d: string };
  delay: number;
}

function ProcessStep({ step, delay }: ProcessStepProps) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Reveal
      as="div"
      className={`process-step ${isActive ? "active" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="process-num" ref={ref}>
        {step.n}
      </div>
      <h5>{step.t}</h5>
      <p>{step.d}</p>
    </Reveal>
  );
}

const steps = [
  { n: "01", t: "Discovery", d: "Understand goals & scope" },
  { n: "02", t: "Planning", d: "Roadmap & architecture" },
  { n: "03", t: "Design", d: "Wireframes to UI" },
  { n: "04", t: "Development", d: "Agile sprints" },
  { n: "05", t: "Testing", d: "QA & performance" },
  { n: "06", t: "Deployment", d: "Ship to production" },
  { n: "07", t: "Support", d: "Monitor & improve" },
];

export default function Process() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How We Work</span>
          <h2>A process built for clarity at every stage.</h2>
        </Reveal>
        
        <div className="process-track">
          {steps.map((s, idx) => (
            <ProcessStep key={idx} step={s} delay={idx * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
