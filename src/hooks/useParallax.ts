"use client";

import { useEffect, useRef } from "react";

/**
 * Applies a mouse-position parallax transform to the referenced element.
 * The element translates by ±range pixels as the mouse moves across the viewport.
 */
export function useParallax(range = 14) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * range;
      const y = (e.clientY / window.innerHeight - 0.5) * range;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [range]);

  return ref;
}
