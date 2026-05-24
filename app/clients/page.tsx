import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { clients } from "@/data/clients"

export const metadata: Metadata = {
  title: "Our Valuable Clients",
  description:
    "See our valued clients across Tanuku, West Godavari, and Andhra Pradesh who trust Sri Teja Flex for their printing and designing needs.",
  openGraph: {
    title: "Our Valuable Clients | Sri Teja Flex",
    description:
      "Trusted by businesses across Tanuku, West Godavari, and Andhra Pradesh.",
  },
}

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Our Partners
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Our Valuable Clients
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            We are proud to serve businesses, institutions, and organizations
            across Tanuku and West Godavari district with our premium printing
            solutions.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.id}
                className="rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Client Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Client Info */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                    {client.name}
                  </h3>
                  
                  {/* Golden Star Rating */}
                  <div className="mt-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < client.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Review Section */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Their Review
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      "{client.review}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-foreground md:text-3xl">
            Want to Become a Client?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
            Join our growing family of satisfied customers in Tanuku and beyond.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-background px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
