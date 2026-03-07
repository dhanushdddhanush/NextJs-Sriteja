import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Flute Board Printing Services in Tanuku | Best Flute Board Sign Boards",
  description: "Professional flute board printing and flute board sign boards in Tanuku, West Godavari. Political flute board printing, school flute boards, hospital flute boards, real estate flute boards at affordable prices.",
  keywords: [
    "flute board printing",
    "flute board printing near me",
    "flute board printing Tanuku",
    "flute board sign boards",
    "flute board sign boards near me",
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
    "flute board printing West Godavari",
    "flute board printing Andhra Pradesh",
    "flute board printing services Tanuku",
    "political flute board printing",
    "school notice board printing",
    "educational flute boards",
    "medical flute boards"
  ],
}

export default function FluteBoardPrintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Flute Board Printing Services
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Professional Flute Board Printing in Tanuku
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            High-quality, durable flute board printing for advertising, political campaigns, 
            schools, hospitals and real estate in Tanuku, West Godavari.
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
              Our Flute Board Printing Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Complete range of flute board printing solutions for various applications
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-5.jpg"
                  alt="Political Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Political Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Election campaign flute boards and political advertising materials.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/services/foam-board.jpg"
                  alt="School Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                School Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Educational flute boards for schools, colleges and coaching centers.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-6.jpg"
                  alt="Hospital Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Hospital Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Medical signage and hospital direction boards with flute printing.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-1.jpg"
                  alt="Real Estate Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Real Estate Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Property advertising boards and real estate promotion materials.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-2.jpg"
                  alt="Shop Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Shop Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Business advertising boards and shop promotion flute boards.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/gallery-3.jpg"
                  alt="Custom Flute Boards"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Custom Flute Boards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Personalized flute board designs for specific business needs.
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
              Why Choose Our Flute Board Printing?
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Best quality flute board printing services in Tanuku
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Durable Material
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                High-quality flute boards that last long in outdoor conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">💪</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Lightweight
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Easy to handle and install due to lightweight corrugated material.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Vibrant Printing
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                High-resolution printing with bright, attractive colors.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Cost Effective
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Affordable pricing for all types of flute board printing.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">📏</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Custom Sizes
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Available in various sizes to suit different advertising needs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">
                Quick Delivery
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Fast production and delivery for urgent requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            Need Flute Board Printing Services?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us for high-quality flute board printing in Tanuku, West Godavari
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
