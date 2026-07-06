import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/siteData";

/**
 * Three-column testimonials grid with star ratings,
 * gradient avatars, and staggered reveal animations.
 */
export default function Testimonials() {
  return (
    <Box component="section">
      <Box className="wrap">
        <Reveal className="section-head">
          <Typography component="span" className="eyebrow">
            Client Voices
          </Typography>
          <Typography component="h2">
            Trusted by teams who need it done right.
          </Typography>
        </Reveal>

        <Box className="testi-grid">
          {testimonials.map((t, idx) => (
            <Reveal
              key={t.n}
              className="testi-card"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <Box className="stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} fontSize="small" aria-hidden="true" />
                ))}
              </Box>
              <Typography component="p" className="quote">
                &ldquo;{t.q}&rdquo;
              </Typography>
              <Box className="testi-person">
                <Box className="avatar" aria-hidden="true" />
                <Box className="who">
                  <Typography component="strong" sx={{ fontWeight: 700 }}>
                    {t.n}
                  </Typography>
                  <Typography component="span">{t.r}</Typography>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
