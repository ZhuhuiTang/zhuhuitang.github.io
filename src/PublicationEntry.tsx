import { useState } from "react"
import { Link } from "react-router"
import type { PublicationDetails } from "./publicationData"

interface PublicationEntryProps {
  entryId: string
  title: string
  details?: PublicationDetails
  figure: {
    image: string
    alt: string
    width: number
    height: number
    firstAuthor: boolean
  }
}

export default function PublicationEntry({
  entryId,
  title,
  details,
  figure,
}: PublicationEntryProps) {
  const [summaryOpen, setSummaryOpen] = useState(false)
  const hasSummary = Boolean(details?.researchSummary?.length)
  const metadata = [
    details?.year,
    details?.authorRole,
    details?.type,
    details?.language,
  ]
    .filter(Boolean)
    .join(" · ")
  const titleId = `${entryId}-title`
  const abstractId = `${entryId}-abstract`
  const abstractTitleId = `${entryId}-abstract-title`

  return (
    <article className="publication-entry" aria-labelledby={titleId}>
      <div className="publication-entry-content">
        <header className="publication-entry-heading">
          <p className="publication-entry-metadata publication-entry-kicker">
            {metadata || "PUBLICATION"}
          </p>
          <h2 id={titleId}>{title}</h2>
          {details ? (
            <>
              <p className="publication-entry-metadata">{details.authors}</p>
              <p className="publication-entry-metadata italic">
                {details.journal} · {details.citation}
              </p>
            </>
          ) : (
            <div className="publication-badges">
              <span className="publication-badge publication-badge--published">
                Published
              </span>
              {figure.firstAuthor && (
                <span className="publication-badge publication-badge--author">
                  First author
                </span>
              )}
            </div>
          )}
        </header>

        {details && (
          <>
            <p className="publication-entry-summary">{details.summary}</p>

            <ul
              className="publication-entry-tags"
              aria-label="Publication topics"
            >
              {details.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </>
        )}

        <footer className="publication-entry-actions">
          <button
            className="publication-summary-toggle"
            type="button"
            aria-expanded={summaryOpen}
            aria-controls={abstractId}
            onClick={() => setSummaryOpen((open) => !open)}
          >
            Abstract
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d={summaryOpen ? "m5 15 7-7 7 7" : "m5 9 7 7 7-7"} />
            </svg>
          </button>
          {details?.paper && (
            <a
              className="publication-entry-action"
              href={details.paper.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${details.paper.label}: ${title}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M14 4h6v6m0-6-9 9M10 5H5v14h14v-5" />
              </svg>
              {details.paper.label}
            </a>
          )}
          {details?.relatedProject && (
            <Link
              className="publication-entry-action"
              to={details.relatedProject.href}
              aria-label={`Related Project: ${details.relatedProject.title}`}
            >
              Related Project
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          )}
        </footer>

        <section
          className="publication-entry-abstract"
          id={abstractId}
          aria-labelledby={abstractTitleId}
          hidden={!summaryOpen}
        >
          <h3 id={abstractTitleId}>
            {hasSummary ? "English Research Summary" : "Research Figure"}
          </h3>
          {hasSummary && (
            <div className="publication-entry-abstract-text">
              {details?.researchSummary?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          <figure className="publication-entry-figure">
            <img
              src={figure.image}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              loading="lazy"
            />
          </figure>
          {details?.relatedProject && (
            <div className="publication-entry-related">
              <h3>Related Research Project</h3>
              <p>
                <Link to={details.relatedProject.href}>
                  {details.relatedProject.title}
                </Link>
              </p>
            </div>
          )}
        </section>
      </div>
    </article>
  )
}
