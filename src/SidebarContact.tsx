type IconName = "mail" | "scholar" | "github" | "youtube" | "download" | "external"

function ContactIcon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`contact-icon contact-icon--${name}`}
    >
      {name === "mail" && (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="m3.5 6 8.5 7 8.5-7" />
        </g>
      )}
      {name === "scholar" && (
        <path fill="currentColor" d="M12 2 1 8l11 6 9-4.91V16h2V8L12 2Zm-7 11v5c4 4 10 4 14 0v-5l-7 4-7-4Z" />
      )}
      {name === "github" && (
        <path fill="currentColor" d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.15.68-3.82-1.34-3.82-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.73 2.64 1.23 3.28.94.1-.73.39-1.23.71-1.51-2.52-.28-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.16-3.04-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.72.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.36-2.65 5.32-5.18 5.6.41.36.77 1.04.77 2.1v3.1c0 .3.21.65.78.54A11.3 11.3 0 0 0 12 .8Z" />
      )}
      {name === "youtube" && (
        <>
          <rect x="1" y="4" width="22" height="16" rx="5" fill="currentColor" />
          <path d="m10 8 6 4-6 4V8Z" fill="white" />
        </>
      )}
      {name === "download" && (
        <path d="M12 3v15m-4-4 4 4 4-4M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {name === "external" && (
        <path d="M6 18 18 6M7 6h11v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

const pendingLinks = [
  { label: "GitHub", icon: "github" },
  { label: "YouTube", icon: "youtube" },
  { label: "CV", icon: "download" },
] as const

export default function SidebarContact() {
  return (
    <div className="sidebar-contact">
      <div className="sidebar-affiliation">
        <img
          className="sidebar-emblem"
          src="/assets/cacms-emblem.png"
          alt="中国中医科学院院徽"
          width="72"
          height="72"
        />
        <ContactIcon name="external" />
        <span>Beijing, China</span>
      </div>

      <div className="sidebar-contact-list" aria-label="Contact and academic profiles">
        <a className="sidebar-contact-row" href="mailto:tangzhuhui6@gmail.com">
          <ContactIcon name="mail" />
          <span className="sidebar-email">tangzhuhui6@gmail.com</span>
        </a>
        <a
          className="sidebar-contact-row"
          href="https://scholar.google.com/citations?user=DSD6X0wAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon name="scholar" />
          <span>Google Scholar</span>
          <ContactIcon name="external" />
        </a>
        {pendingLinks.map(({ label, icon }) => (
          <button
            className="sidebar-contact-row"
            type="button"
            disabled
            title={`${label} — 链接待补充`}
            aria-label={`${label}，链接待补充`}
            key={label}
          >
            <ContactIcon name={icon} />
            <span>{label}</span>
            {icon === "download" ? (
              <span className="sidebar-pdf-label">PDF</span>
            ) : (
              <ContactIcon name="external" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
