import { Link } from "react-router"

export default function SectionAllLink({
  to,
  label,
}: {
  to: string
  label: string
}) {
  return (
    <Link className="section-all-link" to={to} aria-label={`View all ${label}`}>
      All
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </Link>
  )
}
