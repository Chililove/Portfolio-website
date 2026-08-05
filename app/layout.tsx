import type { Metadata } from "next";
import "./globals.css";
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
