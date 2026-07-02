"use client";

import { type RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { useParallax } from "@/hooks/useParallax";

/**
 * Hero section with animated SVG diagram, parallax mouse tracking,
 * gradient headline, and magnetic CTA buttons.
 */
export default function Hero() {
  const visualRef = useParallax(14);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const lines = gsap.utils.toArray<SVGPathElement>(".hero-line path");

      gsap.set(lines, {
        strokeDasharray: (_, path) => path.getTotalLength(),
        strokeDashoffset: (_, path) => path.getTotalLength(),
      });

      tl.to(lines, {
        strokeDashoffset: 0,
        duration: 0.8,
        stagger: 0.06,
      }).from(
        ".hero-node",
        {
          autoAlpha: 0,
          scale: 0.86,
          y: 18,
          duration: 0.7,
          stagger: 0.08,
          transformOrigin: "50% 50%",
        },
        "-=0.35"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Dot-grid + radial gradient background */}
      <div className="hero-bg">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#2D2D2D" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="1400" height="800" fill="url(#dots)" />
        </svg>
      </div>

      <div className="wrap hero-grid">
        {/* Copy */}
        <div className="hero-copy">
          <Reveal as="span" className="eyebrow">
            AI Driven Software Company
          </Reveal>
          <Reveal as="h1" delay={1}>
            Building Digital Products That{" "}
            <span className="grad-text">Move Businesses</span> Forward.
          </Reveal>
          <Reveal as="p" delay={2} className="lead">
            ADOPTBYTE designs and engineers modern software for startups,
            enterprises, and ambitious founders — from product strategy to
            scalable architecture, shipped fast without cutting corners.
          </Reveal>
          <Reveal delay={3} className="hero-ctas">
            <MagneticButton as="a" href="#contact" className="btn btn-primary">
              Start Your Project
            </MagneticButton>
            <MagneticButton as="a" href="#portfolio" className="btn btn-ghost">
              View Portfolio
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </MagneticButton>
          </Reveal>
        </div>

        {/* Interactive SVG diagram */}
        <Reveal delay={2}>
          <div
            className="hero-visual"
            id="heroVisual"
            ref={visualRef as RefObject<HTMLDivElement>}
          >
            <svg
              viewBox="0 0 600 560"
              width="100%"
              height="100%"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F36B00" />
                  <stop offset="55%" stopColor="#F09100" />
                  <stop offset="100%" stopColor="#E8AB00" />
                </linearGradient>
                <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F36B00" />
                  <stop offset="100%" stopColor="#E8AB00" />
                </linearGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="14"
                    stdDeviation="18"
                    floodColor="#2D2D2D"
                    floodOpacity="0.12"
                  />
                </filter>
              </defs>

              {/* Connecting lines */}
              <g className="hero-line" stroke="url(#lineGrad)" strokeWidth="2" fill="none" opacity="0.85">
                <path d="M300 260 L140 150" />
                <path d="M300 260 L470 120" />
                <path d="M300 260 L120 380" />
                <path d="M300 260 L460 400" />
                <path d="M300 260 L300 480" />
              </g>

              {/* Pulsing endpoint dots */}
              <g fill="url(#cardGrad)">
                {[
                  { cx: 140, cy: 150, dur: "2.4s" },
                  { cx: 470, cy: 120, dur: "2.1s" },
                  { cx: 120, cy: 380, dur: "2.7s" },
                  { cx: 460, cy: 400, dur: "2.3s" },
                  { cx: 300, cy: 480, dur: "2.6s" },
                ].map(({ cx, cy, dur }) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5">
                    <animate
                      attributeName="r"
                      values="3.5;5;3.5"
                      dur={dur}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>

              {/* Central dashboard card */}
              <g className="hero-node" filter="url(#soft)">
                <rect x="200" y="190" width="200" height="140" rx="16" fill="#fff" />
                <rect x="200" y="190" width="200" height="34" rx="16" fill="#f3efe8" />
                <circle cx="216" cy="207" r="4" fill="#E8AB00" />
                <circle cx="230" cy="207" r="4" fill="#F09100" />
                <circle cx="244" cy="207" r="4" fill="#F36B00" />
                <rect x="216" y="240" width="70" height="8" rx="4" fill="#eee" />
                <rect x="216" y="256" width="110" height="8" rx="4" fill="#eee" />
                <rect x="216" y="278" width="168" height="34" rx="8" fill="url(#cardGrad)" opacity="0.15" />
                <polyline
                  points="222,304 240,290 258,298 276,278 294,286 312,270 330,282 348,268 366,276"
                  fill="none"
                  stroke="url(#cardGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Laptop (top-left) */}
              <g className="hero-node" filter="url(#soft)" transform="translate(60,90)">
                <rect x="0" y="0" width="150" height="96" rx="10" fill="#2b2b2b" />
                <rect x="6" y="6" width="138" height="84" rx="4" fill="#fff" />
                <rect x="14" y="16" width="60" height="7" rx="3" fill="#F09100" opacity="0.5" />
                <rect x="14" y="30" width="100" height="5" rx="2" fill="#eee" />
                <rect x="14" y="42" width="80" height="5" rx="2" fill="#eee" />
                <rect x="14" y="58" width="46" height="20" rx="5" fill="url(#cardGrad)" opacity="0.18" />
                <rect x="68" y="58" width="46" height="20" rx="5" fill="url(#cardGrad)" opacity="0.30" />
              </g>

              {/* Phone (top-right) */}
              <g className="hero-node" filter="url(#soft)" transform="translate(430,60)">
                <rect x="0" y="0" width="70" height="130" rx="14" fill="#2b2b2b" />
                <rect x="5" y="10" width="60" height="110" rx="6" fill="#fff" />
                <circle cx="35" cy="24" r="8" fill="url(#cardGrad)" opacity="0.25" />
                <rect x="12" y="42" width="46" height="6" rx="3" fill="#eee" />
                <rect x="12" y="54" width="30" height="6" rx="3" fill="#eee" />
                <rect x="12" y="72" width="46" height="36" rx="6" fill="url(#cardGrad)" opacity="0.14" />
              </g>

              {/* Cloud (bottom-left) */}
              <g className="hero-node" filter="url(#soft)" transform="translate(50,340)">
                <path d="M20 40 a20 20 0 010-40 h40 a24 24 0 010 48 h-46 a16 16 0 01-4-8z" fill="#fff" />
                <path
                  d="M20 40 a20 20 0 010-40 h40 a24 24 0 010 48 h-46 a16 16 0 01-4-8z"
                  fill="url(#cardGrad)"
                  opacity="0.10"
                />
              </g>

              {/* Code window (bottom-right) */}
              <g className="hero-node" filter="url(#soft)" transform="translate(390,340)">
                <rect x="0" y="0" width="150" height="100" rx="10" fill="#fff" />
                <rect x="0" y="0" width="150" height="22" rx="10" fill="#f3efe8" />
                <circle cx="14" cy="11" r="3" fill="#E8AB00" />
                <circle cx="26" cy="11" r="3" fill="#F09100" />
                <circle cx="38" cy="11" r="3" fill="#F36B00" />
                <rect x="14" y="34" width="60" height="5" rx="2" fill="#F09100" opacity="0.55" />
                <rect x="14" y="46" width="90" height="5" rx="2" fill="#ddd" />
                <rect x="26" y="58" width="70" height="5" rx="2" fill="#ddd" />
                <rect x="14" y="70" width="50" height="5" rx="2" fill="#ddd" />
                <rect x="14" y="82" width="100" height="5" rx="2" fill="#F09100" opacity="0.4" />
              </g>

              {/* Base node (bottom-center) */}
              <g className="hero-node" filter="url(#soft)" transform="translate(255,450)">
                <circle cx="45" cy="20" r="30" fill="#fff" />
                <circle cx="45" cy="20" r="30" fill="url(#cardGrad)" opacity="0.10" />
                <circle cx="45" cy="20" r="7" fill="url(#cardGrad)" />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
