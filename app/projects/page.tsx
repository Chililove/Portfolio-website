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
              {/* Live demo button — only shown if the project has a live link. */}
              {project.link && (
                <div style={{ marginTop: "12px" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    View project
                  </a>
                </div>
              )}

              {/* Source-code link, shown beneath, if the project has a repo. */}
              {project.repo && (
                <div style={{ marginTop: "10px" }}>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.9rem" }}
                  >
                    View code on GitHub →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
