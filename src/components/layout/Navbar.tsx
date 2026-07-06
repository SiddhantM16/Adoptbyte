"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
    <Box
      component="header"
      id="siteHeader"
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`.trim()}
    >
      <Box className="wrap">
        <Box component="nav">
          <Link href="/" className="logo" aria-label="ADOPTBYTE - Home" underline="none">
            <Box className="logo-frame">
              <Image
                src="/adopybyte_logo.png"
                alt="Adoptbyte"
                fill
                className="logo-image"
                sizes="(max-width: 720px) 154px, 188px"
                priority
              />
            </Box>
          </Link>

          <List className="nav-links" disablePadding component="ul">
            {headerLinks.map((link) => (
              <ListItem key={link.href} disablePadding component="li">
                <Link href={link.href} underline="none">
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </List>

          <Box className="nav-cta">
            <MagneticButton href="#contact" className="btn btn-primary desktop-cta">
              Book Free Consultation
            </MagneticButton>
            <IconButton
              className="menu-btn"
              id="menuBtn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        component="button"
        type="button"
        className="menu-overlay"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      />

      <Box
        component="aside"
        className="mobile-menu"
        id="mobileMenu"
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <Box className="mobile-menu-head">
          <Link
            href="/"
            className="mobile-menu-logo"
            aria-label="ADOPTBYTE - Home"
            underline="none"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/adopybyte_logo.png"
              alt="Adoptbyte"
              fill
              className="logo-image"
              sizes="150px"
            />
          </Link>
          <IconButton
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List className="mobile-nav-links" disablePadding component="ul">
          {headerLinks.map((link) => (
            <ListItem key={link.href} disablePadding component="li">
              <Link href={link.href} underline="none" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </ListItem>
          ))}
        </List>

        <MagneticButton
          href="#contact"
          className="btn btn-primary mobile-menu-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book Free Consultation
        </MagneticButton>
      </Box>
    </Box>
  );
}
