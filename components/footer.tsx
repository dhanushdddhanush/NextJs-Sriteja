import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { siteConfig, navLinks } from "@/lib/site-data"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <Image
                  src="/images/Logo.jpg"
                  alt="Sri Teja Flex Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              {siteConfig.description}. Serving Tanuku, West Godavari District,
              and all of Andhra Pradesh with premium printing solutions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@sritejaflex_tanuku"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/services/flex-printing"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Flex Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vinyl-printing"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Vinyl Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/foam-board-printing"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Foam Board Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/led-signage-boards"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  LED Signage Boards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visiting-card-printing"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Visiting Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium opacity-90 transition-opacity hover:opacity-100"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-70">{siteConfig.fullAddress}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone2}`}
                  className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-primary">
                <span className="text-lg">🚚</span>
                All India Delivery Available
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-lg">🌐</span>
                <div>
                  <p className="font-medium">Want website for your business??</p>
                  <a
                    href="tel:7989679464"
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    7989679464
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs opacity-60 sm:flex-row">
          <p>
            Copyright {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Flex Printing & Designing Services in Tanuku, Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  )
}
