"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export type GalleryImage = {
  src: string
  alt: string
}

export type GalleryCategory = {
  category: string
  images: GalleryImage[]
}

export function ServiceGallery({
  categories,
  title,
}: {
  categories: GalleryCategory[]
  title: string
}) {
  const [lightbox, setLightbox] = useState<{
    categoryIndex: number
    imageIndex: number
  } | null>(null)

  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  if (!categories || categories.length === 0) return null

  const activeCategory =
    lightbox !== null ? categories[lightbox.categoryIndex] : null
  const activeImages = activeCategory?.images ?? []

  const goNext = () => {
    if (lightbox === null || activeImages.length === 0) return
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % activeImages.length,
    })
  }

  const goPrev = () => {
    if (lightbox === null || activeImages.length === 0) return
    setLightbox({
      ...lightbox,
      imageIndex:
        (lightbox.imageIndex - 1 + activeImages.length) % activeImages.length,
    })
  }

  const scrollCategory = (index: number, direction: "left" | "right") => {
    const el = scrollRefs.current[index]
    if (!el) return
    const amount = el.clientWidth * 0.85
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Previous Works
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            Our {title} Gallery
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse completed projects by category — scroll within each card to
            view more samples
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((group, categoryIndex) => (
            <div
              key={group.category}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {group.images.length} sample
                    {group.images.length !== 1 ? "s" : ""}
                  </p>
                </div>
                {group.images.length > 1 && (
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => scrollCategory(categoryIndex, "left")}
                      className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      aria-label={`Scroll ${group.category} images left`}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCategory(categoryIndex, "right")}
                      className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      aria-label={`Scroll ${group.category} images right`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div
                ref={(el) => {
                  scrollRefs.current[categoryIndex] = el
                }}
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {group.images.map((image, imageIndex) => (
                  <button
                    key={`${image.src}-${imageIndex}`}
                    type="button"
                    onClick={() =>
                      setLightbox({ categoryIndex, imageIndex })
                    }
                    className="group relative w-[min(85%,280px)] shrink-0 snap-start overflow-hidden rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                        <span className="translate-y-4 rounded-lg bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          View Full Size
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && activeImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {activeImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="absolute left-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="absolute right-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImages[lightbox.imageIndex].src}
              alt={activeImages[lightbox.imageIndex].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
            <div className="bg-card px-4 py-3 text-center">
              <p className="text-xs font-medium text-primary">
                {activeCategory?.category}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {activeImages[lightbox.imageIndex].alt}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                {lightbox.imageIndex + 1} / {activeImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
