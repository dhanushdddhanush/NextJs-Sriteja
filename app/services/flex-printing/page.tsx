import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Flex Printing Services in Tanuku | Best Flex Banner Printing",
  description: "Professional flex printing and flex banner printing services in Tanuku, West Godavari. Outdoor flex printing, political flex printing, shop flex printing, event flex printing at affordable prices.",
  keywords: [
    "flex printing",
    "flex printing near me",
    "flex printing Tanuku",
    "flex banner printing",
    "flex banner printing near me",
    "outdoor flex printing",
    "shop flex printing",
    "political flex printing",
    "event flex printing",
    "festival flex printing",
    "large flex printing",
    "custom flex banners",
    "advertising flex printing",
    "hoarding flex printing",
    "business flex banners",
    "cheap flex printing",
    "high quality flex printing",
    "durable flex banners",
    "flex printing shop",
    "flex printing company",
    "flex banner makers",
    "flex board printing",
    "digital flex printing",
    "flex printing for shops",
    "flex printing for events",
    "flex printing for promotions",
    "flex printing West Godavari",
    "flex printing Andhra Pradesh",
    "political banner printing",
    "election banner printing",
    "campaign flex banners",
    "flex printing services"
  ],
}

export default function FlexPrintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Flex Printing Services
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Professional Flex Printing in Tanuku
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            High-quality, weather-resistant flex printing for outdoor advertising, 
            political campaigns, business promotions and events in Tanuku, West Godavari.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="tel:8885776707"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call Now: 8885776707
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-background px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
              Our Flex Printing Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Complete range of flex printing solutions for all your advertising needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-1.jpg"
                  alt="Outdoor Flex Printing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Outdoor Flex Printing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Weather-resistant flex banners perfect for outdoor advertising and promotions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/services/flex-printing.jpg"
                  alt="Political Flex Printing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Political Flex Printing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Election campaign flex banners and political advertising materials.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-2.jpg"
                  alt="Shop Flex Printing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Shop Flex Printing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Custom flex banners for shops, showrooms and business establishments.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-3.jpg"
                  alt="Event Flex Printing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Event Flex Printing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Festival flex banners, event promotions and celebration flex printing.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-4.jpg"
                  alt="Large Format Flex"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Large Format Flex
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Extra-large flex printing for hoardings, billboards and mega displays.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-5.jpg"
                  alt="Custom Flex Design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Custom Flex Design
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Personalized flex banner designs with your brand colors and logos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
              Why Choose Our Flex Printing?
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Best quality flex printing services in Tanuku, West Godavari
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🌟</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                High Quality Printing
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Premium quality flex materials with vibrant, long-lasting colors.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Weather Resistant
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Durable flex materials that withstand rain, sun and wind.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Fast Delivery
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Quick turnaround time with same-day delivery available.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Affordable Prices
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Competitive pricing for all types of flex printing services.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Custom Designs
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Professional design services for custom flex banners.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">📏</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                All Sizes Available
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                From small flex banners to large hoardings, we print all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            Need Flex Printing Services?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us for high-quality flex printing in Tanuku, West Godavari
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="tel:8885776707"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call: 8885776707
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
