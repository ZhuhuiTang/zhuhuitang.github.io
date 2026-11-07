import { Link } from "react-router"
import { projects } from "./projects"

const tags = [
  "Knowledge Graphs",
  "Interactive Systems",
  "Clinical Informatics",
  "Knowledge Discovery",
]

export default function ProjectTwoPage() {
  return (
    <main className="page-container projects-page project-detail-page">
      <Link className="projects-back-link" to="/projects">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5m6-6-6 6 6 6" />
        </svg>
        Back to projects
      </Link>

      <article>
        <header className="projects-page-intro project-detail-intro">
          <p className="projects-page-eyebrow">
            MASTER&apos;S RESEARCH · COMPLETED 2025
          </p>
          <h1>{projects[1].title}</h1>
          <p className="projects-page-summary project-detail-summary">
            Led the development of an interactive insomnia knowledge system as a
            case study to investigate the feasibility of structuring clinical
            knowledge and comparing practice-derived patterns with established
            medical literature.
          </p>
          <div className="project-detail-meta">
            <p className="project-role">
              <strong>My Role:</strong> Co-Principal Investigator (Co-PI) ·
              Institute of Basic Theory for Chinese Medicine, China Academy of
              Chinese Medical Sciences
            </p>
            <div className="project-detail-topics">
              <ul className="project-tags" aria-label="Project topics">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <figure className="project-detail-figure">
          <img
            src="/assets/project-insomnia-system-interface.png"
            alt="Interactive insomnia knowledge system interface showing clinical record filters, a relationship visualization, and statistical charts."
            width="830"
            height="405"
          />
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-overview-title"
        >
          <h2 id="project-two-overview-title">
            Research Motivation &amp; Overview
          </h2>
          <p className="project-page-description">
            Clinical case records capture how physicians describe symptoms,
            identify diagnostic patterns, and select treatments in practice. Yet
            these experiences are scattered across individual narratives, while
            textbooks and classical literature summarize knowledge into more
            established theoretical accounts.
          </p>
          <p className="project-page-description">
            We first proposed a methodological approach:{" "}
            <strong className="font-semibold">
              extract patterns from documented clinical practice and compare them
              with existing domain knowledge
            </strong>
            . To examine whether this approach could be put into practice, we
            selected{" "}
            <strong className="font-semibold">
              insomnia cases documented in traditional Chinese medicine (TCM)
            </strong>{" "}
            as a case study and developed a{" "}
            <strong className="font-semibold">
              knowledge graph and interactive platform
            </strong>{" "}
            to support the analysis.
          </p>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-contributions-title"
        >
          <h2 id="project-two-contributions-title">
            My Role &amp; Contributions
          </h2>
          <p className="project-page-description">
            As Co-Principal Investigator (Co-PI), I worked closely with my
            faculty advisor throughout the project, from research conception and
            proposal development to study implementation and analysis. I took
            primary responsibility for preparing the project proposal and funding
            application and led the main implementation of the insomnia case
            study.
          </p>
          <ol className="mt-2 w-full space-y-6">
            <li>
              <h3 className="project-page-description font-semibold">
                01 · Research Design &amp; Project Planning
              </h3>
              <p className="project-page-description mt-2">
                Prepared the project proposal and funding application, and
                co-developed the study framework, including methodological
                planning, clinical case selection criteria, and the strategy for
                comparing case-derived patterns with established domain knowledge.
              </p>
            </li>
            <li>
              <h3 className="project-page-description font-semibold">
                02 · Clinical Knowledge Engineering
              </h3>
              <p className="project-page-description mt-2">
                Led clinical case processing, terminology standardization,
                knowledge representation design, and knowledge graph construction,
                transforming narrative medical records into structured and
                explorable clinical knowledge.
              </p>
            </li>
            <li>
              <h3 className="project-page-description font-semibold">
                03 · Interactive System Design &amp; Implementation
              </h3>
              <p className="project-page-description mt-2">
                Led the design and implementation of knowledge-exploration
                workflows and visualization modules, enabling researchers to
                navigate clinical relationships, examine association patterns,
                and compare findings across different knowledge representations.
              </p>
            </li>
            <li>
              <h3 className="project-page-description font-semibold">
                04 · Research Analysis &amp; Evaluation
              </h3>
              <p className="project-page-description mt-2">
                Conducted case-based analyses and literature comparisons to
                assess the feasibility of the proposed methodology and
                critically examine the interpretation and limitations of observed
                clinical associations.
              </p>
            </li>
          </ol>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-structured-knowledge-title"
        >
          <h2 id="project-two-structured-knowledge-title">
            From Clinical Cases to Structured Knowledge
          </h2>
          <p className="project-page-description">
            Starting from{" "}
            <strong className="font-semibold">
              976 insomnia-related case records
            </strong>
            , we applied eligibility criteria and preprocessing steps, retaining{" "}
            <strong className="font-semibold">
              296 records for the final analysis
            </strong>
            .
          </p>
          <p className="project-page-description">
            I organized information into analyzable fields and developed{" "}
            <strong className="font-semibold">
              terminology dictionaries grounded in the source cases
            </strong>
            , including 330 symptom terms and 75 standardized TCM syndrome terms.
          </p>
          <p className="project-page-description">
            We then constructed a{" "}
            <strong className="font-semibold">
              knowledge graph linking diseases, symptoms, TCM syndromes, and
              herbal medicines
            </strong>
            , enabling relationships documented across individual cases to be
            represented and explored systematically.
          </p>
        </section>

        <figure className="mt-8">
          <div className="project-detail-figure">
            <img
              src="/assets/project-insomnia-knowledge-workflow.png"
              alt="Workflow from insomnia clinical case screening and preprocessing to ontology design, dictionary-based knowledge extraction, knowledge integration, and knowledge graph construction."
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed italic">
            Figure 1. Workflow for transforming clinical case records into
            structured knowledge through terminology-based extraction, knowledge
            integration, and graph construction.
          </figcaption>
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-exploration-title"
        >
          <h2 id="project-two-exploration-title">
            Interactive Knowledge Exploration
          </h2>
          <p className="project-page-description">
            To make structured clinical knowledge accessible for exploratory
            research, I led the design and implementation of a researcher-facing
            web interface for navigating relationships extracted from clinical
            case records.
          </p>
          <p className="project-page-description">
            The system supports multiple exploration pathways across diseases,
            symptoms, TCM syndromes, and herbal medicines, combining interactive
            node-link graphs, association charts, searchable views, and
            adjustable filtering thresholds.
          </p>
          <div className="mt-2 w-full space-y-4">
            <h3 className="project-page-description font-semibold">
              Disease-Centered Exploration
            </h3>
            <p className="project-page-description">
              Researchers can explore different relationship pathways, including
              disease–syndrome–symptom, disease–symptom–syndrome,
              disease–syndrome–herbal medicine, and
              disease–herbal medicine–syndrome. These interactive views support
              the examination and comparison of patterns documented across
              clinical cases.
            </p>
          </div>
          <div className="mt-4 w-full space-y-4">
            <h3 className="project-page-description font-semibold">
              Custom-Formula Exploration
            </h3>
            <p className="project-page-description">
              Researchers can specify herbal combinations and explore their
              relationships with documented symptoms, syndromes, and associated
              herbal medicines. The module integrates knowledge graph
              visualization and frequency-based charts to support the exploration
              of formula-related patterns.
            </p>
          </div>
          <p className="project-page-description">
            Together, these functions enable researchers to systematically
            explore, compare, and interpret clinical relationships through
            interactive knowledge representations.
          </p>
        </section>

        <figure className="mt-8">
          <div className="project-detail-figure">
            <img
              src="/assets/project-insomnia-wendan-exploration.png"
              alt="Original Chinese interface exploring Wendan Decoction in insomnia cases, with formula composition, associated symptoms and syndromes, frequency charts, and a relationship graph."
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed italic">
            Figure 2. Interactive exploration of a selected herbal formula
            (Wendan Decoction) in documented insomnia cases, showing formula
            composition, associated symptoms and syndromes, and frequency-based
            visualizations.
          </figcaption>
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-comparison-title"
        >
          <h2 id="project-two-comparison-title">
            Feasibility Assessment &amp; Research Insights
          </h2>
          <div className="mt-2 w-full space-y-4">
            <h3 className="project-page-description font-semibold">
              Feasibility Assessment
            </h3>
            <p className="project-page-description">
              Building on a methodological framework proposed in an earlier
              first-author paper, we used insomnia clinical cases to{" "}
              <strong className="font-semibold">
                explore the feasibility of structuring practice-derived
                knowledge and comparing it with established domain knowledge
              </strong>
              .
            </p>
            <p className="project-page-description">
              The case study demonstrated a workable process for knowledge
              extraction, graph construction, interactive exploration, and
              literature-based comparison. Several observed associations broadly
              aligned with existing TCM descriptions, providing preliminary
              support for this exploratory approach.
            </p>
          </div>
          <div className="mt-4 w-full space-y-4">
            <h3 className="project-page-description font-semibold">
              Research Insights
            </h3>
            <ol className="space-y-6">
              <li>
                <h4 className="project-page-description font-semibold">
                  01 · Representing Knowledge
                </h4>
                <p className="project-page-description mt-2">
                  I learned how to transform fragmented clinical records into{" "}
                  <strong className="font-semibold">
                    structured, explorable knowledge
                  </strong>
                  , making relationships across individual cases easier to
                  examine.
                </p>
              </li>
              <li>
                <h4 className="project-page-description font-semibold">
                  02 · Understanding Evidence
                </h4>
                <p className="project-page-description mt-2">
                  Making associations visible does not necessarily explain their
                  underlying mechanisms. This highlighted the importance of{" "}
                  <strong className="font-semibold">
                    evidence quality, interpretability, and uncertainty
                  </strong>{" "}
                  when working with clinical data.
                </p>
              </li>
              <li>
                <h4 className="project-page-description font-semibold">
                  03 · Toward Supporting Action
                </h4>
                <p className="project-page-description mt-2">
                  This experience led me to look beyond knowledge visualization
                  and consider how{" "}
                  <strong className="font-semibold">
                    interpretable health information could support meaningful
                    decisions, personalized feedback, and practical health
                    actions
                  </strong>
                  .
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-two-outputs-title"
        >
          <h2 id="project-two-outputs-title">Research Outputs</h2>
          <div className="mt-2 w-full space-y-6">
            <div className="space-y-2">
              <h3 className="project-page-description font-semibold">
                Master&apos;s Thesis · 2025
              </h3>
              <p className="project-page-description">
                <em>
                  A Study on Knowledge Discovery Methodology Based on Knowledge
                  Graph of Traditional Chinese Medicine Records for Insomnia
                </em>
              </p>
              <p className="project-page-description">
                China Academy of Chinese Medical Sciences
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="project-page-description font-semibold">
                Software Copyright
              </h3>
              <p className="project-page-description">
                <em>
                  Intelligent Knowledge System for Insomnia Management (V1.0)
                </em>
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
