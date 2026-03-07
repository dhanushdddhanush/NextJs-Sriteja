"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryItem = {
  src: string
  alt: string
}

export function ServiceGallery({ images, title }: { images: GalleryItem[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
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
            Browse through some of our completed {title.toLowerCase()} projects
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                  <span className="translate-y-4 rounded-lg bg-background/90 px-4 py-2 text-xs font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    View Full Size
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 text-left">
                <p className="text-xs text-muted-foreground">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
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
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
            <div className="bg-card px-4 py-3 text-center">
              <p className="text-sm text-muted-foreground">
                {images[selectedIndex].alt}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
