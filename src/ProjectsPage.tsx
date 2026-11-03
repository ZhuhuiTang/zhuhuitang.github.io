import { Link } from "react-router"
import { projects } from "./projects"

export default function ProjectsPage() {
  return (
    <main className="page-container projects-page" id="projects-page">
      <Link className="projects-back-link" to="/">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5m6-6-6 6 6 6" />
        </svg>
        Back to home
      </Link>
      <header className="projects-page-intro">
        <p className="projects-page-eyebrow">RESEARCH &amp; PRACTICE</p>
        <h1>Projects</h1>
        <p className="projects-page-summary">
          My projects span clinical knowledge engineering and multimodal
          physiological sensing, shaping my research direction toward
          interpretable, human-centered AI for health.
        </p>
      </header>

      <div className="projects-page-grid">
        {projects.map((project, index) => (
          <article
            className="project-page-card"
            id={project.id}
            key={project.id}
          >
            <div className="project-page-image">
              {index < 2 ? (
                <Link to={`/projects/${project.id}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </Link>
              ) : (
                <img src={project.image} alt={project.alt} loading="lazy" />
              )}
            </div>
            <div className="project-page-details">
              <div className="project-page-meta">
                <p className="project-category">{project.category}</p>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2>
                {index < 2 ? (
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="project-page-description">{project.description}</p>
              <p className="project-role">{project.role}</p>
              <ul className="project-tags" aria-label="Project topics">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {index < 2 && (
                <Link className="project-view" to={`/projects/${project.id}`}>
                  View Project
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18 18 6M7 6h11v11" />
                  </svg>
                </Link>
              )}
            </div>
          </article>
        ))}
        <div
          className="project-page-placeholder"
          aria-label="Fifth project, content pending"
        >
          <div
            className="project-page-image publication-image-placeholder"
            aria-hidden="true"
          />
          <div className="publication-text-placeholder" aria-hidden="true">
            <span />
            <span />
            <span className="publication-meta-placeholder" />
          </div>
        </div>
      </div>
    </main>
  )
}
