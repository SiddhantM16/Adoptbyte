"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/siteData";

/**
 * Services grid — 12 offering cards with icons, descriptions, and hover effects.
 */
export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (container.scrollWidth > container.clientWidth) {
          const card = container.querySelector(".service-card") as HTMLElement;
          if (!card) return;
          const gap = 16;
          const scrollAmount = card.clientWidth + gap;

          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    const handlePause = () => clearInterval(intervalId);
    const handleResume = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    container.addEventListener("touchstart", handlePause, { passive: true });
    container.addEventListener("touchend", handleResume, { passive: true });
    container.addEventListener("mouseenter", handlePause);
    container.addEventListener("mouseleave", handleResume);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("touchstart", handlePause);
      container.removeEventListener("touchend", handleResume);
      container.removeEventListener("mouseenter", handlePause);
      container.removeEventListener("mouseleave", handleResume);
    };
  }, []);

  return (
    <Box component="section" id="services">
      <Box className="wrap">
        <Reveal className="section-head">
          <Typography component="span" className="eyebrow">
            What We Do
          </Typography>
          <Typography component="h2">
            Full-stack expertise, applied with precision.
          </Typography>
          <Typography component="p">
            From a first prototype to enterprise-scale platforms, our teams
            cover the entire product lifecycle.
          </Typography>
        </Reveal>

        <Box className="services-grid" ref={scrollRef}>
          {services.map((s, idx) => (
            <Reveal key={s.t} className="service-card" delay={idx % 4}>
              <Box className="service-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d={s.i} />
                </svg>
              </Box>
              <Typography component="h4">
                {s.t}
              </Typography>
              <Typography component="p">{s.d}</Typography>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
