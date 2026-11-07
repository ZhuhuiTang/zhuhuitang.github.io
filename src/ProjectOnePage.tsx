import { Link } from "react-router"
import { projects } from "./projects"

const tags = [
  "Physiological Sensing",
  "Clinical Fieldwork",
  "Multimodal Data",
  "Clinical Surveys",
]

export default function ProjectOnePage() {
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
            ONGOING CLINICAL RESEARCH · OCT 2025–PRESENT
          </p>
          <h1>{projects[0].title}</h1>
          <p className="projects-page-summary project-detail-summary">
            Supporting outpatient research through multimodal physiological
            recording, clinical questionnaires, and real-world health data
            collection.
          </p>
          <div className="project-detail-meta">
            <p className="project-role">
              <strong>My Role:</strong> Research Assistant · Institute of
              Information on Traditional Chinese Medicine, China Academy of
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
            src="/assets/project-multimodal-clinical-fieldwork.png"
            alt="Outpatient clinical research setup showing physiological signal recording software on a laptop alongside a printed clinical questionnaire."
            width="1568"
            height="882"
          />
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-overview-title"
        >
          <h2 id="project-overview-title">Overview</h2>
          <p className="project-page-description">
            This ongoing project brings together multimodal physiological
            recordings, clinical questionnaires, and outpatient records to
            support research on sleep-related and cardiovascular health
            conditions.
          </p>
          <p className="project-page-description">
            As a research assistant, I have participated in patient-facing data
            collection, questionnaire administration, physiological signal
            acquisition, and data organization. The available physiological
            recordings have now been exported and processed, and the project has
            progressed to statistical analysis.
          </p>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-recording-title"
        >
          <h2 id="project-recording-title">
            Multimodal Physiological Recording
          </h2>
          <p className="project-page-description">
            I have participated in collecting and organizing physiological
            recordings, including electrocardiography (ECG),
            electroencephalography (EEG), electrodermal measurements, pulse
            waveforms, and respiration.
          </p>
          <p className="project-page-description">
            Through this work, I have gained practical exposure to physiological
            recording procedures, data quality considerations, and the
            challenges of handling heterogeneous signals collected in clinical
            settings.
          </p>
        </section>
        <figure className="project-detail-figure mt-8">
          <img
            src="/assets/project-multimodal-physiological-recording.png"
            alt="Three panels showing physiological recordings: pulse, ECG and heart sounds; EEG recording and frequency bands; and skin conductance, respiration and pulse."
            width="1568"
            height="490"
            loading="lazy"
          />
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-analysis-title"
        >
          <h2 id="project-analysis-title">
            Data Processing &amp; Statistical Analysis
          </h2>
          <p className="project-page-description">
            The project uses an existing MATLAB-based workflow for multimodal
            physiological signal processing. The workflow covers data import and
            timestamp handling, signal preprocessing, quality assessment,
            temporal alignment, and physiological feature extraction.
          </p>
          <p className="project-page-description">
            Working with this workflow has helped me develop a better
            understanding of how raw physiological recordings are transformed
            into structured features for subsequent analysis, including the
            importance of signal quality, processing choices, and cross-modal
            consistency.
          </p>
          <p className="project-page-description">
            The currently available recordings have been exported and processed.
            Statistical analysis is now underway to examine the collected
            physiological and clinical data.
          </p>
          <p className="project-page-description">
            I am particularly interested in how objective physiological
            measurements and patients&apos; subjective reports can be analyzed
            together, and how differences between these sources may inform more
            contextualized interpretations of health.
          </p>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-fieldwork-title"
        >
          <h2 id="project-fieldwork-title">
            Clinical Fieldwork &amp; Questionnaire Design
          </h2>
          <p className="project-page-description">
            I co-designed clinical questionnaires and administered surveys
            during outpatient visits. I also helped organize clinical records
            and check data completeness and consistency to support subsequent
            analysis.
          </p>
        </section>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-workflow-title"
        >
          <h2 id="project-workflow-title">
            Workflow Improvement: Voice-Assisted Questionnaire Digitization
          </h2>
          <p className="project-page-description">
            During clinical data collection, I noticed that transferring
            paper-based questionnaire responses into digital records involved
            repetitive manual work.
          </p>
          <p className="project-page-description">
            To streamline this process, I developed a lightweight web-based tool
            using AI-assisted coding and speech recognition. The workflow
            converts spoken questionnaire responses into text, organizes them
            into predefined questionnaire fields, and exports structured Excel
            records for review.
          </p>
          <p className="project-page-description">
            This experience strengthened my interest in designing practical
            digital tools that address real-world clinical workflow needs.
          </p>
        </section>
        <figure className="project-detail-figure mt-8">
          <img
            src="/assets/project-questionnaire-digitization.png"
            alt="Three-panel view of questionnaire digitization: a paper PSQI sleep questionnaire, a web-based questionnaire entry tool, and structured questionnaire records in Excel."
            width="2172"
            height="724"
            loading="lazy"
          />
        </figure>

        <section
          className="project-page-details mt-12 max-w-4xl md:mt-16"
          aria-labelledby="project-fieldwork-moment-title"
        >
          <h2 id="project-fieldwork-moment-title">
            A Moment from Clinical Fieldwork
          </h2>
          <p className="project-page-description">
            During one outpatient session, a patient described going through a
            difficult period. While observing the physiological monitoring
            display, I found myself wondering how much these recordings could
            tell us about the patient&apos;s experience.
          </p>
          <p className="project-page-description">
            I also recognized that physiological signals alone cannot explain
            what someone is feeling. Their interpretation depends on recording
            conditions, signal quality, clinical context, and the person&apos;s
            own account of their experience.
          </p>
          <p className="project-page-description">
            This observation left me with a question that continues to shape my
            research interests:
          </p>
          <p className="project-page-description">
            <strong className="font-semibold">
              How can physiological measurements and subjective experiences
              complement each other to support a more contextualized
              understanding of health?
            </strong>
          </p>
          <p className="project-page-description">
            As the project progresses through statistical analysis, I hope to
            explore how physiological features and clinical questionnaire
            responses relate to one another, while remaining attentive to
            individual differences and the limitations of physiological
            interpretation.
          </p>
        </section>
      </article>
    </main>
  )
}
