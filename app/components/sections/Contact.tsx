"use client";

import React, { useState } from "react";
import Reveal from "../common/Reveal";
import MagneticButton from "../common/MagneticButton";

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
          <div className="contact-left">
            <span className="eyebrow">Get In Touch</span>
            <h2 style={{ marginTop: "18px" }}>Let's Build Something Extraordinary Together</h2>
            <p>Tell us about your project — we'll respond within one business day with next steps.</p>
          </div>
          
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Your full name" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label>Company</label>
              <input type="text" placeholder="Company name" />
            </div>
            <div className="field">
              <label>Budget</label>
              <select>
                <option>Under $10k</option>
                <option>$10k – $50k</option>
                <option>$50k – $150k</option>
                <option>$150k+</option>
              </select>
            </div>
            <div className="field full">
              <label>Project Details</label>
              <textarea placeholder="What are you looking to build?" required></textarea>
            </div>
            <div className="full">
              <MagneticButton type="submit" className="btn btn-primary">
                {submitted ? "Message sent ✓" : "Submit Project Details"}
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
