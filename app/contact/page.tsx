import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-data"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sri Teja Flex for all your flex printing and designing needs in Tanuku. Call us, WhatsApp us, or visit our shop. Get a free quote today!",
  openGraph: {
    title: "Contact Us | Sri Teja Flex",
    description:
      "Get in touch for flex printing and designing services in Tanuku, Andhra Pradesh.",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Get In Touch
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            Have a project in mind? Get in touch with us for a free consultation
            and quote. We respond quickly!
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach us through any of these channels
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Our Address
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {siteConfig.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Phone Numbers
                    </h3>
                    <a
                      href={`tel:${siteConfig.phone1}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phone1}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2}`}
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phone2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 9:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* All India Delivery */}
                {/* <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg">🚚</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      All India Delivery Available
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We deliver high-quality printing solutions to every corner of India. 
                      
                    </p>
                  </div>
                </div>

                 */}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={siteConfig.social.whatsapp}
                className="mt-8 flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-card transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill in the form below and we&apos;ll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="mb-6 text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            Find Us on Map
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4456523156714!2d81.6864851!3d16.7544893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b7f993d3103f%3A0xca5431a274aa3545!2sSri%20Teja%20Flex%20(Flex%20%26%20Flute%20Boards%20printing)!5e0!3m2!1sen!2sin!4v1772907585686!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Teja Flex Location - Tanuku, Andhra Pradesh"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
