const interests = [
  {
    title: "Digital Phenotyping",
    description:
      "Exploring how wearable sensors and mobile data can capture everyday physiological and behavioral patterns related to sleep, stress, and well-being.",
    topics: "Wearable Sensing · Multimodal Data",
  },
  {
    title: "Personal Health Informatics",
    description:
      "Designing human-centered ways to integrate physiological signals, self-reports, and personal context to support health reflection and self-management.",
    topics: "Human-Computer Interaction · Self-Management",
  },
  {
    title: "Explainable AI in Healthcare",
    description:
      "Exploring interpretable, evidence-grounded AI feedback that helps people understand, question, and use personal health information.",
    topics: "Interpretability · Knowledge Representation",
  },
  {
    title: "Personalized Digital Health Interventions",
    description:
      "Investigating how adaptive feedback and timely support can help people take meaningful action for mental well-being and long-term health management.",
    topics: "Adaptive Feedback · JITAIs",
  },
]

function InterestIcon({ index }: { index: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {index === 0 && (
        <>
          <rect x="4" y="3" width="16" height="18" rx="4" />
          <path d="M2 12h5l3-4 4 8 3-4h5" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          <path d="M3 12h4l2-4 4 8 2-4h6" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M10 4a3 3 0 0 0-5 2 3 3 0 0 0-2 5 3 3 0 0 0 0 5 3 3 0 0 0 2 4 3 3 0 0 0 5 0V4ZM10 8H7m3 8H7m8-10h3m-5 6h7m-7 6h5M15 3v5m3 8v5" />
          <circle cx="20" cy="12" r="1" />
        </>
      )}
      {index === 3 && (
        <>
          <path d="M20 4v5h-5M4 20v-5h5M4.9 9a7.5 7.5 0 0 1 12.4-4L20 9M4 15l2.7 4A7.5 7.5 0 0 0 19.1 15" />
        </>
      )}
    </svg>
  )
}

export default function ResearchInterests() {
  return (
    <section
      className="research-interests pt-14"
      id="research"
      aria-labelledby="interests-title"
    >
      <div className="space-y-6">
        <h2
          className="font-['Inter:Bold'] text-[clamp(1.3rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[0.16em] text-[#3c2b2b]"
          id="interests-title"
        >
          RESEARCH INTERESTS
        </h2>
        <div
          aria-hidden="true"
          className="h-[3px] w-[60px] rounded-full bg-[rgba(201,112,95,0.5)]"
        />
        <ol className="research-interests-grid">
          {interests.map((interest, index) => (
            <li className="research-interest-card" key={interest.title}>
              <div className="research-interest-meta" aria-hidden="true">
                <InterestIcon index={index} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{interest.title}</h3>
              <p className="research-interest-description">
                {interest.description}
              </p>
              <p className="research-interest-topics">{interest.topics}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
