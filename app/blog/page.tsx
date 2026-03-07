"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowRight, Tag, ChevronRight, ChevronLeft } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { useState, useEffect, useCallback } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sort blog posts by ID (latest first)
  const sortedPosts = [...blogPosts].sort((a, b) => b.id - a.id)
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All Posts" 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory)
  
  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

  // Slider logic
  const postsPerSlide = 3
  const maxSlide = Math.max(0, Math.ceil(remainingPosts.length / postsPerSlide) - 1)

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }, [maxSlide])

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }, [maxSlide])

  useEffect(() => {
    const timer = setInterval(next, 4000) // Auto-slide every 4 seconds
    return () => clearInterval(timer)
  }, [next])

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Blog</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Our Blog
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Tips, Guides & Industry Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay updated with the latest printing trends, expert advice, and
            helpful guides to make the most of your advertising budget.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-muted-foreground">
              Categories:
            </span>
            <button
              onClick={() => setSelectedCategory("All Posts")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedCategory === "All Posts"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Featured
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      {remainingPosts.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
              Latest Articles
            </h2>
            <div className="mt-8 relative">
              {/* Slider Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(remainingPosts.length / postsPerSlide) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {remainingPosts
                        .slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide)
                        .map((post) => (
                          <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {maxSlide > 0 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous articles"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:-translate-x-4 z-10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next articles"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:translate-x-4 z-10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}

              {/* Dots */}
              {maxSlide > 0 && (
                <div className="mt-6 flex justify-center gap-2">
                  {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-foreground md:text-3xl">
            Need Expert Printing Advice?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
            Contact us today for a free consultation. We help you choose the
            right printing solution for your budget and goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

function BlogCard({
  post,
}: {
  post: (typeof blogPosts)[number]
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-0.5 rounded-md bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </span>
            ))}
          </div>
          <ArrowRight className="ml-auto h-4 w-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  )
}
