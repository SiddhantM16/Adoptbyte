import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Reveal from "@/components/ui/Reveal";

const othersItems = [
  "Long, unpredictable delivery timelines",
  "Outdated tech stacks and legacy patterns",
  "Inconsistent, hard-to-reach communication",
  "Limited post-launch support",
];

const usItems = [
  "Agile delivery in weekly, shippable increments",
  "Modern, scalable architecture from day one",
  "A dedicated team, transparent by default",
  "Ongoing support built into every engagement",
];

/**
 * Side-by-side comparison panel: Typical Agencies vs. ADOPTBYTE.
 */
export default function WhyChooseUs() {
  return (
    <Box component="section" id="solutions">
      <Box className="wrap">
        <Reveal className="section-head">
          <Typography component="span" className="eyebrow">
            Why ADOPTBYTE
          </Typography>
          <Typography component="h2">
            The difference shows up in how we work.
          </Typography>
        </Reveal>

        <Reveal className="compare-wrap">
          <Box className="compare-col others">
            <Typography component="h4">
              Typical Agencies
            </Typography>
            <List className="compare-list" disablePadding component="ul">
              {othersItems.map((item) => (
                <ListItem key={item} disablePadding component="li">
                  <CloseIcon fontSize="small" aria-hidden="true" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>

          <Box className="compare-col us">
            <Typography component="h4">
              ADOPTBYTE
            </Typography>
            <List className="compare-list" disablePadding component="ul">
              {usItems.map((item) => (
                <ListItem key={item} disablePadding component="li">
                  <CheckIcon fontSize="small" aria-hidden="true" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
