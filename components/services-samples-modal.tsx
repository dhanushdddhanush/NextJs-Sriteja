"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type ServiceSample = {
  src: string
  alt: string
  category: string
}

const serviceSamples: Record<string, ServiceSample[]> = {
  'Flex Printing': [
    { src: "/images/gallery/gallery-1.jpg", alt: "Large format flex banner", category: "Flex Printing" },
    { src: "/images/services/flex-printing.jpg", alt: "Professional flex printing", category: "Flex Printing" },
    { src: "/images/gallery/gallery-2.jpg", alt: "Flex banner design", category: "Flex Printing" },
  ],
  'Vinyl Printing': [
    { src: "/images/gallery/gallery-3.jpg", alt: "Vehicle wrap advertising", category: "Vinyl Printing" },
    { src: "/images/services/vinyl-printing.jpg", alt: "Professional vinyl printing", category: "Vinyl Printing" },
    { src: "/images/gallery/gallery-4.jpg", alt: "Vinyl graphics design", category: "Vinyl Printing" },
  ],
  'Foam Board': [
    { src: "/images/gallery/gallery-5.jpg", alt: "Foam board display", category: "Foam Board" },
    { src: "/images/services/foam-board.jpg", alt: "Premium foam board printing", category: "Foam Board" },
    { src: "/images/gallery/gallery-6.jpg", alt: "Custom foam board cutouts", category: "Foam Board" },
  ],
  'LED Signage': [
    { src: "/images/services/led-signage.jpg", alt: "Illuminated LED signage", category: "LED Signage" },
    { src: "/images/gallery/gallery-1.jpg", alt: "Custom LED sign design", category: "LED Signage" },
    { src: "/images/gallery/gallery-2.jpg", alt: "LED board installation", category: "LED Signage" },
  ],
}

interface ServicesSamplesModalProps {
  serviceTitle: string
  isOpen: boolean
  onClose: () => void
}

export function ServicesSamplesModal({ serviceTitle, isOpen, onClose }: ServicesSamplesModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const samples = serviceSamples[serviceTitle] || []

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % samples.length
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? samples.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
  }

  if (!isOpen || samples.length === 0) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-label="Service samples modal"
    >
      <div className="relative max-h-[85vh] max-w-6xl overflow-hidden rounded-2xl bg-background">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            {serviceTitle} Samples
          </h2>
          <button
            onClick={onClose}
            className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative p-6">
          {samples.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-foreground transition-colors hover:bg-background/40"
                aria-label="Previous sample"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-foreground transition-colors hover:bg-background/40"
                aria-label="Next sample"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="flex items-center justify-center">
            <Image
              src={samples[currentImageIndex]?.src}
              alt={samples[currentImageIndex]?.alt}
              width={800}
              height={600}
              className="h-auto max-h-[60vh] w-full object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          {samples.length > 1 && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {currentImageIndex + 1} / {samples.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
