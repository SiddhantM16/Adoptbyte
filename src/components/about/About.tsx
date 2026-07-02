import React from "react";
import Reveal from "@/components/ui/Reveal";

/**
 * About section with the company story, timeline milestones,
 * and mission/vision/values cards alongside an SVG illustration.
 */
export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        {/* Left – SVG illustration */}
        <Reveal className="about-illustration">
          <svg viewBox="0 0 500 520" width="100%" height="100%" aria-hidden="true">
            <defs>
              <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F36B00" />
                <stop offset="100%" stopColor="#E8AB00" />
              </linearGradient>
            </defs>
            <rect x="40" y="60" width="420" height="260" rx="18" fill="#fff" stroke="#eee" />
            <rect x="40" y="60" width="420" height="36" rx="18" fill="#f5f1ea" />
            <circle cx="60" cy="78" r="4" fill="#E8AB00" />
            <circle cx="74" cy="78" r="4" fill="#F09100" />
            <circle cx="88" cy="78" r="4" fill="#F36B00" />
            <rect x="64" y="120" width="150" height="10" rx="5" fill="#eee" />
            <rect x="64" y="142" width="230" height="8" rx="4" fill="#eee" />
            <rect x="64" y="160" width="180" height="8" rx="4" fill="#eee" />
            <rect x="64" y="190" width="170" height="90" rx="10" fill="url(#ag)" opacity="0.12" />
            <polyline
              points="80,260 110,235 140,250 170,215 200,228 230,205"
              stroke="url(#ag)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="260" y="190" width="160" height="90" rx="10" fill="#faf6f0" />
            <circle cx="340" cy="235" r="34" fill="url(#ag)" opacity="0.18" />
            <circle
              cx="340"
              cy="235"
              r="34"
              fill="none"
              stroke="url(#ag)"
              strokeWidth="4"
              strokeDasharray="160"
              strokeDashoffset="45"
              strokeLinecap="round"
            />
            <rect x="70" y="360" width="130" height="130" rx="16" fill="#fff" stroke="#eee" />
            <circle cx="135" cy="410" r="22" fill="url(#ag)" opacity="0.2" />
            <rect x="105" y="445" width="60" height="8" rx="4" fill="#eee" />
            <rect x="215" y="360" width="220" height="130" rx="16" fill="url(#ag)" opacity="0.08" />
            <rect x="235" y="380" width="90" height="8" rx="4" fill="#F09100" opacity="0.5" />
            <rect x="235" y="398" width="160" height="7" rx="3.5" fill="#e3ddd2" />
            <rect x="235" y="414" width="130" height="7" rx="3.5" fill="#e3ddd2" />
            <rect x="235" y="440" width="100" height="30" rx="8" fill="url(#ag)" />
          </svg>
        </Reveal>

        {/* Right – copy, timeline, values */}
        <div>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ marginTop: "20px", fontSize: "clamp(28px,3vw,40px)", lineHeight: 1.15 }}>
              Nearly a decade of building software that outlives trends.
            </h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "16px", fontSize: "15.5px", maxWidth: "520px" }}>
              ADOPTBYTE started as a two-person engineering studio and grew into
              a full-service partner for founders and enterprise teams who need
              software that performs under real-world pressure — not just demo day.
            </p>
          </Reveal>

          <Reveal delay={1} className="timeline">
            {[
              { yr: "2017", title: "Studio founded", desc: "Two engineers, one client, a commitment to craft over shortcuts." },
              { yr: "2020", title: "Enterprise-ready", desc: "Expanded into cloud architecture and compliance-grade systems." },
              { yr: "2023", title: "AI practice launched", desc: "Began embedding ML and automation into client products." },
              { yr: "2026", title: "180+ products shipped", desc: "Trusted by teams across 14 countries and counting." },
            ].map(({ yr, title, desc }) => (
              <div key={yr} className="timeline-item">
                <div className="yr">{yr}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={2} className="values-row">
            {[
              { title: "Mission", desc: "Turn ambitious ideas into dependable software." },
              { title: "Vision", desc: "Set the standard for enterprise-grade engineering." },
              { title: "Values", desc: "Craft, transparency, and long-term partnership." },
            ].map(({ title, desc }) => (
              <div key={title} className="value-card">
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
