// =============================================================================
//  "WHAT I'M LOOKING FOR" PAGE  —  lives at "/looking-for"
// =============================================================================
//  This page tells recruiters the kind of roles and teams you're interested in.
//  All text comes from the `lookingPage` section of data/siteContent.ts, so you
//  can edit it there without touching this file.
// =============================================================================

import { siteContent } from "@/data/siteContent";

export default function LookingForPage() {
  const { heading, intro, roles, valuesHeading, values, locationNote } =
    siteContent.lookingPage;

  return (
    <section className="section">
      <div className="container">
        <h1>{heading}</h1>
        <p>{intro}</p>

        {/* One card per role/interest */}
        <div style={{ marginTop: "24px" }}>
          {roles.map((role, index) => (
            <article className="card" key={index}>
              <h2>{role.title}</h2>
              <p>{role.description}</p>
            </article>
          ))}
        </div>

        {/* A short list of what you value in a team */}
        <h2 style={{ marginTop: "32px" }}>{valuesHeading}</h2>
        <ul style={{ marginTop: "8px", paddingLeft: "20px", color: "var(--color-text-muted)" }}>
          {values.map((value, index) => (
            <li key={index} style={{ marginBottom: "6px" }}>
              {value}
            </li>
          ))}
        </ul>

        <p style={{ marginTop: "24px", fontWeight: 600, color: "var(--color-text)" }}>
          {locationNote}
        </p>
      </div>
    </section>
  );
}
