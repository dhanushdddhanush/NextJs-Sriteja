import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"

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

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Large format flex banner advertising hoarding",
    category: "Flex Printing",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Premium visiting cards and business stationery",
    category: "Visiting Cards",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Vehicle wrap advertising with vinyl graphics",
    category: "Vinyl Printing",
  },
  {
    src: "/images/services/flex-printing.jpg",
    alt: "Large format flex printing in progress",
    category: "Flex Printing",
  },
  {
    src: "/images/services/vinyl-printing.jpg",
    alt: "Professional vinyl printing and cutting",
    category: "Vinyl Printing",
  },
  {
    src: "/images/services/foam-board.jpg",
    alt: "Foam board display prints",
    category: "Foam Board",
  },
  {
    src: "/images/services/led-signage.jpg",
    alt: "Illuminated LED signage board",
    category: "LED Signage",
  },
  {
    src: "/images/hero-bg.jpg",
    alt: "Sri Teja Flex printing workshop overview",
    category: "Workshop",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Custom flex banner design and printing",
    category: "Flex Printing",
  },
]

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
