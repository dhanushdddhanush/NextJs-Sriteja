import { Award, Clock, ThumbsUp, Palette, IndianRupee, Truck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use the latest printing technology and premium materials to ensure every print meets the highest quality standards.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Tight deadline? No problem. Our efficient workflow ensures you get your prints delivered on time, every time.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "With hundreds of satisfied clients, we prioritize your vision and work until you're completely happy with the result.",
  },
  {
    icon: Palette,
    title: "Expert Designing",
    description:
      "Our in-house design team creates stunning visuals that make your brand stand out from the competition.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Competitive prices without compromising on quality. Get the best value for your printing investment.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "From Tanuku to all across West Godavari district, we ensure safe and timely delivery of all your orders.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Us
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Sri Teja Flex?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Years of experience, commitment to quality, and a passion for design
            make us Tanuku&apos;s preferred printing partner.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <reason.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
