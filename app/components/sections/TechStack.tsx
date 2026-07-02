import React from "react";
import Reveal from "../common/Reveal";

const techs = [
  "React", "Next.js", "Node.js", "Python", 
  "Flutter", "AWS", "Docker", "Firebase", 
  "MongoDB", "PostgreSQL", "OpenAI", "Azure"
];

export default function TechStack() {
  // Duplicate for seamless marquee effect
  const trackItems = [...techs, ...techs];

  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="wrap">
        <Reveal className="section-head center" style={{ marginBottom: "40px" }}>
          <span className="eyebrow">Our Toolkit</span>
          <h2 style={{ fontSize: "28px" }}>Technology we build with, every day.</h2>
        </Reveal>
      </div>
      <div className="tech-marquee">
        <div className="tech-track">
          {trackItems.map((t, idx) => (
            <div key={idx} className="chip">
              <span className="dot"></span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
