import { Link, useLocation } from "react-router"

const navigation = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Hobbies", to: "/hobbies" },
]

export default function SiteHeader() {
  const location = useLocation()
  const pathname = location.pathname.replace(/\/+$/, "") || "/"
  const current = pathname + location.hash

  return (
    <header className="sticky top-0 z-20 border-b border-[#e0e5eb] bg-white/95 backdrop-blur-sm">
      <nav
        aria-label="Primary navigation"
        className="page-container flex min-h-[92px] items-center justify-between gap-6 py-4"
      >
        <Link
          className="font-['Inter:Bold'] text-[18px] font-bold tracking-[3px] text-[#1a1a1f] transition-colors hover:text-[#c9705f]"
          to="/"
        >
          ZHUHUI
        </Link>
        <div className="site-navigation">
          {navigation.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              aria-current={current === to ? "page" : undefined}
              className={current === to ? "is-active" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
