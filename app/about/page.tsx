import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Target, Eye, Shield, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sri Teja Flex - India's trusted flex printing and designing company with years of experience in delivering premium quality prints.",
  openGraph: {
    title: "About Us | Sri Teja Flex",
    description:
      "Learn about Sri Teja Flex - India's trusted flex printing and designing company.",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            About Us
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-5xl">
            Your Trusted Printing Partner
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            With years of dedication and passion for quality printing, Sri Teja
            Flex has become India&apos;s most trusted flex printing and designing
            company.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
                Sri Teja Flex - Excellence in Printing Since Day One
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Sri Teja Flex was founded with a simple vision: to provide the
                highest quality printing services at affordable prices. Located in
                the heart of Tanuku, West Godavari District, we have grown to
                become one of the most trusted names in flex printing and
                designing across Andhra Pradesh.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our team of skilled professionals combines creative design
                expertise with cutting-edge printing technology to deliver
                results that exceed expectations. Whether you need a single
                visiting card or thousands of flex banners, we treat every
                project with the same level of care and precision.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">
                    5000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Sri Teja Flex printing workshop"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                  500+
                </div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver world-class printing solutions that help businesses in
                Tanuku and beyond effectively communicate their brand message.
                We strive to make professional printing accessible, affordable,
                and hassle-free for every customer.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the leading printing and designing company in Andhra
                Pradesh, known for innovation, quality, and customer service
                excellence. We envision a future where every business has access
                to premium printing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
              Why Sri Teja Flex?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our core values drive everything we do
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "Every print undergoes rigorous quality checks before delivery.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Your satisfaction is our top priority. We listen, adapt, and deliver.",
              },
              {
                icon: Zap,
                title: "Latest Technology",
                desc: "We invest in cutting-edge printing equipment for the best results.",
              },
              {
                icon: Shield,
                title: "Reliability",
                desc: "Count on us for consistent quality and on-time delivery, every time.",
              },
              {
                icon: Target,
                title: "Precision",
                desc: "Attention to detail in every design and print we produce.",
              },
              {
                icon: Eye,
                title: "Innovation",
                desc: "We stay ahead of industry trends to offer you the latest solutions.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
            Contact us today and let&apos;s bring your printing vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-background px-8 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
