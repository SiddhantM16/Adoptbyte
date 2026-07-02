"use client";

import React from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
  "aria-label"?: string;
}

/**
 * A polymorphic button that shifts toward the cursor on hover
 * for a premium magnetic interaction feel.
 */
export default function MagneticButton({
  children,
  as: Component = "button",
  className = "",
  ...props
}: MagneticButtonProps) {
  const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
