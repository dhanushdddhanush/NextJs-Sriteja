import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight, Phone, ChevronRight } from "lucide-react"
import { services, siteConfig } from "@/lib/site-data"
import {
  nearMeKeywords,
  locationKeywords,
  longTailKeywords,
  questionKeywords,
  voiceSearchKeywords,
  serviceSpecificKeywords,
} from "@/data/services-seo"
import { ServiceGallery } from "@/components/service-gallery"
import { ServiceVideoSlider } from "@/components/service-video-slider"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  // Comprehensive SEO keywords based on service type
  const getKeywords = (serviceTitle: string, slug: string): string[] => {
    return [
      ...nearMeKeywords,
      ...(serviceSpecificKeywords[slug] || []),
      ...locationKeywords,
      ...longTailKeywords,
      ...questionKeywords,
      ...voiceSearchKeywords,
      serviceTitle.toLowerCase(),
      `${serviceTitle} near me`,
      `${serviceTitle} Tanuku`,
      `${serviceTitle} West Godavari`,
      `${serviceTitle} Andhra Pradesh`,
      `${serviceTitle} services`,
      `best ${serviceTitle.toLowerCase()} in Tanuku`,
      `affordable ${serviceTitle.toLowerCase()}`,
      `professional ${serviceTitle.toLowerCase()} services`
    ]
  }

  return {
    title: `${service.title} in Tanuku | Best ${service.title} Services`,
    description: `Professional ${service.title} in Tanuku, West Godavari, Andhra Pradesh. ${service.description} High-quality, affordable ${service.title.toLowerCase()} services for shops, businesses, events and promotions. Call now for best prices!`,
    keywords: getKeywords(service.title, slug),
    openGraph: {
      title: `${service.title} in Tanuku | Sri Teja Flex`,
      description: `Expert ${service.title.toLowerCase()} services in Tanuku, West Godavari. ${service.description} Contact us for professional printing solutions.`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const serviceIndex = services.findIndex((s) => s.slug === slug)
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)

  const serviceImages: Record<string, string> = {
    "flex-printing": "/images/servicebanners/card_13.png",
    "vinyl-printing": "/images/services/vinyl-printing.jpg",
    "foam-board-printing": "/images/services/foam-board.jpg",
    "led-signage-boards": "/images/services/led-signage.jpg",
  }

  const heroImage =
    serviceImages[slug] || "/images/services/flex-printing.jpg"

  return (
    <>
      {/* set here for section height increase  */}
      <div className="flex min-h-[calc(100svh-8.5rem)] flex-col">
        {/* Breadcrumb */}
        <div className="shrink-0 border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>

        {/* Hero — fills remaining viewport */}
        <section className="flex flex-1 flex-col justify-center bg-foreground py-8 text-background md:py-10">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary-foreground">
                Service #{String(serviceIndex + 1).padStart(2, "0")}
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-background/70">
                {service.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-[36px] shadow-xl lg:ml-auto">
              <Image
                src={heroImage}
                alt={service.title}
                width={604}
                height={604}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits & Use Cases */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                Benefits
              </h2>
              <p className="mt-2 text-muted-foreground">
                Why choose our {service.title.toLowerCase()}
              </p>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                Use Cases
              </h2>
              <p className="mt-2 text-muted-foreground">
                Perfect for these applications
              </p>
              <ul className="mt-6 space-y-4">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex gap-3">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <ServiceGallery categories={service.gallery} title={service.title} />
      )}

      {/* Service Videos */}
      {service.videos && service.videos.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                  Watch & Learn
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
                  {service.title} in Action
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Explore real project clips showcasing our process, finishing, and final results. Update the video links anytime to keep this section fresh with your latest work.
                </p>
              </div>

              <ServiceVideoSlider videos={service.videos} title={service.title} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-foreground md:text-3xl">
            Interested in {service.title}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
            Get a free consultation and quote. We offer the best quality and
            pricing in Tanuku for {service.title.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-background px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
            >
              Or chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            Related Services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                  {related.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {related.shortDesc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-all group-hover:gap-2">
                  View Service <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
