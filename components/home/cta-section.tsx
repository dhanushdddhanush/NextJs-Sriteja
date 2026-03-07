import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function CtaSection() {
  return (
    <section className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-background md:text-3xl">
          Ready to Start Your Printing Project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-background/70">
          Get a free quote today. We offer the best prices in Tanuku for all
          your flex printing and designing needs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phone1}`}
            className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone1}
          </a>
        </div>
      </div>
    </section>
  )
}
