type IconName = "mail" | "scholar" | "linkedin" | "download" | "external"

function ContactIcon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`contact-icon contact-icon--${name}`}
    >
      {name === "mail" && (
        <g
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="m3.5 6 8.5 7 8.5-7" />
        </g>
      )}
      {name === "scholar" && (
        <path
          fill="currentColor"
          d="M12 2 1 8l11 6 9-4.91V16h2V8L12 2Zm-7 11v5c4 4 10 4 14 0v-5l-7 4-7-4Z"
        />
      )}
      {name === "linkedin" && (
        <>
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
          <circle cx="7" cy="7" r="1.4" fill="white" />
          <path
            fill="white"
            d="M5.7 10h2.6v8H5.7zM10.4 10h2.5v1.1c.6-.9 1.4-1.3 2.6-1.3 2.1 0 3.3 1.3 3.3 3.8V18h-2.6v-4c0-1.3-.5-1.9-1.5-1.9-1.1 0-1.7.7-1.7 2V18h-2.6z"
          />
        </>
      )}
      {name === "download" && (
        <path
          d="M12 3v15m-4-4 4 4 4-4M5 21h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {name === "external" && (
        <path
          d="M6 18 18 6M7 6h11v11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

const pendingLinks = [{ label: "CV", icon: "download" }] as const

export default function SidebarContact() {
  return (
    <div className="sidebar-contact">
      <a
        className="sidebar-affiliation hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
        href="https://www.yjstcm.ac.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="sidebar-emblem"
          src="/assets/cacms-emblem.png"
          alt="中国中医科学院院徽"
          width="72"
          height="72"
        />
        <ContactIcon name="external" />
        <span>Beijing, China</span>
      </a>

      <div
        className="sidebar-contact-list"
        aria-label="Contact and academic profiles"
      >
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
        <a
          className="sidebar-contact-row"
          href="https://www.linkedin.com/in/zhuhui-tang-a9437138a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon name="linkedin" />
          <span>LinkedIn</span>
          <ContactIcon name="external" />
        </a>
        {pendingLinks.map(({ label, icon }) => (
          <span
            className="sidebar-contact-row sidebar-contact-row--pending"
            title={`${label} — 链接待补充`}
            aria-label={`${label}，链接待补充`}
            key={label}
          >
            <ContactIcon name={icon} />
            <span>{label}</span>
            <span className="sidebar-pending-label">Coming soon</span>
          </span>
        ))}
      </div>
    </div>
  )
}
