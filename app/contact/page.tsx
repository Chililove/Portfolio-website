// =============================================================================
//  CONTACT PAGE  —  lives at "/contact"
// =============================================================================
//  Because this file is at app/contact/page.tsx, Next.js automatically makes
//  it available at the URL "/contact". (Folder name = URL path.)
//
//  The form itself lives in app/components/ContactForm.tsx (a client component)
//  because it needs to run in the browser. This page just shows the heading,
//  intro, and the form inside a card.
// =============================================================================

import { siteContent } from "@/data/siteContent";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const { heading, intro } = siteContent.contactPage;
  const { email } = siteContent.contact;

  return (
    <section className="section">
      <div className="container">
        <h1>{heading}</h1>
        <p>{intro}</p>

        <div className="card" style={{ marginTop: "24px" }}>
          {/* The interactive form that sends email via /api/contact */}
          <ContactForm />

          <p style={{ marginTop: "18px" }}>
            Prefer email? Reach me at{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
