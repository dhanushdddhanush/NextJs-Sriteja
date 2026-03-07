import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background py-20">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="font-[family-name:var(--font-heading)] text-7xl font-bold text-primary">
          404
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
