"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
    <Box component="section" id="contact">
      <Box className="wrap">
        <Reveal className="contact-card">
          <Box className="contact-left">
            <Typography variant="inherit" component="span" className="eyebrow">
              Get In Touch
            </Typography>
            <Typography variant="inherit" component="h2" sx={{ marginTop: "18px" }}>
              Let&apos;s Build Something Extraordinary Together
            </Typography>
            <Typography variant="inherit" component="p">
              Tell us about your project — we&apos;ll respond within one
              business day with next steps.
            </Typography>
          </Box>

          <Box
            component="form"
            className="form-grid"
            onSubmit={handleSubmit}
            noValidate
          >
            <Box className="field">
              <Box component="label" htmlFor="contact-name">
                Name
              </Box>
              <TextField
                id="contact-name"
                type="text"
                placeholder="Your full name"
                required
                autoComplete="name"
                fullWidth
                variant="standard"
                slotProps={{ input: { disableUnderline: true } }}
              />
            </Box>
            <Box className="field">
              <Box component="label" htmlFor="contact-email">
                Email
              </Box>
              <TextField
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
                fullWidth
                variant="standard"
                slotProps={{ input: { disableUnderline: true } }}
              />
            </Box>
            <Box className="field">
              <Box component="label" htmlFor="contact-company">
                Company
              </Box>
              <TextField
                id="contact-company"
                type="text"
                placeholder="Company name"
                autoComplete="organization"
                fullWidth
                variant="standard"
                slotProps={{ input: { disableUnderline: true } }}
              />
            </Box>
            <Box className="field">
              <Box component="label" htmlFor="contact-budget">
                Budget
              </Box>
              <FormControl fullWidth variant="standard">
                <Select
                  id="contact-budget"
                  defaultValue="Under $10k"
                  disableUnderline
                >
                  <MenuItem value="Under $10k">Under $10k</MenuItem>
                  <MenuItem value="$10k – $50k">$10k – $50k</MenuItem>
                  <MenuItem value="$50k – $150k">$50k – $150k</MenuItem>
                  <MenuItem value="$150k+">$150k+</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="field full">
              <Box component="label" htmlFor="contact-details">
                Project Details
              </Box>
              <TextField
                id="contact-details"
                placeholder="What are you looking to build?"
                required
                fullWidth
                multiline
                rows={4}
                variant="standard"
                slotProps={{ input: { disableUnderline: true } }}
              />
            </Box>
            <Box className="full">
              <MagneticButton
                type="submit"
                className="btn btn-primary"
                aria-label="Submit project details"
              >
                {submitted ? "Message sent ✓" : "Submit Project Details"}
              </MagneticButton>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
