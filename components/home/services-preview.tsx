import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/site-data"

const previewServices = services.slice(0, 8)

export function ServicesPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            Our Printing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From flex banners to LED signage boards, we provide comprehensive
            printing and designing solutions for every business need.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-3 0h.008v.008h-.008V12z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {service.shortDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition-all group-hover:gap-2">
                Learn More <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
