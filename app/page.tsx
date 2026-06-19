// =============================================================================
//  HOME PAGE  —  this is what visitors see at "/" (the front page)
// =============================================================================
// =============================================================================

import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function HomePage() {
  const {
    heading,
    intro,
    contactButtonLabel,
    projectsButtonLabel,
    lookingButtonLabel,
  } = siteContent.home;

  return (
    <section className="section hero">
      <div className="container">
        <p className="eyebrow">{siteContent.role}</p>
        <h1>{heading}</h1>
        <p>{intro}</p>

        {/* The two buttons. Link is Next.js's way of moving between pages. */}
        <div className="button-row">
          <Link href="/contact" className="button button-primary">
            {contactButtonLabel}
          </Link>
          <Link href="/projects" className="button button-outline">
            {projectsButtonLabel}
          </Link>
          <Link href="/looking-for" className="button button-outline">
            {lookingButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
