import "./ContactFooter.css"

function ContactArrow({ upward = false }: { upward?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={upward ? "M12 19V5m-6 6 6-6 6 6" : "M6 18 18 6M7 6h11v11"} />
    </svg>
  )
}

export default function ContactFooter() {
  return (
    <footer
      className="contact-footer"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="page-container">
        <div className="contact-footer-main">
          <div className="contact-footer-invitation">
            <p className="contact-footer-eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&apos;s connect.</h2>
            <p className="contact-footer-description">
              I welcome conversations about human-centered AI, digital health,
              and research collaboration.
            </p>
          </div>
          <div className="contact-footer-details">
            <a
              className="contact-footer-email"
              href="mailto:tangzhuhui6@gmail.com"
            >
              <span>tangzhuhui6@gmail.com</span>
              <ContactArrow />
            </a>
            <nav
              className="contact-footer-profiles"
              aria-label="Connect with Zhuhui Tang"
            >
              <a
                href="https://www.linkedin.com/in/zhuhui-tang-a9437138a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ContactArrow />
              </a>
              <a
                href="https://scholar.google.com/citations?user=DSD6X0wAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar <ContactArrow />
              </a>
            </nav>
          </div>
        </div>
        <div className="contact-footer-bottom">
          <p>© {new Date().getFullYear()} Zhuhui Tang</p>
          <a href="#home">
            Back to top <ContactArrow upward />
          </a>
        </div>
      </div>
    </footer>
  )
}
