import React from "react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/siteData";

/**
 * Three-column testimonials grid with star ratings,
 * gradient avatars, and staggered reveal animations.
 */
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
              key={t.n}
              className="testi-card"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15 2 10l7-1z" />
                  </svg>
                ))}
              </div>
              <p className="quote">&ldquo;{t.q}&rdquo;</p>
              <div className="testi-person">
                <div className="avatar" aria-hidden="true" />
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
