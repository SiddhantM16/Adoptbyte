"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { trustStats } from "@/data/siteData";

/**
 * Trust counters strip with animated count-up numbers —
 * Years, Projects, Clients, Countries, Satisfaction.
 */
export default function Trust() {
  return (
    <Box component="section" className="trust" aria-label="Company statistics">
      <Box className="wrap trust-grid">
        {trustStats.map((stat, idx) => (
          <Reveal
            key={stat.label}
            className="trust-item"
            delay={idx > 0 ? (Math.min(idx, 4) as 1 | 2 | 3 | 4) : undefined}
          >
            <Counter target={stat.target} suffix={stat.suffix} />
            <Typography component="div" className="label">
              {stat.label}
            </Typography>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}
