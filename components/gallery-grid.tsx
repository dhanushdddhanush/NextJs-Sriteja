"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
  category: string
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  return (
    <>
      {/* Grid */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openModal(image, index)}
            className="group mb-6 block w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                <span className="translate-y-4 rounded-lg bg-background/90 px-4 py-2 text-xs font-medium text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  View Full Image
                </span>
              </div>
            </div>
            <div className="p-3">
              <span className="text-xs font-medium text-primary">
                {image.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal with Manual Slider */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full object-contain"
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/20 px-4 py-2 text-xs font-medium text-background">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
