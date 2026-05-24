"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function toEmbedUrl(url: string, autoplay: boolean) {
  try {
    const parsed = new URL(url)
    let videoId = ""

    if (parsed.hostname.includes("youtube.com")) {
      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/]+)/)
      const watchId = parsed.searchParams.get("v")
      videoId = shortsMatch?.[1] ?? watchId ?? ""
    } else if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.replace("/", "")
    }

    if (!videoId) return url

    const base = `https://www.youtube.com/embed/${videoId}`
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: autoplay ? "1" : "0",
      loop: "1",
      playlist: videoId,
      controls: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    })

    return `${base}?${params.toString()}`
  } catch (error) {
    return url
  }
}

export function ServiceVideoSlider({
  videos,
  title,
}: {
  videos: string[]
  title: string
}) {
  const normalized = useMemo(
    () => videos.filter((video) => typeof video === "string" && video.trim().length > 0),
    [videos]
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const slideCount = normalized.length

  if (!slideCount) return null

  const goTo = (index: number) => {
    setCurrentIndex((prev) => {
      const nextIndex = ((index % slideCount) + slideCount) % slideCount
      return nextIndex === prev ? prev : nextIndex
    })
  }

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)
  const hasMultiple = slideCount > 1

  return (
    <div className="w-full">
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-3xl border border-border bg-black shadow-2xl sm:max-w-[420px] md:max-w-[520px]">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {normalized.map((video, index) => (
            <div key={`${video}-${index}`} className="relative h-full w-full shrink-0">
              <iframe
                src={toEmbedUrl(video, index === currentIndex)}
                title={`${title} video ${index + 1}`}
                loading={index === currentIndex ? "eager" : "lazy"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition hover:bg-background"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition hover:bg-background"
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex justify-center gap-2">
          {normalized.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to video ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
