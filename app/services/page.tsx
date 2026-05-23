"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { services, getFlatServiceGallery, type FlatGalleryImage } from "@/lib/site-data"
import { useState } from "react"
import { ServicesSamplesModal } from "@/components/services-samples-modal"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Helper function to get the appropriate image for each service
function getServiceImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'pole-flute-board-printing': 'card_01.png',
    'flute-boards-schools-educational': 'card_02.png',
    'kite-flute-board-printing': 'card_03.png',
    'no-parking-boards-printing': 'card_04.png',
    'flute-boards-hospitals': 'card_05.png',
    'flute-boards-pesticide-fertilizers': 'card_06.png',
    'political-flute-board-printing': 'card_07.png',
    'foam-board-printing': 'card_08.png',
    'foam-cut-out-printing': 'card_09.png',
    'eco-solvent-printing': 'card_10.png',
    'vinyl-printing': 'card_11.png',
    'one-way-vision-printing': 'card_12.png',
    'flex-printing': 'card_13.png',
    'flex-lamination': 'card_14.png',
    'visiting-card-printing': 'card_15.png',
    'led-signage-boards': 'card_16.png',
    'ice-cream-push-cart-printing': 'card_17.png',
  }
  
  // Return mapped image if available, otherwise use card_01.png as default
  return imageMap[slug] || 'card_01.png'
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [galleryImages, setGalleryImages] = useState<FlatGalleryImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageGallery = (serviceTitle: string) => {
    const service = services.find((s) => s.title === serviceTitle)
    setGalleryImages(service ? getFlatServiceGallery(service) : [])
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
                  {/* Image — wide banners (~543×196); contain avoids cropping text on mobile */}
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted/20">
                    <button
                      type="button"
                      onClick={() => openImageGallery(service.title)}
                      className="group relative block w-full"
                    >
                      <Image
                        src={`/images/servicebanners/${getServiceImage(service.slug)}`}
                        alt={service.title}
                        width={543}
                        height={196}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-auto w-full object-contain"
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
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
            {galleryImages[currentImageIndex]?.category && (
              <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-medium text-background">
                {galleryImages[currentImageIndex].category}
              </span>
            )}
            <span className="rounded-full bg-background/20 px-4 py-2 text-xs font-medium text-background">
              {currentImageIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
