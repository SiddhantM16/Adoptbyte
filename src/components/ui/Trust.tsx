"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { trustStats } from "@/data/siteData";

/**
 * Trust counters strip with animated count-up numbers —
 * Years, Projects, Clients, Countries, Satisfaction.
 */
export default function Trust() {
  return (
    <section className="trust" aria-label="Company statistics">
      <div className="wrap trust-grid">
        {trustStats.map((stat, idx) => (
          <Reveal
            key={stat.label}
            as="div"
            className="trust-item"
            delay={idx > 0 ? (Math.min(idx, 4) as 1 | 2 | 3 | 4) : undefined}
          >
            <Counter target={stat.target} suffix={stat.suffix} />
            <div className="label">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
