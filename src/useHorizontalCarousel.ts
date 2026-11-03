import { useEffect, useRef, useState } from "react"

export function useHorizontalCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateEdges = () => {
      setEdges({
        start: track.scrollLeft <= 1,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
      })
    }
    const onWheel = (event: WheelEvent) => {
      if (
        event.ctrlKey ||
        event.shiftKey ||
        Math.abs(event.deltaX) >= Math.abs(event.deltaY)
      )
        return
      const canScroll =
        event.deltaY > 0
          ? track.scrollLeft + track.clientWidth < track.scrollWidth - 1
          : track.scrollLeft > 1
      if (!canScroll) return
      event.preventDefault()
      const delta =
        event.deltaMode === 1
          ? event.deltaY * 16
          : event.deltaMode === 2
            ? event.deltaY * track.clientWidth
            : event.deltaY
      track.scrollLeft += delta
    }
    const observer = new ResizeObserver(updateEdges)
    observer.observe(track)
    track.addEventListener("scroll", updateEdges, { passive: true })
    track.addEventListener("wheel", onWheel, { passive: false })
    updateEdges()
    return () => {
      observer.disconnect()
      track.removeEventListener("scroll", updateEdges)
      track.removeEventListener("wheel", onWheel)
    }
  }, [])

  const scroll = (direction: number) => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    const second = track.children[1] as HTMLElement | undefined
    const step =
      first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth
    const page = Math.max(1, Math.round(track.clientWidth / step)) * step
    track.scrollBy({
      left: direction * page,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    })
  }

  return { trackRef, edges, scroll }
}
