export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "dribbble";
};

export type ServiceItem = {
  t: string;
  d: string;
  i: string;
};

export type ProjectItem = {
  n: string;
  tag: string;
  c1: string;
  c2: string;
};

export type ProcessStep = {
  n: string;
  t: string;
  d: string;
};

export type TestimonialItem = {
  q: string;
  n: string;
  r: string;
};

export type TrustStat = {
  target: number;
  suffix: string;
  label: string;
};
