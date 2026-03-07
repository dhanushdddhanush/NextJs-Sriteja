import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Sri Teja Flex. We are committed to protecting your personal information and privacy.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-foreground py-16 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
            Privacy Policy
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
                Introduction
              </h2>
              <p className="mt-3 leading-relaxed">
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                protecting the privacy of our customers and website visitors.
                This Privacy Policy explains how we collect, use, and safeguard
                your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-3 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name, email address, and phone number when you fill out our contact form</li>
                <li>Business name and address for order processing</li>
                <li>Service requirements and project details you share with us</li>
                <li>Website usage data through cookies and analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>To respond to your inquiries and provide quotes</li>
                <li>To process and fulfill your printing orders</li>
                <li>To communicate about your orders and our services</li>
                <li>To improve our website and services</li>
                <li>To send promotional offers (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Data Security
              </h2>
              <p className="mt-3 leading-relaxed">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Third-Party Services
              </h2>
              <p className="mt-3 leading-relaxed">
                We may use third-party services for analytics and website
                functionality. These services may collect information as
                described in their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Contact Us
              </h2>
              <p className="mt-3 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or call us at{" "}
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
