"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  as?: React.ElementType;
}

export default function Reveal({
  children,
  delay,
  className = "",
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const inClass = isInView ? "in" : "";

  return (
    <Component
      ref={ref}
      className={`reveal ${delayClass} ${inClass} ${className}`}
    >
      {children}
    </Component>
  );
}
