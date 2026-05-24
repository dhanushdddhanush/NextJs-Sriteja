import type { LucideIcon } from "lucide-react"
import { Award, Clock, ThumbsUp, Palette, IndianRupee, Truck } from "lucide-react"
import { siteConfig } from "./site-config"

export type HomeHeroSlide = {
  image: string
  badge: string
  heading: string
  description: string
}

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    image: "/images/hero-bg.jpg",
    badge: "India's Trusted Printing Partner",
    heading: "Professional Flex Printing & Designing Services in Tanuku",
    description: siteConfig.description,
  },
  {
    image: "/images/hero-slide-2.jpg",
    badge: "17+ Services Under One Roof",
    heading: "LED Signage, Vinyl & Foam Board Printing Experts",
    description:
      "From illuminated sign boards to precision vinyl prints, we deliver quality that lasts.",
  },
  {
    image: "/images/hero-slide-3.jpg",
    badge: "10+ Years of Experience",
    heading: "Trusted by 10000+ Clients Across India",
    description:
      "10000+ successful projects delivered with unmatched quality and on-time service.",
  },
  {
    image: "/images/3.jpg",
    badge: "",
    heading: "",
    description: "",
  },
  {
    image: "/images/4.jpg",
    badge: "",
    heading: "",
    description: "",
  },
  {
    image: "/images/5.jpg",
    badge: "",
    heading: "",
    description: "",
  },
  {
    image: "/images/6.jpg",
    badge: "",
    heading: "",
    description: "",
  },
  {
    image: "/images/7.jpg",
    badge: "",
    heading: "",
    description: "",
  },
]

export type HomeStat = {
  target: number
  suffix: string
  label: string
}

export const homeStats: HomeStat[] = [
  { target: 13, suffix: "+", label: "Years of Experience" },
  { target: 100000, suffix: "+", label: "Prints Delivered" },
  { target: 10000, suffix: "+", label: "Happy Clients" },
  { target: 17, suffix: "+", label: "Services Offered" },
]

export type HomeTestimonial = {
  name: string
  role: string
  content: string
}

export const homeTestimonials: HomeTestimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Tanuku",
    content:
      "Sri Teja Flex delivered outstanding quality for our shop signage. The colors are vibrant and it has lasted through two monsoon seasons without any fading.",
  },
  {
    name: "Dr. Lakshmi Devi",
    role: "Hospital Administrator",
    content:
      "We ordered hospital directory boards and health awareness displays. The quality and professionalism of Sri Teja Flex is unmatched in Tanuku.",
  },
  {
    name: "Srinivas Rao",
    role: "Political Campaign Manager",
    content:
      "Needed 500 flute boards in 3 days for an election campaign. Sri Teja Flex delivered on time with excellent print quality. Highly recommended!",
  },
  {
    name: "Anjali Reddy",
    role: "School Principal",
    content:
      "The educational displays and school branding materials they created for our institution are exceptional. The students love the colorful, informative boards!",
  },
]

export type HomeReason = {
  icon: LucideIcon
  title: string
  description: string
}

export const homeReasons: HomeReason[] = [
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

export type HomeClient = {
  name: string
  image: string
}

export const homeClients: HomeClient[] = [
  { name: "Client Logo 1", image: "/images/gallery/gallery-1.jpg" },
  { name: "Client Logo 2", image: "/images/gallery/gallery-2.jpg" },
  { name: "Client Logo 3", image: "/images/gallery/gallery-3.jpg" },
  { name: "Client Logo 4", image: "/images/gallery/gallery-4.jpg" },
  { name: "Client Logo 5", image: "/images/gallery/gallery-5.jpg" },
  { name: "Client Logo 6", image: "/images/gallery/gallery-6.jpg" },
  { name: "Client Logo 7", image: "/images/services/flex-printing.jpg" },
  { name: "Client Logo 8", image: "/images/services/foam-board.jpg" },
]
