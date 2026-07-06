"use client";

import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
      className={`process-step${isActive ? " active" : ""}`}
      delay={delay}
    >
      <Box
        className="process-num"
        ref={numRef}
        sx={{ transitionDelay: `${delay * 0.08}s` }}
      >
        {step.n}
      </Box>
      <Box className="process-step-text">
        <Typography component="h5">
          {step.t}
        </Typography>
        <Typography component="p">{step.d}</Typography>
      </Box>
    </Reveal>
  );
}

/**
 * Horizontal 7-step process timeline with scroll-activated
 * gradient number bubbles.
 */
export default function Process() {
  return (
    <Box component="section">
      <Box className="wrap">
        <Reveal className="section-head">
          <Typography component="span" className="eyebrow">
            How We Work
          </Typography>
          <Typography component="h2">
            A process built for clarity at every stage.
          </Typography>
        </Reveal>

        <Box className="process-track">
          {processSteps.map((s, idx) => (
            <ProcessStep key={s.n} step={s} delay={idx + 1} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
