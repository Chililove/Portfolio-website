// Projects page (/projects): one card per project from siteContent.ts.

import { siteContent } from "@/data/siteContent";
import BackLink from "../components/BackLink";

export default function ProjectsPage() {
  const { heading, intro, projects } = siteContent.projectsPage;

  return (
    <section className="section">
      <div className="container">
        <BackLink />
        <h1>{heading}</h1>
        <p>{intro}</p>

        <div className="card-list">
          {/* .map() draws one card for each project in the list. */}
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {/* Live demo button, only shown if the project has a live link. */}
              {project.link && (
                <div className="project-actions">
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
                <div className="project-repo-link">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
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
