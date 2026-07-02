"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";

interface TrustItemProps {
  target: number;
  suffix?: string;
  label: string;
  delay?: 1 | 2 | 3 | 4;
}

function TrustItem({ target, suffix = "", label, delay }: TrustItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let observer: IntersectionObserver;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let cur = 0;
            const step = Math.max(1, Math.round(target / 60));
            const tick = () => {
              cur += step;
              if (cur >= target) {
                setCount(target);
              } else {
                setCount(cur);
                animationFrameId = requestAnimationFrame(tick);
              }
            };
            tick();
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <Reveal as="div" delay={delay} className="trust-item">
      <div className="num" ref={ref}>
        <span>{count}</span>{suffix}
      </div>
      <div className="label">{label}</div>
    </Reveal>
  );
}

export default function Trust() {
  return (
    <section className="trust">
      <div className="wrap trust-grid">
        <TrustItem target={9} suffix="+" label="Years of Experience" />
        <TrustItem target={180} suffix="+" label="Projects Delivered" delay={1} />
        <TrustItem target={120} suffix="+" label="Happy Clients" delay={2} />
        <TrustItem target={14} label="Countries Served" delay={3} />
        <TrustItem target={98} suffix="%" label="Client Satisfaction" delay={4} />
      </div>
    </section>
  );
}
