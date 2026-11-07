import { Link } from "react-router"
import "./ResearchPage.css"

const principles = [
  {
    title: "Contextual & Multimodal Health Data",
    description:
      "Health experiences are rarely captured by a single measurement. I am interested in how physiological signals, clinical records, and self-reports can complement one another, while accounting for data quality, individual differences, and everyday context.",
  },
  {
    title: "Interpretable & Trustworthy Health AI",
    description:
      "Collecting or analyzing health data is only part of the challenge. I want to explore how complex health information can be represented and explained in ways that make the supporting evidence, limitations, and uncertainty clear, rather than presenting predictions as definitive answers.",
  },
  {
    title: "Human-Centered Interaction & Support",
    description:
      "I am interested in how people interact with health AI systems: how they express concerns, contribute personal context, question interpretations, and reflect on feedback. I hope to explore forms of interaction and support that respect user autonomy and help people make informed decisions.",
  },
]

function ResearchBackArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  )
}

export default function ResearchPage() {
  return (
    <main
      className="page-container projects-page research-perspective-page"
      aria-labelledby="research-perspective-title"
    >
      <Link className="projects-back-link" to="/">
        <ResearchBackArrow />
        Back to home
      </Link>

      <header className="projects-page-intro research-perspective-hero">
        <h1 id="research-perspective-title">Research Perspective</h1>
        <p className="research-perspective-subtitle">
          From Sensing to Understanding and Action.
        </p>
        <p className="research-perspective-background">
          I am interested in how human-centered AI can bring together
          physiological sensing, clinical knowledge, and personal experiences to
          make health information more understandable, meaningful, and
          actionable.
        </p>
      </header>

      <section
        className="research-perspective-section"
        aria-labelledby="research-guidance-title"
      >
        <header className="research-perspective-section-heading">
          <h2 id="research-guidance-title">What Guides My Research</h2>
        </header>

        <ol className="research-perspective-principles" role="list">
          {principles.map((principle, index) => (
            <li
              className="research-perspective-principle"
              key={principle.title}
            >
              <h3>
                <span className="research-perspective-number">
                  {String(index + 1).padStart(2, "0")} —
                </span>{" "}
                <span className="research-perspective-principle-title">
                  {principle.title}
                </span>
              </h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="research-perspective-section research-perspective-background-section"
        aria-labelledby="research-background-title"
      >
        <header className="research-perspective-section-heading">
          <h2 id="research-background-title">What Shaped This Perspective</h2>
        </header>

        <div className="research-perspective-story">
          <h3>From Clinical Experience to Research Exploration</h3>
          <div className="research-perspective-story-copy">
            <p>
              My research perspective has evolved through{" "}
              <strong>
                clinical practice, medical informatics, and multimodal
                physiological sensing
              </strong>
              . These experiences have led me to think more deeply about how
              complex health information can be connected with{" "}
              <strong>human understanding and everyday needs</strong>.
            </p>
          </div>
        </div>

        <div className="research-perspective-exploration">
          <h3>An Early Systems-Level Exploration</h3>
          <div className="research-perspective-story-copy">
            <p>
              My early research exploration began with an ambitious idea:
              bringing{" "}
              <strong>
                multimodal sensing, knowledge representation, explainable
                reasoning, and interactive feedback
              </strong>{" "}
              together into an integrated health AI framework.
            </p>
            <p>
              The diagram below captures that initial thinking. While it helped
              me connect different areas of research, it also made me realize
              that{" "}
              <strong>
                building an entire system is not the same as defining a focused,
                testable research question
              </strong>
              .
            </p>
            <p>
              Over time, my interests have become more focused on how{" "}
              <strong>
                sensor data, personal experiences, and everyday context
              </strong>{" "}
              can complement one another, how complex information can become{" "}
              <strong>interpretable</strong>, and how human–AI interaction can
              support <strong>meaningful feedback and informed action</strong>.
            </p>
            <p>
              I see this early framework not as a finalized research proposal,
              but as{" "}
              <strong>
                a starting point that continues to shape how I think about
                human-centered health AI
              </strong>
              .
            </p>
          </div>

          <figure className="research-perspective-framework">
            <div className="research-perspective-framework-image">
              <img
                src="/assets/research-early-conceptual-framework.png"
                alt="Early exploratory health AI framework connecting multimodal data collection, a reasoning core, interaction and outputs, and governance and evaluation; not an implemented or validated system."
                aria-describedby="research-framework-note"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="research-perspective-framework-caption">
              <p id="research-framework-note">
                <em>
                  Early conceptual framework — an exploratory research sketch,
                  not an implemented or validated system.
                </em>
              </p>
              <a
                className="projects-back-link research-perspective-framework-link"
                href="/assets/research-early-conceptual-framework.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full-size diagram (opens in a new tab)"
              >
                View full-size diagram
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M14 4h6v6m0-6-9 9M10 5H5v14h14v-5" />
                </svg>
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}
