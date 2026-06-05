// =============================================================================
//  ROOT LAYOUT  —  the "frame" wrapped around EVERY page
// =============================================================================
//  In Next.js (App Router), this file wraps all pages. Anything you put here
//  (like the Header and Footer) appears on every page automatically.
//  The {children} below is where each individual page gets inserted.
// =============================================================================

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteContent } from "@/data/siteContent";

// This sets the browser tab title and description (good for sharing/SEO).
export const metadata: Metadata = {
  title: `${siteContent.name} — ${siteContent.role}`,
  description: siteContent.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
