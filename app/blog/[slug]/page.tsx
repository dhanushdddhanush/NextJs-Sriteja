import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  ChevronRight,
  User,
} from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sri Teja Flex Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  // Convert markdown-like bold (**text**) to HTML
  const formattedContent = post.content
    .split("\n\n")
    .map((paragraph, i) => {
      // Check if it's a heading (bold line)
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        const headingText = paragraph.slice(2, -2)
        return (
          <h3
            key={i}
            className="mt-8 font-[family-name:var(--font-heading)] text-xl font-bold text-foreground"
          >
            {headingText}
          </h3>
        )
      }

      // Check if it's a list
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
        return (
          <ul key={i} className="mt-3 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="flex gap-2 text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item.slice(2)}</span>
              </li>
            ))}
          </ul>
        )
      }

      // Regular paragraph with inline bold
      const parts = paragraph.split(/(\*\*.*?\*\*)/)
      return (
        <p key={i} className="mt-4 leading-relaxed text-foreground/80">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            return part
          })}
        </p>
      )
    })

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="line-clamp-1 text-foreground">{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <article className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="mb-8">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-border">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose-custom">{formattedContent}</div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Prev/Next Nav */}
          <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <ArrowLeft className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                <div>
                  <span className="text-xs text-muted-foreground">
                    Previous Article
                  </span>
                  <p className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-right transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row-reverse"
              >
                <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                <div>
                  <span className="text-xs text-muted-foreground">
                    Next Article
                  </span>
                  <p className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-primary">
                      {related.category}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="mt-auto text-[11px] text-muted-foreground">
                      {related.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary-foreground md:text-2xl">
            Need Printing Services in Andhra & Telangana?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-primary-foreground/70">
            Contact Sri Teja Flex for high-quality, affordable printing
            solutions.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
