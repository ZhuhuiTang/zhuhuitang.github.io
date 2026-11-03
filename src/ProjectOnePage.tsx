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
            This ongoing project involves collecting and organizing multimodal
            physiological recordings, clinical questionnaires, and outpatient
            records to support research on sleep-related and
            cardio-cerebrovascular conditions.
          </p>
          <p className="project-page-description">
            As a research assistant, I participate in patient-facing data
            collection, survey administration, and physiological signal
            acquisition, as well as data quality checks and preparation for
            downstream analysis.
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
            electroencephalography (EEG), and galvanic skin response (GSR),
            alongside other physiological measurements such as pulse and
            respiration.
          </p>
          <p className="project-page-description">
            My responsibilities also include basic signal preprocessing, data
            organization, and documentation to support subsequent research and
            analysis.
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
          aria-labelledby="project-fieldwork-title"
        >
          <h2 id="project-fieldwork-title">
            Clinical Fieldwork &amp; Questionnaire Design
          </h2>
          <p className="project-page-description">
            I co-designed clinical questionnaires and administered surveys during
            outpatient visits. I also helped organize clinical records and check
            data completeness and consistency to support subsequent research and
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
            with AI-assisted coding. Instead of entering each response manually,
            I read the completed questionnaires aloud, converted my narration
            into text using speech recognition, and used the tool to
            automatically organize the information into structured questionnaire
            fields and generate an individual Excel record for each patient.
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
            I still remember one outpatient session when a patient quietly shared
            that they had recently been through a difficult family situation and
            were feeling emotionally low. As I looked at the monitoring screen,
            I noticed a striking difference between the EEG signals recorded from
            the left and right sides.
          </p>
          <p className="project-page-description">
            I found myself wondering whether this difference could tell me
            anything about what the patient was experiencing. But I also knew
            that such differences could have many explanations and could not be
            interpreted from the screen alone.
          </p>
          <p className="project-page-description">
            That experience left me with a question I still think about:{" "}
            <strong className="font-semibold">
              How much can physiological data really tell us about a person&apos;s
              experience without understanding their personal context?
            </strong>
          </p>
          <p className="project-page-description">
            As data collection continues, a natural next step is to further
            assess signal quality, preprocess physiological recordings, and
            explore relationships between physiological features and clinical
            questionnaire responses. Examining where objective measurements and
            subjective reports align—or differ—may help identify patterns worth
            investigating and reveal where additional context is needed for
            meaningful interpretation.
          </p>
        </section>
      </article>
    </main>
  )
}
