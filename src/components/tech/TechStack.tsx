import React from "react";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/data/siteData";

/**
 * Infinite scrolling marquee of technology chips.
 * Duplicates the list for a seamless loop; pauses on hover.
 */
export default function TechStack() {
  const trackItems = [...techStack, ...techStack];

  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="wrap">
        <Reveal
          className="section-head center"
          style={{ marginBottom: "40px" }}
        >
          <span className="eyebrow">Our Toolkit</span>
          <h2 style={{ fontSize: "28px" }}>
            Technology we build with, every day.
          </h2>
        </Reveal>
      </div>

      <div className="tech-marquee" aria-label="Technology stack">
        <div className="tech-track" role="list">
          {trackItems.map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="chip" role="listitem">
              <span className="dot" aria-hidden="true" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
