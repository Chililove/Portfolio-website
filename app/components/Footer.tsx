// Footer on every page: contact details and social links.

import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const { email, phone, location, github, linkedin } = siteContent.contact;
  const { note } = siteContent.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Contact details (placeholders for now) */}
        <div className="footer-contact">
          <a href={`mailto:${email}`}>{email}</a>
          <span>{phone}</span>
          <span>{location}</span>
        </div>

        {/* Social links */}
        <div className="footer-contact">
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <p>
          &copy; {year} {siteContent.name}. {note}
        </p>
      </div>
    </footer>
  );
}
