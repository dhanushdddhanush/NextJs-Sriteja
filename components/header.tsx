"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { siteConfig, navLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone1}`}
              className="flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3 w-3" />
              <span>{siteConfig.phone1}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone2}`}
              className="hidden items-center gap-1 transition-opacity hover:opacity-80 sm:flex"
            >
              <Phone className="h-3 w-3" />
              <span>{siteConfig.phone2}</span>
            </a>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-opacity hover:opacity-80"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-16">
            <Image
              src="/images/Logo.jpg"
              alt="Sri Teja Flex Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
              Sri Teja Flex
            </span>
            <span className="block text-[11px] leading-none text-muted-foreground">
              Print & Design Studio
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                pathname === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
                  pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
