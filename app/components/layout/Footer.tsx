import React from "react";
import {
  footerBrandText,
  footerBottomLeft,
  footerBottomRight,
  footerNewsletterText,
  footerQuickLinks,
  footerServiceLinks,
  footerSocialLinks,
} from "./siteData";

function renderSocialIcon(icon: "linkedin" | "twitter" | "dribbble") {
  if (icon === "linkedin") {
    return (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    );
  }

  if (icon === "twitter") {
    return (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    );
  }

  return <circle cx="12" cy="12" r="10" />;
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="mark"></span>ADOPTBYTE
            </div>
            <p>{footerBrandText}</p>
            <div className="footer-social">
              {footerSocialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    {renderSocialIcon(item.icon)}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            {footerQuickLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {footerServiceLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Stay Updated</h5>
            <p style={{ fontSize: "13.5px", color: "var(--ink-soft)" }}>
              {footerNewsletterText}
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Email address" />
              <button aria-label="Subscribe">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footerBottomLeft}</span>
          <span>{footerBottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
