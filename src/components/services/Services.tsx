import React from "react";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/siteData";

/**
 * Services grid — 12 offering cards with icons, descriptions, and hover effects.
 */
export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Full-stack expertise, applied with precision.</h2>
          <p>
            From a first prototype to enterprise-scale platforms, our teams
            cover the entire product lifecycle.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, idx) => (
            <Reveal
              key={s.t}
              className="service-card"
              style={{ transitionDelay: `${(idx % 4) * 0.06}s` }}
            >
              <div className="service-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d={s.i} />
                </svg>
              </div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
              <span className="service-arrow" aria-hidden="true">
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
