import { Link } from "react-router"
import "./HobbiesPage.css"

type Hobby = {
  id: string
  title: string
  paragraphs: string[]
  caption: string
  photos: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

const hobbies: Hobby[] = [
  {
    id: "dancing",
    title: "Dancing",
    paragraphs: [
      "Dancing is one of my favorite ways to unwind. I love the music, the movement, and the simple joy of learning a new routine. It's a fun way to switch off after a busy day and just enjoy the moment.",
    ],
    caption: "A little dance practice after a busy day.",
    photos: [
      {
        src: "/assets/hobby-dancing.jpg",
        alt: "A mirror photo with friends during dance practice in a studio",
        width: 2122,
        height: 2830,
      },
      {
        src: "/assets/hobby-dancing-practice.jpg",
        alt: "A mirror selfie after practice in a dance studio",
        width: 1440,
        height: 1920,
      },
      {
        src: "/assets/hobby-dancing-group.jpg",
        alt: "A group photo in performance outfits in front of a red event backdrop",
        width: 1620,
        height: 1080,
      },
      {
        src: "/assets/hobby-dancing-stage.jpg",
        alt: "Participants gathered on stage at a celebration",
        width: 1620,
        height: 1080,
      },
    ],
  },
  {
    id: "tennis",
    title: "Tennis",
    paragraphs: [
      "I enjoy getting out on the tennis court whenever I have some free time. For me, it's less about competition and more about staying active, focusing on the next shot, and spending time outdoors.",
    ],
    caption: "An evening on the tennis court.",
    photos: [
      {
        src: "/assets/hobby-tennis.jpg",
        alt: "An outdoor tennis court and net under a colorful evening sky",
        width: 1276,
        height: 1702,
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    paragraphs: [
      "I've participated in volunteer activities at marathon events, university orientation, and community support efforts during the COVID-19 pandemic.",
      "What I enjoy most is working alongside others and meeting people from different walks of life. Even small acts of help can make an experience meaningful.",
    ],
    caption: "Volunteering at a community event.",
    photos: [
      {
        src: "/assets/hobby-volunteering.jpg",
        alt: "Volunteers assisting visitors at an outdoor registration table under green canopies",
        width: 1080,
        height: 720,
      },
      {
        src: "/assets/hobby-volunteering-marathon.jpg",
        alt: "A group photo in front of the 2022 Suzhou Taihu Lake Marathon backdrop",
        width: 1440,
        height: 1080,
      },
      {
        src: "/assets/hobby-volunteering-sports-event.jpg",
        alt: "A large group gathered on an outdoor court at a campus sports event",
        width: 6720,
        height: 3780,
      },
    ],
  },
]

export default function HobbiesPage() {
  return (
    <main
      className="page-container projects-page hobbies-page"
      aria-labelledby="hobbies-page-title"
    >
      <Link className="projects-back-link" to="/">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5m6-6-6 6 6 6" />
        </svg>
        Back to home
      </Link>

      <header className="projects-page-intro hobbies-page-intro">
        <p className="projects-page-eyebrow">A little about life</p>
        <h1 id="hobbies-page-title">Outside Research</h1>
        <p className="projects-page-summary hobbies-page-summary">
          Outside research, I enjoy dancing, playing tennis, and taking part in
          volunteer activities. These are some of the little things that bring
          energy, balance, and connection to my everyday life.
        </p>
      </header>

      <div className="hobbies-page-sections">
        {hobbies.map((hobby, index) => (
          <section
            className="hobbies-page-section"
            id={hobby.id}
            key={hobby.id}
            aria-labelledby={`${hobby.id}-title`}
          >
            <header className="hobbies-page-heading">
              <span className="hobbies-page-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 id={`${hobby.id}-title`}>{hobby.title}</h2>
              <div className="hobbies-page-copy">
                {hobby.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>
            <figure className="hobbies-page-figure">
              <div
                className={`hobbies-page-gallery hobbies-page-gallery--${hobby.id}`}
                role="group"
                aria-label={`${hobby.title} photos`}
              >
                {hobby.photos.map((photo) => (
                  <a
                    className="hobbies-page-photo"
                    key={photo.src}
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${photo.alt} (opens full-size photo in a new tab)`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
              <figcaption>{hobby.caption}</figcaption>
            </figure>
          </section>
        ))}
      </div>
    </main>
  )
}
