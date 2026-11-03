import { useHorizontalCarousel } from "./useHorizontalCarousel"
import { publications } from "./publicationData"

export default function Publications() {
  const { trackRef, edges, scroll } = useHorizontalCarousel()

  return (
    <section
      className="publications"
      id="publications"
      aria-labelledby="publications-title"
    >
      <div className="publications-heading">
        <h2 id="publications-title">Publications</h2>
        <div className="publications-controls">
          <span className="publications-count">
            {publications.length} publications
          </span>
          <button
            type="button"
            disabled={edges.start}
            onClick={() => scroll(-1)}
            aria-label="Previous publications"
            aria-controls="publications-track"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            disabled={edges.end}
            onClick={() => scroll(1)}
            aria-label="Next publications"
            aria-controls="publications-track"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <ul
        className="publications-track"
        id="publications-track"
        ref={trackRef}
        tabIndex={0}
        aria-label={`${publications.length} publications; scroll horizontally to browse`}
      >
        {publications.map((publication, index) => (
          <li
            className="publication-placeholder"
            key={publication.title}
            aria-label={`Publication ${index + 1} of ${publications.length}`}
          >
            <div className="publication-image">
              <img
                src={publication.image}
                alt={publication.alt}
                width={publication.width}
                height={publication.height}
                loading="lazy"
              />
            </div>
            <div className="publication-details">
              <h3>{publication.title}</h3>
              <div className="publication-badges">
                <span className="publication-badge publication-badge--published">
                  Published
                </span>
                {publication.firstAuthor && (
                  <span className="publication-badge publication-badge--author">
                    {publication.details?.authorRole === "Co-First Author"
                      ? "Co-first author"
                      : "First author"}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
