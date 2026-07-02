import type {
  NavLink,
  SocialLink,
  ServiceItem,
  ProjectItem,
  ProcessStep,
  TestimonialItem,
  TrustStat,
} from "@/types";

export const headerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  // { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  // { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const footerBrandText =
  "Building digital products that move businesses forward — from strategy to scalable, shipped software.";

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
export const footerBottomLeft = "© 2026 ADOPTBYTE. All rights reserved.";
export const footerBottomRight = "Privacy Policy · Terms of Service";

export const trustStats: TrustStat[] = [
  { target: 9, suffix: "+", label: "Years of Experience" },
  { target: 180, suffix: "+", label: "Projects Delivered" },
  { target: 120, suffix: "+", label: "Happy Clients" },
  { target: 14, suffix: "", label: "Countries Served" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
];

export const services: ServiceItem[] = [
  {
    t: "Custom Software",
    d: "Bespoke systems engineered around how your business actually runs.",
    i: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0H5a2 2 0 01-2-2v-4m6 6h10a2 2 0 002-2v-4",
  },
  {
    t: "Web Development",
    d: "Fast, accessible, production-grade web applications.",
    i: "M4 4h16v16H4zM4 9h16",
  },
  {
    t: "Mobile Apps",
    d: "Native and cross-platform apps built for scale.",
    i: "M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2",
  },
  {
    t: "UI/UX Design",
    d: "Interfaces that are as usable as they are beautiful.",
    i: "M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15 2 10l7-1z",
  },
  {
    t: "Cloud",
    d: "Resilient infrastructure that scales with demand.",
    i: "M17 16a4 4 0 000-8 5 5 0 00-9.6-1.5A4.5 4.5 0 007 16h10z",
  },
  {
    t: "Artificial Intelligence",
    d: "AI features that solve real problems, not novelty demos.",
    i: "M12 2a5 5 0 015 5c0 2-2 3-2 5v2H9v-2c0-2-2-3-2-5a5 5 0 015-5zM9 19h6M10 22h4",
  },
  {
    t: "Machine Learning",
    d: "Models trained and deployed for measurable outcomes.",
    i: "M4 19h16M4 15l4-6 4 3 4-8 4 5",
  },
  {
    t: "Automation",
    d: "Workflow automation that removes manual busywork.",
    i: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8",
  },
  {
    t: "ERP",
    d: "Unified systems for operations, finance, and inventory.",
    i: "M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7",
  },
  {
    t: "CRM",
    d: "Customer platforms your sales team will actually use.",
    i: "M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
  {
    t: "SaaS Development",
    d: "Multi-tenant platforms built to grow with your users.",
    i: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    t: "API Development",
    d: "Clean, documented APIs that other teams love to integrate.",
    i: "M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4m6-18h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M9 9h6M9 15h6",
  },
];

export const projects: ProjectItem[] = [
  { n: "Northbeam Analytics", tag: "SaaS · Fintech", c1: "#F36B00", c2: "#E8AB00" },
  { n: "Verdant Health OS", tag: "Mobile · Healthcare", c1: "#F09100", c2: "#F36B00" },
  { n: "Lumen Retail Cloud", tag: "E-commerce · Cloud", c1: "#E8AB00", c2: "#F09100" },
  { n: "Atlas Logistics AI", tag: "AI · Enterprise", c1: "#F36B00", c2: "#F09100" },
];

export const processSteps: ProcessStep[] = [
  { n: "01", t: "Discovery", d: "Understand goals & scope" },
  { n: "02", t: "Planning", d: "Roadmap & architecture" },
  { n: "03", t: "Design", d: "Wireframes to UI" },
  { n: "04", t: "Development", d: "Agile sprints" },
  { n: "05", t: "Testing", d: "QA & performance" },
  { n: "06", t: "Deployment", d: "Ship to production" },
  { n: "07", t: "Support", d: "Monitor & improve" },
];

export const techStack: string[] = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Flutter",
  "AWS",
  "Docker",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "OpenAI",
  "Azure",
];

export const testimonials: TestimonialItem[] = [
  {
    q: "ADOPTBYTE rebuilt our platform in twelve weeks with zero downtime. The communication alone was worth the investment.",
    n: "Priya Nathan",
    r: "CTO, Northbeam",
  },
  {
    q: "They think like product owners, not just contractors. Our roadmap moved faster than any previous partner delivered.",
    n: "Marco Lindqvist",
    r: "Founder, Verdant Health",
  },
  {
    q: "Enterprise-grade engineering with startup speed. That combination is genuinely rare.",
    n: "Aisha Bello",
    r: "VP Engineering, Atlas",
  },
];
