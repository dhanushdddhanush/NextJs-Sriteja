import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight, Phone, ChevronRight } from "lucide-react"
import { services, siteConfig } from "@/lib/site-data"
import { ServiceGallery } from "@/components/service-gallery"

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
    // 1️⃣ High Intent "Near Me" Keywords (Common for all services)
    const nearMeKeywords = [
      "flex printing near me",
      "flex banner printing near me",
      "printing shop near me",
      "banner printing near me",
      "sign board printing near me",
      "vinyl printing near me",
      "visiting card printing near me",
      "led sign board near me",
      "digital printing near me",
      "advertising board printing near me",
      "custom banner printing near me",
      "large banner printing near me",
      "poster printing near me",
      "business printing near me",
      "shop board printing near me",
      "cheap flex printing near me",
      "fast banner printing near me",
      "outdoor banner printing near me",
      "indoor banner printing near me",
      "commercial printing near me",
      "printing services near me",
      "flex board printing near me",
      "custom sign boards near me",
      "professional printing near me",
      "graphic printing near me"
    ]

    // 15️⃣ Location Based Keywords (Common for all services)
    const locationKeywords = [
      "flex printing in Tanuku",
      "flex printing Tanuku",
      "flute board printing Tanuku",
      "vinyl printing Tanuku",
      "printing services Tanuku",
      "banner printing Tanuku",
      "sign board printing Tanuku",
      "led sign board Tanuku",
      "flex printing West Godavari",
      "banner printing West Godavari",
      "printing services West Godavari",
      "flex printing Andhra Pradesh",
      "banner printing Andhra Pradesh",
      "near Tanuku",
      "in Tanuku town",
      "Tanuku printing services"
    ]

    // 16️⃣ Long Tail Keywords (Common for all services)
    const longTailKeywords = [
      "best flex printing services in Tanuku",
      "affordable flex printing in Tanuku",
      "professional banner printing services",
      "custom sign board printing services",
      "cheap banner printing for shops",
      "outdoor advertising board printing services",
      "high quality vinyl printing services",
      "led sign board makers for shops",
      "professional printing services for businesses"
    ]

    // 17️⃣ Question Keywords (Common for all services)
    const questionKeywords = [
      "what is flex printing",
      "what is flute board printing",
      "how much does flex printing cost",
      "where to print flex banners",
      "best printing services near me",
      "how long do flex banners last",
      "what material is used for flex printing"
    ]

    // 18️⃣ Voice Search Keywords (Common for all services)
    const voiceSearchKeywords = [
      "flex printing shop near me",
      "banner printing near my location",
      "where can I print flex banners",
      "best sign board maker near me",
      "printing shop open now near me"
    ]

    // Service-specific keywords
    const serviceKeywords: Record<string, string[]> = {
      "pole-flute-board-printing": [
        // 3️⃣ Flute Board Printing Keywords
        "flute board printing",
        "flute board sign boards",
        "outdoor flute boards",
        "flute board advertising boards",
        "flute board printing services",
        "plastic flute board printing",
        "real estate flute boards",
        "political flute boards",
        "school flute boards",
        "hospital flute boards",
        "campaign flute boards",
        "promotion flute boards",
        "custom flute boards",
        "cheap flute board printing",
        "durable flute boards",
        "lightweight advertising boards",
        "printed flute boards",
        "sign flute boards",
        "corrugated flute boards",
        "advertisement flute boards",
        // 11️⃣ Political Printing Keywords
        "political banner printing",
        "political flex printing",
        "election banner printing",
        "campaign flex banners",
        "political advertising boards",
        "election promotion banners",
        "political poster printing",
        // 12️⃣ School Printing Keywords
        "school banner printing",
        "school notice board printing",
        "educational signage printing",
        "school event banners",
        "college banner printing",
        // 13️⃣ Hospital Printing Keywords
        "hospital sign boards",
        "medical signage printing",
        "hospital direction boards",
        "clinic sign board printing",
        "medical banner printing"
      ],
      "flute-boards-schools-educational": [
        // 3️⃣ Flute Board Printing Keywords
        "flute board printing",
        "flute board sign boards",
        "outdoor flute boards",
        "flute board advertising boards",
        "flute board printing services",
        "plastic flute board printing",
        "school flute boards",
        "educational flute boards",
        "campaign flute boards",
        "promotion flute boards",
        "custom flute boards",
        "cheap flute board printing",
        "durable flute boards",
        "lightweight advertising boards",
        "printed flute boards",
        "sign flute boards",
        "corrugated flute boards",
        "advertisement flute boards",
        // 12️⃣ School Printing Keywords (Expanded)
        "school banner printing",
        "school notice board printing",
        "educational signage printing",
        "school event banners",
        "college banner printing",
        "school flute board printing",
        "educational flute board printing",
        "school sign board printing",
        "college sign boards",
        "educational institution printing",
        "school promotional materials",
        "educational display boards"
      ],
      "vinyl-printing": [
        // 4️⃣ Vinyl Printing Keywords
        "vinyl printing services",
        "vinyl sticker printing",
        "vinyl banner printing",
        "shop vinyl printing",
        "wall vinyl printing",
        "vinyl branding printing",
        "custom vinyl graphics",
        "vinyl advertising prints",
        "vinyl poster printing",
        "vinyl sign printing",
        "vinyl wall stickers printing",
        "vinyl glass stickers printing",
        "vehicle vinyl stickers",
        "vinyl decal printing",
        "custom vinyl stickers",
        "shop window vinyl printing",
        "advertising vinyl stickers",
        "commercial vinyl printing"
      ],
      "led-signage-boards": [
        // 6️⃣ LED Sign Board Keywords
        "led sign board makers",
        "led sign board printing",
        "led shop board",
        "led sign boards near me",
        "custom led sign boards",
        "led display boards",
        "led advertising boards",
        "illuminated sign boards",
        "led board makers",
        "digital led boards",
        "shop led boards",
        "led advertising signage",
        "led business boards",
        "led sign board manufacturers"
      ]
    }

    return [
      ...nearMeKeywords,
      ...(serviceKeywords[slug] || []),
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
    "flex-printing": "/images/services/flex-printing.jpg",
    "vinyl-printing": "/images/services/vinyl-printing.jpg",
    "foam-board-printing": "/images/services/foam-board.jpg",
    "led-signage-boards": "/images/services/led-signage.jpg",
  }

  const heroImage =
    serviceImages[slug] || "/images/services/flex-printing.jpg"

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary">
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

      {/* Hero */}
      <section className="bg-foreground py-16 text-background md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt={service.title}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
        <ServiceGallery images={service.gallery} title={service.title} />
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
