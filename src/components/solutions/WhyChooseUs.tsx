import React from "react";
import Reveal from "@/components/ui/Reveal";

const othersItems = [
  "Long, unpredictable delivery timelines",
  "Outdated tech stacks and legacy patterns",
  "Inconsistent, hard-to-reach communication",
  "Limited post-launch support",
];

const usItems = [
  "Agile delivery in weekly, shippable increments",
  "Modern, scalable architecture from day one",
  "A dedicated team, transparent by default",
  "Ongoing support built into every engagement",
];

/**
 * Side-by-side comparison panel: Typical Agencies vs. ADOPTBYTE.
 */
export default function WhyChooseUs() {
  return (
    <section id="solutions">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why ADOPTBYTE</span>
          <h2>The difference shows up in how we work.</h2>
        </Reveal>

        <Reveal className="compare-wrap">
          {/* Typical agencies column */}
          <div className="compare-col others">
            <h4>Typical Agencies</h4>
            <ul className="compare-list">
              {othersItems.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ADOPTBYTE column */}
          <div className="compare-col us">
            <h4>ADOPTBYTE</h4>
            <ul className="compare-list">
              {usItems.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
