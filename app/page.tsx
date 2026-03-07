import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { AllIndiaDelivery } from "@/components/home/all-india-delivery"
import { StatsSection } from "@/components/home/stats-section"
import { ClientsSection } from "@/components/home/clients-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Flex Printing Services in Tanuku | Sri Teja Flex",
  description: "Best flex printing, flute board printing, vinyl printing, LED sign boards and visiting card printing in Tanuku, West Godavari. Fast, affordable printing services for shops, businesses, political campaigns, schools and hospitals.",
  keywords: [
    "flex printing near me",
    "flex printing Tanuku",
    "flex banner printing",
    "flute board printing",
    "vinyl printing services",
    "led sign board makers",
    "visiting card printing",
    "sign board printing",
    "printing services near me",
    "banner printing near me",
    "political flex printing",
    "school notice board printing",
    "hospital sign boards",
    "advertising board printing",
    "shop sign board printing",
    "one way vision printing",
    "flex printing West Godavari",
    "flex printing Andhra Pradesh",
    "printing services Tanuku",
    "best flex printing services in Tanuku",
    "affordable flex printing in Tanuku",
    "professional banner printing services",
    "custom sign board printing services",
    "cheap banner printing for shops",
    "outdoor advertising board printing services",
    "high quality vinyl printing services",
    "led sign board makers for shops",
    "professional printing services for businesses"
  ],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUs />
      <AllIndiaDelivery />
      <ClientsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
