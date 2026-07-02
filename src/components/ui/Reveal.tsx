"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "span" | "h1" | "p";
}

/**
 * Framer-powered reveal wrapper for section content.
 */
export default function Reveal({
  children,
  delay,
  className = "",
  style,
  as: Component = "div",
}: RevealProps) {
  const MotionComponent = motion[Component];
  const delaySeconds = delay ? delay * 0.08 : 0;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay: delaySeconds,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
