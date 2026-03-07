"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { services } from "@/lib/site-data"
import { useState } from "react"
import { ServicesSamplesModal } from "@/components/services-samples-modal"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Helper function to get the appropriate image for each service
function getServiceImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'flex-printing': 'flex-printing.jpg',
    'foam-board-printing': 'foam-board.jpg',
    'led-signage-boards': 'led-signage.jpg',
    'vinyl-printing': 'vinyl-printing.jpg',
  }
  
  // Return mapped image if available, otherwise use flex-printing.jpg as default
  return imageMap[slug] || 'flex-printing.jpg'
}

// Service-related images for gallery functionality
const serviceGalleryImages: Record<string, Array<{src: string, alt: string, category: string}>> = {
  'Pole Flute Board Printing Services': [
    { src: "/images/gallery/gallery-1.jpg", alt: "Large format pole flute board", category: "Pole Flute Board" },
    { src: "/images/gallery/gallery-6.jpg", alt: "Professional pole flute board printing", category: "Pole Flute Board" },
    { src: "/images/gallery/gallery-2.jpg", alt: "Pole flute board design", category: "Pole Flute Board" },
    { src: "/images/gallery/gallery-3.jpg", alt: "Outdoor flute board advertising", category: "Pole Flute Board" },
    { src: "/images/gallery/gallery-4.jpg", alt: "Custom pole flute board installation", category: "Pole Flute Board" },
  ],
  'Flute Boards Printing For Schools & Educational Institutions': [
    { src: "/images/gallery/gallery-5.jpg", alt: "School flute board display", category: "School Flute Board" },
    { src: "/images/services/foam-board.jpg", alt: "Educational flute board printing", category: "School Flute Board" },
    { src: "/images/gallery/gallery-6.jpg", alt: "Custom school flute boards", category: "School Flute Board" },
    { src: "/images/gallery/gallery-1.jpg", alt: "School event flute board", category: "School Flute Board" },
  ],
  'LED Signage Boards': [
    { src: "/images/services/led-signage.jpg", alt: "Illuminated LED signage", category: "LED Signage" },
    { src: "/images/gallery/gallery-2.jpg", alt: "Custom LED sign design", category: "LED Signage" },
    { src: "/images/gallery/gallery-3.jpg", alt: "LED board installation", category: "LED Signage" },
    { src: "/images/gallery/gallery-4.jpg", alt: "LED signage at night", category: "LED Signage" },
  ],
  'Vinyl Printing': [
    { src: "/images/gallery/gallery-3.jpg", alt: "Vehicle wrap advertising", category: "Vinyl Printing" },
    { src: "/images/services/vinyl-printing.jpg", alt: "Professional vinyl printing", category: "Vinyl Printing" },
    { src: "/images/gallery/gallery-4.jpg", alt: "Vinyl graphics design", category: "Vinyl Printing" },
    { src: "/images/gallery/gallery-5.jpg", alt: "Custom vinyl decals", category: "Vinyl Printing" },
  ],
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [galleryImages, setGalleryImages] = useState<Array<{src: string, alt: string, category: string}>>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageGallery = (serviceTitle: string) => {
    const images = serviceGalleryImages[serviceTitle] || []
    setGalleryImages(images)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Our Services
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Comprehensive Printing Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            From flex banners to LED signage, we offer 17+ professional printing
            and designing services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-col gap-6 p-6 h-full">
                  {/* Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <button
                      onClick={() => openImageGallery(service.title)}
                      className="relative w-full h-full overflow-hidden rounded-lg group-hover:scale-105 transition-transform"
                    >
                      <Image
                        src={`/images/services/${getServiceImage(service.slug)}`}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                        <span className="translate-y-4 rounded-lg bg-background/90 px-4 py-2 text-xs font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          View Gallery
                        </span>
                      </div>
                    </button>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-[family-name:var(--font-heading)] text-xs font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {service.shortDesc}
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-medium text-sky-600 transition-all group-hover:gap-2 border border-border rounded-lg px-4 py-2 hover:bg-sky-50 hover:text-sky-700"
                      >
                        Learn More <ArrowRight className="h-3 w-3" />
                      </Link>
                      <button
                        onClick={() => window.open(`https://wa.me/918885776707?text=Hi%20Sri%20Teja%20Flex,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Please%20provide%20a%20quote.`, '_blank')}
                        className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-medium text-white transition-all bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples Modal */}
      <ServicesSamplesModal
        serviceTitle={selectedService || ""}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Gallery Modal */}
      {galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-label="Service gallery modal"
        >
          <button
            onClick={() => {
              setGalleryImages([])
              setCurrentImageIndex(0)
            }}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImageIndex]?.src}
              alt={galleryImages[currentImageIndex]?.alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/20 px-4 py-2 text-xs font-medium text-background">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
