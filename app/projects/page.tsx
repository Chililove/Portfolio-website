// =============================================================================
//  PROJECTS PAGE  —  lives at "/projects"
// =============================================================================
//  This page loops over the list of projects in data/siteContent.ts and shows
//  one card per project. To add a project, just add another {} block to the
//  `projects` array in that file — this page updates automatically.
// =============================================================================

import { siteContent } from "@/data/siteContent";

export default function ProjectsPage() {
  const { heading, intro, projects } = siteContent.projectsPage;

  return (
    <section className="section">
      <div className="container">
        <h1>{heading}</h1>
        <p>{intro}</p>

        <div style={{ marginTop: "24px" }}>
          {/* .map() draws one card for each project in the list. */}
          {projects.map((project, index) => (
            <article className="card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="button button-outline"
                style={{ marginTop: "10px" }}
              >
                View project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
