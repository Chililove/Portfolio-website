// "What I'm looking for" page (/looking-for): text from siteContent.ts.

import { siteContent } from "@/data/siteContent";
import BackLink from "../components/BackLink";

export default function LookingForPage() {
  const { heading, intro, roles, valuesHeading, values, locationNote } =
    siteContent.lookingPage;

  return (
    <section className="section">
      <div className="container">
        <BackLink />
        <h1>{heading}</h1>
        <p>{intro}</p>

        {/* One card per role/interest */}
        <div className="card-list">
          {roles.map((role) => (
            <article className="card" key={role.title}>
              <h2>{role.title}</h2>
              <p>{role.description}</p>
            </article>
          ))}
        </div>

        {/* A short list of what you value in a team */}
        <h2 className="values-heading">{valuesHeading}</h2>
        <ul className="values-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <p className="location-note">{locationNote}</p>
      </div>
    </section>
  );
}
