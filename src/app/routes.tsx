import {
  createBrowserRouter,
  Link,
  Outlet,
  ScrollRestoration,
} from "react-router"
import Home from "../App"
import ResearchPage from "../ResearchPage"
import ProjectsPage from "../ProjectsPage"
import PublicationsPage from "../PublicationsPage"
import ProjectOnePage from "../ProjectOnePage"
import ProjectTwoPage from "../ProjectTwoPage"
import SiteHeader from "../SiteHeader"
import HobbiesPage from "../HobbiesPage"

function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-[#8a6b6b]">
      <SiteHeader />
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}

function NotFound() {
  return (
    <main className="page-container projects-page">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link className="projects-back-link" to="/">
        Back to home
      </Link>
    </main>
  )
}

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      { index: true, Component: Home },
      { path: "research", Component: ResearchPage },
      { path: "projects", Component: ProjectsPage },
      { path: "publications", Component: PublicationsPage },
      { path: "hobbies", Component: HobbiesPage },
      {
        path: "projects/multimodal-physiological-sensing",
        Component: ProjectOnePage,
      },
      {
        path: "projects/interactive-insomnia-knowledge-system",
        Component: ProjectTwoPage,
      },
      { path: "*", Component: NotFound },
    ],
  },
])
