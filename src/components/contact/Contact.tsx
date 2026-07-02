"use client";

import React, { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Contact section with project intake form.
 * On submit the button transitions to a confirmation state.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          {/* Left – heading */}
          <div className="contact-left">
            <span className="eyebrow">Get In Touch</span>
            <h2 style={{ marginTop: "18px" }}>
              Let&apos;s Build Something Extraordinary Together
            </h2>
            <p>
              Tell us about your project — we&apos;ll respond within one
              business day with next steps.
            </p>
          </div>

          {/* Right – form */}
          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your full name"
                required
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                type="text"
                placeholder="Company name"
                autoComplete="organization"
              />
            </div>
            <div className="field">
              <label htmlFor="contact-budget">Budget</label>
              <select id="contact-budget">
                <option>Under $10k</option>
                <option>$10k – $50k</option>
                <option>$50k – $150k</option>
                <option>$150k+</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="contact-details">Project Details</label>
              <textarea
                id="contact-details"
                placeholder="What are you looking to build?"
                required
              />
            </div>
            <div className="full">
              <MagneticButton
                type="submit"
                className="btn btn-primary"
                aria-label="Submit project details"
              >
                {submitted ? "Message sent ✓" : "Submit Project Details"}
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
