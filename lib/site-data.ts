import type { Service, GalleryCategoryGroup, GalleryImageItem } from "@/data/services"

export { siteConfig } from "@/data/site-config"
export { services } from "@/data/services"
export { navLinks } from "@/data/navigation"
export type { Service, GalleryCategoryGroup, GalleryImageItem }

export type FlatGalleryImage = GalleryImageItem & { category: string }

/** Numbered jpg paths for a folder (1-50 images) */
export function galleryImagesFromFolder(
  folder: string,
  count: number,
  alt: string,
  startIndex = 1
): GalleryImageItem[] {
  const safeCount = Math.min(Math.max(count, 0), 50)
  return Array.from({ length: safeCount }, (_, i) => ({
    src: `/images/${folder}/${startIndex + i}.jpg`,
    alt,
  }))
}

/** Flatten categorized gallery for lightbox / modal (services listing page) */
export function getFlatServiceGallery(service: Service): FlatGalleryImage[] {
  if (!service.gallery?.length) return []
  return service.gallery.flatMap((group: GalleryCategoryGroup) =>
    group.images.map((image) => ({
      ...image,
      category: group.category,
    }))
  )
}
