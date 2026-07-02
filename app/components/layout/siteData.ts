export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "dribbble";
};

export const headerLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const footerBrandText =
  "Building digital products that move businesses forward -- from strategy to scalable, shipped software.";

export const footerSocialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Dribbble", href: "#", icon: "dribbble" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Web Development", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "Cloud & AI", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
];

export const footerNewsletterText = "Product insights, occasionally. No spam.";

export const footerBottomLeft = "Copyright (c) 2026 ADOPTBYTE. All rights reserved.";
export const footerBottomRight = "Privacy Policy | Terms of Service";
