import { Link } from "react-router"
import { publications } from "./publicationData"
import PublicationEntry from "./PublicationEntry"

export default function PublicationsPage() {
  return (
    <main className="page-container projects-page" id="publications-page">
      <Link className="projects-back-link" to="/">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5m6-6-6 6 6 6" />
        </svg>
        Back to home
      </Link>

      <header className="projects-page-intro">
        <p className="projects-page-eyebrow">RESEARCH &amp; PUBLICATIONS</p>
        <h1>Publications</h1>
        <p className="projects-page-summary">
          Selected work on clinical knowledge discovery, knowledge
          representation, and computational methods in medicine.
        </p>
      </header>

      <h2 className="publications-list-title" id="selected-publications-title">
        Selected Publications
      </h2>
      <ol
        className="projects-page-grid publications-page-list"
        aria-labelledby="selected-publications-title"
      >
        {publications.map((publication, index) => {
          const label = String(index + 1).padStart(2, "0")

          return (
            <li key={publication.title} id={`publication-${label}`}>
              <PublicationEntry
                entryId={`publication-${label}`}
                title={publication.title}
                details={publication.details}
                figure={publication}
              />
            </li>
          )
        })}
      </ol>
    </main>
  )
}
