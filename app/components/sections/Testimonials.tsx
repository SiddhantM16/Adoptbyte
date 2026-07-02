import React from "react";
import Reveal from "../common/Reveal";

const testimonials = [
  { q: "ADOPTBYTE rebuilt our platform in twelve weeks with zero downtime. The communication alone was worth the investment.", n: "Priya Nathan", r: "CTO, Northbeam" },
  { q: "They think like product owners, not just contractors. Our roadmap moved faster than any previous partner delivered.", n: "Marco Lindqvist", r: "Founder, Verdant Health" },
  { q: "Enterprise-grade engineering with startup speed. That combination is genuinely rare.", n: "Aisha Bello", r: "VP Engineering, Atlas" },
];

export default function Testimonials() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Client Voices</span>
          <h2>Trusted by teams who need it done right.</h2>
        </Reveal>
        
        <div className="testi-grid">
          {testimonials.map((t, idx) => (
            <Reveal
              key={idx}
              className="testi-card"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="stars">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15 2 10l7-1z" />
                  </svg>
                ))}
              </div>
              <p className="quote">"{t.q}"</p>
              <div className="testi-person">
                <div className="avatar"></div>
                <div className="who">
                  <b>{t.n}</b>
                  <span>{t.r}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
