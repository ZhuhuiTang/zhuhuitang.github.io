import { Link } from "react-router"
import SectionAllLink from "./SectionAllLink"
import { useHorizontalCarousel } from "./useHorizontalCarousel"
import { publications } from "./publicationData"

export default function Publications() {
  const { trackRef } = useHorizontalCarousel()

  return (
    <section
      className="publications"
      id="publications"
      aria-labelledby="publications-title"
    >
      <div className="publications-heading">
        <h2 id="publications-title">Publications</h2>
        <SectionAllLink to="/publications" label="publications" />
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
              <h3>
                <Link
                  to={`/publications#publication-${String(index + 1).padStart(2, "0")}`}
                >
                  {publication.title}
                </Link>
              </h3>
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
                {publication.language && (
                  <span className="publication-badge publication-badge--language">
                    {publication.language}
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
