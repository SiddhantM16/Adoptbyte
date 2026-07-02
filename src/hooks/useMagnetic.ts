"use client";

import { useRef, useState } from "react";

/**
 * Provides a magnetic hover effect for an element.
 * The element shifts toward the cursor position within a bounded range.
 */
export function useMagnetic() {
  const ref = useRef<HTMLElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    setStyle({ transform: `translate(${x * 0.18}px, ${y * 0.35}px)` });
  };

  const handleMouseLeave = () => setStyle({});

  return { ref, style, handleMouseMove, handleMouseLeave };
}
