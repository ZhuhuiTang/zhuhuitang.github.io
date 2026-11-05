import { Link } from "react-router"
import { useHorizontalCarousel } from "./useHorizontalCarousel"
import SectionAllLink from "./SectionAllLink"

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
  const { trackRef } = useHorizontalCarousel()
  return (
    <section
      className="publications"
      id="hobbies-volunteering"
      aria-labelledby="hobbies-volunteering-title"
    >
      <div className="publications-heading">
        <h2 id="hobbies-volunteering-title">
          <Link to="/hobbies">Hobbies &amp; Volunteering</Link>
        </h2>
        <SectionAllLink to="/hobbies" label="hobbies and volunteering" />
      </div>
      <ul
        className="publications-track"
        id="hobbies-volunteering-track"
        ref={trackRef}
        tabIndex={0}
        aria-label="3 hobbies and volunteering activities; scroll horizontally to browse"
      >
        {hobbies.map((hobby) => (
          <li
            className="publication-placeholder"
            key={hobby.title}
            aria-label={hobby.title}
          >
            <Link
              className="home-hobby-image-link"
              to={`/hobbies#${hobby.title.toLowerCase()}`}
            >
              <img
                className={hobby.imageClass}
                src={hobby.image}
                alt={hobby.alt}
                width={hobby.width}
                height={hobby.height}
                loading="lazy"
              />
            </Link>
            <div className="publication-details">
              <h3>
                <Link to={`/hobbies#${hobby.title.toLowerCase()}`}>
                  {hobby.title}
                </Link>
              </h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
