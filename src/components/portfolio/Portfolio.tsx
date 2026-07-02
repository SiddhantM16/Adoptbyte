import React from "react";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/siteData";

/**
 * Portfolio grid — 4 featured project cards with animated
 * laptop-screen mockups and hover zoom effects.
 */
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2>Products we&apos;ve shipped, and clients keep using.</h2>
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((p, idx) => (
            <Reveal
              key={p.n}
              className="project-card"
              style={{ transitionDelay: `${(idx % 2) * 0.08}s` }}
            >
              <div className="laptop-mock">
                <div className="laptop-screen">
                  <svg
                    viewBox="0 0 400 250"
                    width="100%"
                    height="100%"
                    className="fake"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id={`pg${idx}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={p.c1} />
                        <stop offset="100%" stopColor={p.c2} />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="250" fill="#fff" />
                    <rect width="400" height="34" fill="#f5f1ea" />
                    <circle cx="16" cy="17" r="4" fill={p.c1} opacity="0.6" />
                    <circle cx="30" cy="17" r="4" fill={p.c2} opacity="0.6" />
                    <rect x="20" y="55" width="150" height="12" rx="6" fill="#eee" />
                    <rect x="20" y="78" width="220" height="8" rx="4" fill="#eee" />
                    <rect x="20" y="100" width="110" height="70" rx="10" fill={`url(#pg${idx})`} opacity="0.15" />
                    <rect x="145" y="100" width="110" height="70" rx="10" fill={`url(#pg${idx})`} opacity="0.30" />
                    <rect x="270" y="100" width="110" height="70" rx="10" fill={`url(#pg${idx})`} opacity="0.15" />
                    <polyline
                      points="20,210 60,190 100,205 140,175 180,195 220,160 260,180 300,150 340,170"
                      fill="none"
                      stroke={`url(#pg${idx})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="laptop-base" aria-hidden="true" />
              </div>

              <div className="project-info">
                <div>
                  <h4>{p.n}</h4>
                  <p>Full product design &amp; engineering</p>
                </div>
                <span className="tag">{p.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
