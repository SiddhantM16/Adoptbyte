"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  footerBrandText,
  footerBottomLeft,
  footerNewsletterText,
  footerQuickLinks,
  footerServiceLinks,
} from "@/data/siteData";

/**
 * Site footer with brand statement, navigation columns,
 * social links, and email newsletter subscription input.
 */
export default function Footer() {
  return (
    <Box component="footer">
      <Box className="wrap">
        <Box className="footer-grid">
          <Box className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="ADOPTBYTE - Home" underline="none">
              <Image
                src="/adopybyte_logo.png"
                alt="Adoptbyte"
                fill
                className="footer-logo-image"
                sizes="176px"
              />
            </Link>
            <Typography component="p">{footerBrandText}</Typography>
            <Box className="footer-social" />
          </Box>

          <Box className="footer-col">
            <Typography component="h5">
              Quick Links
            </Typography>
            {footerQuickLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} underline="none">
                {link.label}
              </Link>
            ))}
          </Box>

          <Box className="footer-col">
            <Typography component="h5">
              Services
            </Typography>
            {footerServiceLinks.map((link) => (
              <Link key={link.label} href={link.href} underline="none">
                {link.label}
              </Link>
            ))}
          </Box>

          <Box className="footer-col">
            <Typography component="h5">
              Stay Updated
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "13.5px", color: "var(--ink-soft)" }}
            >
              {footerNewsletterText}
            </Typography>
            <Box className="newsletter">
              <TextField
                type="email"
                placeholder="Email address"
                aria-label="Newsletter email address"
                fullWidth
                slotProps={{ input: { disableUnderline: true } }}
              />
              <IconButton type="button" aria-label="Subscribe to newsletter">
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box className="footer-bottom">
          <Typography component="span">{footerBottomLeft}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
