import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/data/siteData";

/**
 * Infinite scrolling marquee of technology chips.
 * Duplicates the list for a seamless loop; pauses on hover.
 */
export default function TechStack() {
  const trackItems = [...techStack, ...techStack];

  return (
    <Box component="section" sx={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <Box className="wrap">
        <Reveal className="section-head center" style={{ marginBottom: "40px" }}>
          <Typography component="span" className="eyebrow">
            Our Toolkit
          </Typography>
          <Typography component="h2" sx={{ fontSize: "28px" }}>
            Technology we build with, every day.
          </Typography>
        </Reveal>
      </Box>

      <Box className="tech-marquee" aria-label="Technology stack">
        <Box className="tech-track" role="list">
          {trackItems.map((tech, idx) => (
            <Box key={`${tech}-${idx}`} className="chip" role="listitem">
              <Box component="span" className="dot" aria-hidden="true" />
              {tech}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
