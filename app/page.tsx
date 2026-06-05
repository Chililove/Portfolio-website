// =============================================================================
//  HOME PAGE  —  this is what visitors see at "/" (the front page)
// =============================================================================
//  It shows a short intro and the two buttons:
//    1) "Contact me"   -> goes to the /contact page
//    2) "View projects" -> goes to the /projects page
//  The contact details at the very top and very bottom come from the Header
//  and Footer (added automatically in app/layout.tsx).
// =============================================================================

import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function HomePage() {
  const { heading, intro, contactButtonLabel, projectsButtonLabel } =
    siteContent.home;

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
        </div>
      </div>
    </section>
  );
}
