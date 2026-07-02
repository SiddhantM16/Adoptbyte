import React from "react";
import Reveal from "../common/Reveal";

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why ADOPTBYTE</span>
          <h2>The difference shows up in how we work.</h2>
        </Reveal>
        
        <Reveal className="compare-wrap">
          <div className="compare-col others">
            <h4>Typical Agencies</h4>
            <ul className="compare-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                Long, unpredictable delivery timelines
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                Outdated tech stacks and legacy patterns
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                Inconsistent, hard-to-reach communication
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                Limited post-launch support
              </li>
            </ul>
          </div>
          
          <div className="compare-col us">
            <h4>ADOPTBYTE</h4>
            <ul className="compare-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Agile delivery in weekly, shippable increments
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Modern, scalable architecture from day one
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                A dedicated team, transparent by default
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Ongoing support built into every engagement
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
