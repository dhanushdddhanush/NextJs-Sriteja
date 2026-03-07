import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions of Sri Teja Flex's printing and designing services in Tanuku, Andhra Pradesh.",
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-foreground py-16 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-background/70">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Acceptance of Terms
              </h2>
              <p className="mt-3 leading-relaxed">
                By accessing and using the services of {siteConfig.name}, you
                agree to be bound by these Terms and Conditions. If you do not
                agree with any part of these terms, please do not use our
                services.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Services
              </h2>
              <p className="mt-3 leading-relaxed">
                {siteConfig.name} provides flex printing, vinyl printing, foam
                board printing, LED signage, visiting card printing, and related
                designing services. All services are subject to availability and
                may vary based on project requirements.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Orders & Payments
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>All orders require confirmation and advance payment as discussed</li>
                <li>Prices are subject to change based on material costs and order specifications</li>
                <li>Custom orders cannot be cancelled once production has started</li>
                <li>Bulk orders may require a deposit before production begins</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Design & Artwork
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Clients are responsible for providing accurate content and design approvals</li>
                <li>We are not liable for errors in client-provided content</li>
                <li>Design revisions beyond the agreed scope may incur additional charges</li>
                <li>All original designs remain the intellectual property of {siteConfig.name} unless otherwise agreed</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Delivery
              </h2>
              <p className="mt-3 leading-relaxed">
                Delivery timelines are estimates and may vary based on order
                complexity, material availability, and other factors.{" "}
                {siteConfig.name} is not liable for delays caused by
                circumstances beyond our control.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Quality Assurance
              </h2>
              <p className="mt-3 leading-relaxed">
                We strive for the highest quality in all our prints. If you are
                not satisfied with the quality, please contact us within 48
                hours of delivery. We will work to resolve any legitimate
                quality concerns.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-3 leading-relaxed">
                {siteConfig.name} shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of
                our services. Our liability shall be limited to the amount paid
                for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed">
                For questions about these terms, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.phone1}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
