"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Tanuku",
    content:
      "Sri Teja Flex delivered outstanding quality for our shop signage. The colors are vibrant and it has lasted through two monsoon seasons without any fading.",
  },
  {
    name: "Dr. Lakshmi Devi",
    role: "Hospital Administrator",
    content:
      "We ordered hospital directory boards and health awareness displays. The quality and professionalism of Sri Teja Flex is unmatched in Tanuku.",
  },
  {
    name: "Srinivas Rao",
    role: "Political Campaign Manager",
    content:
      "Needed 500 flute boards in 3 days for an election campaign. Sri Teja Flex delivered on time with excellent print quality. Highly recommended!",
  },
  {
    name: "Anjali Reddy",
    role: "School Principal",
    content:
      "The educational displays and school branding materials they created for our institution are exceptional. The students love the colorful, informative boards!",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  
  // Number of items to show per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // lg: 3 items
      if (window.innerWidth >= 768) return 2  // md: 2 items
      return 1 // sm: 1 item
    }
    return 3 // default for server-side rendering
  }

  const itemsPerSlide = getItemsPerSlide()
  const maxIndex = Math.max(0, testimonials.length - itemsPerSlide)

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000) // Auto-slide every 4 seconds
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${current * (100 / itemsPerSlide)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className={`flex-shrink-0 ${
                    itemsPerSlide === 3 ? 'w-1/3' : itemsPerSlide === 2 ? 'w-1/2' : 'w-full'
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-full">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:-translate-x-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:translate-x-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
