import SidebarContact from "./SidebarContact"
import Publications from "./Publications"
import HobbiesVolunteering from "./HobbiesVolunteering"
import ResearchInterests from "./ResearchInterests"
import { useHorizontalCarousel } from "./useHorizontalCarousel"
import { Link } from "react-router"
import { projects } from "./projects"
import SectionAllLink from "./SectionAllLink"

export default function App() {
  const { trackRef } = useHorizontalCarousel()

  return (
    <div className="min-h-screen bg-white text-[#8a6b6b]">
      <main className="page-container profile-layout" id="home">
        <aside className="profile-sidebar" aria-label="Personal information">
          <div className="flex flex-col gap-7">
            <img
              src="/assets/zhuhui-tang-portrait.jpg"
              alt="Zhuhui Tang wearing a graduation cap and gown"
              className="aspect-[312/376] w-full rounded-lg border-[3px] border-[#e0d4cc] object-cover object-top"
              width="1080"
              height="1440"
            />

            <div>
              <p className="font-['Inter:Semi_Bold'] text-[13px] font-semibold tracking-[3px] text-[#c9705f]">
                HELLO, I&apos;M
              </p>
              <h1 className="mt-2 font-['Inter:Bold'] text-[30px] leading-tight font-bold tracking-[-0.02em] text-[#3c2b2b]">
                Zhuhui TANG
              </h1>
              <p className="mt-3 font-['Inter:Regular'] text-[15px] leading-6 text-[#4d5259]">
                Research Assistant
              </p>
              <p className="font-['Inter:Semi_Bold'] text-[15px] leading-6 font-semibold text-[#3c2b2b]">
                China Academy of Chinese Medical Sciences
              </p>
            </div>

            <SidebarContact />
          </div>
        </aside>

        <div className="profile-content">
          <section id="about">
            <h2 className="font-['Inter:Bold'] text-[clamp(2.25rem,4vw,3rem)] leading-tight font-bold tracking-[-0.03em] text-[#3c2b2b]">
              About Me
            </h2>
            <p className="mt-7 font-['Inter:Regular'] text-[17px] leading-[32px] font-normal">
              I am a researcher with a background in clinical medicine and
              medical informatics, exploring how AI, physiological sensing, and
              human-centered approaches can make health data more interpretable,
              contextual, and useful to people.
            </p>
          </section>

          <section aria-labelledby="journey-title" className="pt-14" id="work">
            <div className="space-y-6">
              <h2
                className="font-['Inter:Bold'] text-[clamp(1.3rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[0.16em] text-[#3c2b2b]"
                id="journey-title"
              >
                MY RESEARCH JOURNEY
              </h2>
              <p className="font-['Inter:Light'] text-[17px] font-light text-[#c9705f]">
                From clinical questions to computational health research.
              </p>
              <div
                aria-hidden="true"
                className="h-[3px] w-[60px] rounded-full bg-[rgba(201,112,95,0.5)]"
              />
              <div className="space-y-[10px] font-['Inter:Regular'] text-[18px] leading-[30px] font-normal">
                <p>
                  My research path began in clinical medicine, where I became
                  interested in how complex patient experiences can be recorded,
                  structured, and translated into useful evidence. During my
                  master&apos;s training in medical informatics, I worked with
                  real-world{" "}
                  <strong className="font-['Inter:Semi_Bold'] font-semibold">
                    clinical records
                  </strong>{" "}
                  and{" "}
                  <strong className="font-['Inter:Semi_Bold'] font-semibold">
                    knowledge graphs
                  </strong>
                  , including an{" "}
                  <Link
                    className="text-[#c9705f] underline underline-offset-2"
                    to="/projects/interactive-insomnia-knowledge-system"
                  >
                    insomnia knowledge-discovery platform
                  </Link>
                  .
                </p>
                <p>
                  More recently, my work has expanded to clinical surveys and{" "}
                  <strong className="font-['Inter:Semi_Bold'] font-semibold">
                    multimodal physiological sensing
                  </strong>
                  , including ECG, EEG, and GSR. These experiences have
                  gradually shifted my attention from simply identifying
                  patterns in health data toward broader questions about how
                  computational systems can make those patterns understandable,
                  contextual, and useful to people.
                </p>
                <p>
                  I am currently exploring these questions through AI, sensing
                  technologies, and{" "}
                  <strong className="font-['Inter:Semi_Bold'] font-semibold">
                    human-centered approaches
                  </strong>{" "}
                  to digital health as I prepare for PhD study.
                </p>
              </div>
            </div>
          </section>

          <section
            className="phd-application"
            aria-labelledby="phd-application-title"
          >
            <div className="phd-application-heading">
              <h2 id="phd-application-title">PhD Application</h2>
              <span className="phd-application-term">Fall 2027</span>
            </div>
            <p>
              I am currently exploring PhD opportunities for Fall 2027. I would
              be grateful for opportunities to connect with researchers and
              discuss potential PhD positions or research collaborations.
            </p>
            <p className="phd-application-file-note">
              Self-introduction slides coming soon.
            </p>
          </section>
        </div>

        <ResearchInterests />

        <section
          className="col-span-full min-w-0"
          id="news"
          aria-labelledby="news-title"
        >
          <div className="space-y-6">
            <div className="news-heading">
              <h2
                className="font-['Inter:Bold'] text-[clamp(1.3rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[0.16em] text-[#3c2b2b]"
                id="news-title"
              >
                NEWS &amp; UPDATES
              </h2>
              <a className="news-all-link" href="#news-list">
                All news
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18 18 6M7 6h11v11" />
                </svg>
              </a>
            </div>
            <div
              aria-hidden="true"
              className="h-[3px] w-[60px] rounded-full bg-[rgba(201,112,95,0.5)]"
            />
            <ol
              id="news-list"
              className="scroll-mt-28 space-y-6 font-['Inter:Regular'] text-[18px] leading-[30px] font-normal"
            >
              <li>
                <p>
                  <time
                    dateTime="2026-05"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2026-05]
                  </time>{" "}
                  Entering paper questionnaires into Excel can easily introduce
                  all kinds of errors. To improve efficiency and reduce
                  mistakes, I independently designed and built a small tool to
                  assist with the data-entry process!
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2026-03"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2026-03]
                  </time>{" "}
                  I contributed to and helped push forward interview-style
                  questionnaire sessions for about 100 participants—a truly
                  rewarding experience. It deepened my understanding of clinical
                  settings, communication in the field, and data quality!
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2025-12"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2025-12]
                  </time>{" "}
                  Several TCM wellness books that I contributed to as a credited
                  text editor have been officially published—so happy (It was
                  also great training in knowledge curation and clear writing.)
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2025-11"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2025-11]
                  </time>{" "}
                  Under my supervisor&apos;s guidance, I helped complete and
                  iteratively refine the questionnaire/interview workflow, and
                  we eventually shaped a survey that better fits real clinical
                  contexts and is much more actionable.
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2025-10"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2025-10]
                  </time>{" "}
                  I began a Research Assistant (RA) role jointly run by Beijing
                  University of Chinese Medicine and the Institute of
                  Information on Traditional Chinese Medicine, China Academy of
                  Chinese Medical Sciences, entering research workflows around
                  clinical cohorts and multimodal physiological data.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <Publications />
        <section
          className="projects"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="projects-heading">
            <h2 id="projects-title">Projects</h2>
            <SectionAllLink to="/projects" label="projects" />
          </div>
          <ul
            className="projects-track"
            id="projects-track"
            ref={trackRef}
            tabIndex={0}
            aria-label={`${projects.length} projects; scroll horizontally to browse`}
          >
            {projects.map((project, index) => {
              const destination =
                index < 2
                  ? `/projects/${project.id}`
                  : `/projects#${project.id}`
              return (
                <li
                  className="publication-placeholder project-placeholder"
                  key={project.id}
                  aria-label={project.title}
                >
                  <Link to={destination}>
                    <img
                      className="project-cover"
                      src={project.image}
                      alt={project.alt}
                      width="1448"
                      height="1086"
                      loading="lazy"
                    />
                  </Link>
                  <div className="project-details">
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title" title={project.title}>
                      <Link to={destination}>{project.title}</Link>
                    </h3>
                    <p className="project-role">{project.role}</p>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags" aria-label="Project topics">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <Link
                      className="project-view"
                      to={destination}
                      aria-label={`View Project: ${project.title}`}
                    >
                      View Project
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18 18 6M7 6h11v11" />
                      </svg>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <HobbiesVolunteering />
      </main>
    </div>
  )
}
