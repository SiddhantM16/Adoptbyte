"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
  "aria-label"?: string;
}

/**
 * A button that shifts toward the cursor on hover
 * for a premium magnetic interaction feel.
 */
export default function MagneticButton({
  children,
  className = "",
  href,
  type = "button",
  ...props
}: MagneticButtonProps) {
  const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <Button
      ref={ref as React.Ref<HTMLButtonElement>}
      variant="text"
      disableRipple
      disableElevation
      component={href ? "a" : "button"}
      href={href}
      type={href ? undefined : type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
}
