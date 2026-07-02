import React from "react";
import Reveal from "../common/Reveal";

const services = [
  { t: "Custom Software", d: "Bespoke systems engineered around how your business actually runs.", i: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0H5a2 2 0 01-2-2v-4m6 6h10a2 2 0 002-2v-4" },
  { t: "Web Development", d: "Fast, accessible, production-grade web applications.", i: "M4 4h16v16H4zM4 9h16" },
  { t: "Mobile Apps", d: "Native and cross-platform apps built for scale.", i: "M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" },
  { t: "UI/UX Design", d: "Interfaces that are as usable as they are beautiful.", i: "M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15 2 10l7-1z" },
  { t: "Cloud", d: "Resilient infrastructure that scales with demand.", i: "M17 16a4 4 0 000-8 5 5 0 00-9.6-1.5A4.5 4.5 0 007 16h10z" },
  { t: "Artificial Intelligence", d: "AI features that solve real problems, not novelty demos.", i: "M12 2a5 5 0 015 5c0 2-2 3-2 5v2H9v-2c0-2-2-3-2-5a5 5 0 015-5zM9 19h6M10 22h4" },
  { t: "Machine Learning", d: "Models trained and deployed for measurable outcomes.", i: "M4 19h16M4 15l4-6 4 3 4-8 4 5" },
  { t: "Automation", d: "Workflow automation that removes manual busywork.", i: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" },
  { t: "ERP", d: "Unified systems for operations, finance, and inventory.", i: "M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" },
  { t: "CRM", d: "Customer platforms your sales team will actually use.", i: "M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
  { t: "SaaS Development", d: "Multi-tenant platforms built to grow with your users.", i: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { t: "API Development", d: "Clean, documented APIs that other teams love to integrate.", i: "M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4m6-18h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M9 9h6M9 15h6" },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Full-stack expertise, applied with precision.</h2>
          <p>From a first prototype to enterprise-scale platforms, our teams cover the entire product lifecycle.</p>
        </Reveal>
        
        <div className="services-grid">
          {services.map((s, idx) => (
            <Reveal
              key={idx}
              className="service-card"
              style={{ transitionDelay: `${(idx % 4) * 0.06}s` }}
            >
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d={s.i} />
                </svg>
              </div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
              <span className="service-arrow">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
