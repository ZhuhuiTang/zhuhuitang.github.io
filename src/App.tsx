import ContactFooter from "./ContactFooter"
import SidebarContact from "./SidebarContact"
import Publications from "./Publications"
import HobbiesVolunteering from "./HobbiesVolunteering"
import ResearchInterests from "./ResearchInterests"
import { Link } from "react-router"
import { projects } from "./projects"
import SectionAllLink from "./SectionAllLink"

export default function App() {
  const homeProjects = projects.slice(0, 3)

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
              I am currently a Research Assistant at the China Academy of
              Chinese Medical Sciences, with a background in clinical medicine
              and medical informatics. My research interests lie in
              human-centered AI for health, particularly how physiological
              sensing, clinical knowledge, and self-reported experiences can be
              integrated to make health information more interpretable,
              context-aware, and actionable.
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
              <p className="font-['Inter:Light'] text-[17px] font-light text-[#c9705f] italic">
                From clinical questions to computational health research.
              </p>
              <div
                aria-hidden="true"
                className="h-[3px] w-[60px] rounded-full bg-[rgba(201,112,95,0.5)]"
              />
              <div className="space-y-[10px] font-['Inter:Regular'] text-[18px] leading-[30px] font-normal">
                <p>
                  My research journey began in clinical medicine, where I became
                  interested in how complex patient experiences could be
                  recorded, structured, and translated into useful evidence.
                  During my master&apos;s research, I worked with real-world
                  clinical records and knowledge graphs, including an{" "}
                  <Link
                    className="font-semibold text-[#c9705f] underline underline-offset-2"
                    to="/projects/interactive-insomnia-knowledge-system"
                  >
                    insomnia knowledge-discovery platform
                  </Link>
                  .
                </p>
                <p>
                  More recently, my work has expanded through a{" "}
                  <Link
                    className="font-semibold text-[#c9705f] underline underline-offset-2"
                    to="/projects/multimodal-physiological-sensing"
                  >
                    multimodal physiological sensing and clinical workflow
                    project
                  </Link>
                  , involving ECG, EEG, electrodermal measurements, and clinical
                  questionnaires. I have also developed a lightweight tool to
                  help digitize questionnaire responses. These experiences have
                  gradually shifted my attention from collecting and organizing
                  health data toward understanding how physiological
                  measurements and patients&apos; subjective experiences can
                  inform one another.
                </p>
                <p>
                  I am now particularly interested in how physiological
                  sensing, clinical knowledge, and self-reported experiences
                  can be brought together to make health information more
                  interpretable, contextualized, and actionable. This is the
                  direction I hope to explore further through PhD research.
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
                    dateTime="2026-11"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2026-11]
                  </time>{" "}
                  I launched my personal academic website to share my{" "}
                  <strong>
                    research journey, selected projects, and evolving interests
                  </strong>{" "}
                  in human-centered AI and digital health.
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2026-05"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2026-05]
                  </time>{" "}
                  After noticing how easily errors can occur when entering
                  paper-based clinical questionnaires into Excel, I
                  independently designed and built a{" "}
                  <strong>lightweight data-entry tool</strong> to streamline the
                  process and help reduce mistakes.
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
                  I contributed to{" "}
                  <strong>
                    interview-based questionnaire data collection involving
                    approximately 100 participants
                  </strong>
                  , building on earlier work to refine the survey and interview
                  workflow. This experience deepened my understanding of{" "}
                  <strong>
                    patient communication, clinical research, and data quality
                  </strong>
                  .
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
                  I began my role as a <strong>Research Assistant</strong> at
                  the Institute of Information on Traditional Chinese Medicine,
                  Chinese Academy of Chinese Medical Sciences, working with{" "}
                  <strong>
                    clinical cohort data and multimodal physiological
                    measurements
                  </strong>
                  .
                </p>
              </li>
              <li>
                <p>
                  <time
                    dateTime="2025-06"
                    className="font-semibold text-[#c9705f]"
                  >
                    [2025-06]
                  </time>{" "}
                  I completed my master&apos;s studies at the{" "}
                  <strong>Chinese Academy of Chinese Medical Sciences</strong>,
                  where my research focused on{" "}
                  <strong>
                    medical informatics, clinical knowledge representation, and
                    knowledge discovery from real-world insomnia data
                  </strong>
                  .
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
          <ul className="home-projects-grid" aria-label="Selected projects">
            {homeProjects.map((project, index) => {
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
                    {index < 2 && (
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
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <HobbiesVolunteering />
      </main>
      <ContactFooter />
    </div>
  )
}
