"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { siteConfig } from "@/lib/site-data"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    image: "/images/hero-bg.jpg",
    badge: "India's Trusted Printing Partner",
    heading: "Professional Flex Printing & Designing Services in Tanuku",
    description: siteConfig.description,
  },
  {
    image: "/images/hero-slide-2.jpg",
    badge: "17+ Services Under One Roof",
    heading: "LED Signage, Vinyl & Foam Board Printing Experts",
    description:
      "From illuminated sign boards to precision vinyl prints, we deliver quality that lasts.",
  },
  {
    image: "/images/hero-slide-3.jpg",
    badge: "10+ Years of Experience",
    heading: "Trusted by 10000+ Clients Across India",
    description:
      "10000+ successful projects delivered with unmatched quality and on-time service.",
  },
  {
    image: "/images/3.jpg",
    badge: "",
    heading: "",
    description:
      "",
  },
   {
    image: "/images/4.jpg",
    badge: "",
    heading: "",
    description:
      "",
  },
   {
    image: "/images/5.jpg",
    badge: "",
    heading: "",
    description:
      "",
  },
   {
    image: "/images/6.jpg",
    badge: "",
    heading: "",
    description:
      "",
  },
   {
    image: "/images/7.jpg",
    badge: "",
    heading: "",
    description:
      "",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[600px] overflow-hidden bg-foreground text-background md:h-[700px] lg:h-[80vh]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform:
              i === current
                ? "scale(1)"
                : direction >= 0
                  ? "scale(1.05)"
                  : "scale(0.95)",
            zIndex: i === current ? 10 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-fill"
            priority={i === 0}
          />
          {![3, 4, 5, 6, 7].includes(i) && <div className="absolute inset-0 bg-foreground/60" />}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
          {![3, 4, 5, 6, 7].includes(current) && (
            <>
              <span
                key={`badge-${current}`}
                className="mb-4 inline-block animate-[fadeInUp_0.6s_ease-out] rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-sm"
              >
                {slides[current].badge}
              </span>
              <h1
                key={`heading-${current}`}
                className="max-w-4xl animate-[fadeInUp_0.6s_ease-out_0.1s_both] font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl"
              >
                {slides[current].heading}
              </h1>
              <p
                key={`desc-${current}`}
                className="mt-6 max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.2s_both] text-lg leading-relaxed opacity-80 text-balance md:text-xl"
              >
                {slides[current].description}
              </p>
              <div className="mt-10 flex animate-[fadeInUp_0.6s_ease-out_0.3s_both] flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-[family-name:var(--font-heading)] text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/30 bg-background/10 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-background/20"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/10 p-2 backdrop-blur-sm transition-colors hover:bg-background/25 md:left-6 md:p-3"
      >
        <ChevronLeft className="h-5 w-5 text-background md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-background/10 p-2 backdrop-blur-sm transition-colors hover:bg-background/25 md:right-6 md:p-3"
      >
        <ChevronRight className="h-5 w-5 text-background md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-primary"
                : "w-2.5 bg-background/40 hover:bg-background/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
