import { useHorizontalCarousel } from "./useHorizontalCarousel"

const placeholderSlots = Array.from({ length: 6 }, (_, index) => index + 1)
const hobbies = [
  {
    title: "Dancing",
    description:
      "Dancing is one of my favorite ways to unwind. I love moving to music, having fun, and taking a little break from my daily routine.",
    image: "/assets/hobby-dancing.jpg",
    alt: "Mirror photo taken during a dance practice in a dance studio",
    width: 2122,
    height: 2830,
    imageClass: "hobby-cover",
  },
  {
    title: "Tennis",
    description:
      "I enjoy playing tennis whenever I get the chance. It's a great way to stay active, clear my mind, and enjoy some time outdoors.",
    image: "/assets/hobby-tennis.jpg",
    alt: "Outdoor tennis court and net under a colorful evening sky",
    width: 1276,
    height: 1702,
    imageClass: "hobby-cover hobby-cover--tennis",
  },
  {
    title: "Volunteering",
    description:
      "I've taken part in volunteer activities at marathon events, university orientation, and community support efforts during the COVID-19 pandemic. I enjoy being part of events where people come together to help others.",
    image: "/assets/hobby-volunteering.jpg",
    alt: "Volunteers assisting visitors at an outdoor registration table under green canopies",
    width: 1080,
    height: 720,
    imageClass: "hobby-cover",
  },
]

export default function HobbiesVolunteering() {
  const { trackRef, edges, scroll } = useHorizontalCarousel()

  return (
    <section
      className="publications"
      id="hobbies-volunteering"
      aria-labelledby="hobbies-volunteering-title"
    >
      <div className="publications-heading">
        <h2 id="hobbies-volunteering-title">Hobbies &amp; Volunteering</h2>
        <div className="publications-controls">
          <button
            type="button"
            disabled={edges.start}
            onClick={() => scroll(-1)}
            aria-label="Previous hobbies and volunteering"
            aria-controls="hobbies-volunteering-track"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            disabled={edges.end}
            onClick={() => scroll(1)}
            aria-label="Next hobbies and volunteering"
            aria-controls="hobbies-volunteering-track"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <ul
        className="publications-track"
        id="hobbies-volunteering-track"
        ref={trackRef}
        tabIndex={0}
        aria-label="Hobbies and volunteering; scroll horizontally to browse"
      >
        {placeholderSlots.map((number) => {
          const hobby = hobbies[number - 1]
          return (
            <li
              className="publication-placeholder"
              key={number}
              aria-label={
                hobby
                  ? hobby.title
                  : `Hobby or volunteering activity ${number}, content pending`
              }
            >
              {hobby ? (
                <>
                  <img
                    className={hobby.imageClass}
                    src={hobby.image}
                    alt={hobby.alt}
                    width={hobby.width}
                    height={hobby.height}
                    loading="lazy"
                  />
                  <div className="publication-details">
                    <h3>{hobby.title}</h3>
                    <p className="hobby-description">{hobby.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="publication-image-placeholder"
                    aria-hidden="true"
                  />
                  <div
                    className="publication-text-placeholder"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                    <span className="publication-meta-placeholder" />
                  </div>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
