// Contact page (/contact): heading, intro, and the contact form.

import { siteContent } from "@/data/siteContent";
import ContactForm from "../components/ContactForm";
import BackLink from "../components/BackLink";

export default function ContactPage() {
  const { heading, intro } = siteContent.contactPage;
  const { email } = siteContent.contact;

  return (
    <section className="section">
      <div className="container">
        <BackLink />
        <h1>{heading}</h1>
        <p>{intro}</p>

        <div className="card contact-card">
          {/* The interactive form that sends email via /api/contact */}
          <ContactForm />

          <p className="contact-alt">
            Prefer email? Reach me at{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
