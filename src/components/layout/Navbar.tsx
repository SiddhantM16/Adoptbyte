"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { headerLinks } from "@/data/siteData";

/**
 * Fixed navigation bar with scroll-activated frosted-glass effect,
 * animated link underlines, and a responsive mobile hamburger menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.add("mobile-menu-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      id="siteHeader"
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`.trim()}
    >
      <div className="wrap">
        <nav>
          {/* Logo */}
          <a href="/" className="logo" aria-label="ADOPTBYTE - Home">
            <span className="logo-frame">
              <Image
                src="/adopybyte_logo.png"
                alt="Adoptbyte"
                fill
                className="logo-image"
                sizes="(max-width: 720px) 154px, 188px"
                priority
              />
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
          <div className="nav-cta">
            <MagneticButton
              as="a"
              href="#contact"
              className="btn btn-primary desktop-cta"
            >
              Book Free Consultation
            </MagneticButton>
            <button
              className="menu-btn"
              id="menuBtn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      <button
        className="menu-overlay"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className="mobile-menu"
        id="mobileMenu"
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav-links">
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          as="a"
          href="#contact"
          className="btn btn-primary mobile-menu-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book Free Consultation
        </MagneticButton>
      </aside>
    </header>
  );
}
