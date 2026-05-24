import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"
import { galleryImages } from "@/data/gallery"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of flex printing, signage, vinyl printing, and designing work. See the quality that makes Sri Teja Flex Tanuku's top printing company.",
  openGraph: {
    title: "Gallery | Sri Teja Flex",
    description:
      "Browse our portfolio of printing and designing work in Tanuku.",
  },
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Our Work
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Project Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            Browse through our portfolio of completed projects. Each piece
            showcases our commitment to quality and creative excellence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  )
}
