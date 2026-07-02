import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ADOPTBYTE — Building Digital Products That Move Businesses Forward",
  description:
    "ADOPTBYTE designs and engineers modern software for startups, enterprises, and ambitious founders — from product strategy to scalable architecture, shipped fast without cutting corners.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI",
    "cloud",
    "SaaS",
    "enterprise software",
  ],
  openGraph: {
    title: "ADOPTBYTE — Building Digital Products That Move Businesses Forward",
    description:
      "ADOPTBYTE designs and engineers modern software for startups, enterprises, and ambitious founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
