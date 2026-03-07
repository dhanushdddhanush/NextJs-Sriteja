import Link from "next/link"
import Image from "next/image"

const clients = [
  { name: "Client Logo 1", image: "/images/gallery/gallery-1.jpg" },
  { name: "Client Logo 2", image: "/images/gallery/gallery-2.jpg" },
  { name: "Client Logo 3", image: "/images/gallery/gallery-3.jpg" },
  { name: "Client Logo 4", image: "/images/gallery/gallery-4.jpg" },
  { name: "Client Logo 5", image: "/images/gallery/gallery-5.jpg" },
  { name: "Client Logo 6", image: "/images/gallery/gallery-6.jpg" },
  { name: "Client Logo 7", image: "/images/services/flex-printing.jpg" },
  { name: "Client Logo 8", image: "/images/services/foam-board.jpg" },
]

export function ClientsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted By
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            Our Valuable Clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We are proud to serve some of the best businesses and institutions
            in Tanuku and West Godavari district.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative h-24 overflow-hidden rounded-xl transition-transform hover:scale-105"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/clients"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  )
}
