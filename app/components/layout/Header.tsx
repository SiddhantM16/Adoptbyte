"use client";

import React, { useState, useEffect } from "react";
import MagneticButton from "../common/MagneticButton";
import { headerLinks } from "./siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav>
          <div className="logo">
            <span className="mark"></span>ADOPTBYTE
          </div>

          <ul
            className="nav-links"
            style={
              menuOpen
                ? {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    top: "70px",
                    left: "20px",
                    right: "20px",
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "18px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    gap: "18px",
                  }
                : {}
            }
          >
            {headerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <MagneticButton as="a" href="#contact" className="btn btn-primary">
              Book Free Consultation
            </MagneticButton>
            <div
              className="menu-btn"
              id="menuBtn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
