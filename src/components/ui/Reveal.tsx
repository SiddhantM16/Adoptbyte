"use client";

import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type RevealBoxProps = BoxProps & HTMLMotionProps<"div">;

const RevealBox = forwardRef<HTMLElement, RevealBoxProps>(function RevealBox(
  props,
  ref
) {
  return <Box ref={ref} {...props} />;
});

const MotionBox = motion.create(RevealBox);

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  component?: ElementType;
}

/**
 * Framer-powered reveal wrapper for section content.
 */
export default function Reveal({
  children,
  delay,
  className = "",
  style,
  component = "div",
}: RevealProps) {
  const delaySeconds = delay ? delay * 0.08 : 0;

  return (
    <MotionBox
      component={component}
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
    </MotionBox>
  );
}
