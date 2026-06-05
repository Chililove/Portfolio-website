// =============================================================================
//  HEADER  —  shown at the TOP of every page
// =============================================================================
//  It displays your name (links back to the home page) and a row of contact
//  details. The text comes from data/siteContent.ts, so edit it there.
// =============================================================================

import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const { name } = siteContent;
  const { email, phone, location } = siteContent.contact;

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Clicking the name takes the visitor back to the home page */}
        <Link href="/" className="brand">
          {name}
        </Link>

        {/* The top contact bar (placeholders for now) */}
        <div className="contact-bar">
          <a href={`mailto:${email}`}>{email}</a>
          <span>{phone}</span>
          <span>{location}</span>
        </div>
      </div>
    </header>
  );
}
