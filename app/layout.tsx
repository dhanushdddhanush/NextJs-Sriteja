import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  themeColor: "#1a56db",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: "Flex Printing Services in Tanuku | Sri Teja Flex",
    template: "%s | Sri Teja Flex",
  },
  description:
    "Professional flex printing, flute board printing, vinyl printing, LED sign boards and advertising boards in Tanuku, West Godavari. Fast, affordable printing services for businesses.",
  keywords: [
    "flex printing",
    "flex printing near me",
    "flex banner printing",
    "flute board printing",
    "vinyl printing",
    "vinyl printing near me",
    "led sign board makers",
    "led sign board near me",
    "visiting card printing",
    "visiting card printing near me",
    "sign board printing",
    "sign board printing near me",
    "printing services",
    "printing services near me",
    "banner printing",
    "banner printing near me",
    "one way vision printing",
    "advertising board printing",
    "shop sign board printing",
    "political flex printing",
    "school notice board printing",
    "hospital sign boards",
    "printing services Tanuku",
    "flex printing Tanuku",
    "flex printing West Godavari",
    "flex printing Andhra Pradesh",
    "banner printing Tanuku",
    "sign board printing Tanuku",
    "vinyl printing Tanuku",
    "flute board printing Tanuku",
    "led sign board Tanuku",
    "visiting card printing Tanuku",
    "printing shop near me",
    "digital printing near me",
    "outdoor flex printing",
    "custom flex banners",
    "political banner printing",
    "election banner printing",
    "campaign flex banners",
    "school banner printing",
    "educational signage printing",
    "medical signage printing",
    "pesticide advertising boards",
    "fertilizer company boards",
    "agriculture promotion boards"
  ],
  authors: [{ name: "Sri Teja Flex" }],
  creator: "Sri Teja Flex",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sritejaflex.com",
    siteName: "Sri Teja Flex",
    title: "Sri Teja Flex | Professional Flex Printing & Designing Services in Tanuku",
    description:
      "High-quality, durable & affordable printing solutions for all businesses in Tanuku, West Godavari, Andhra Pradesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Teja Flex | Flex Printing & Designing Services",
    description:
      "Professional flex printing, signage, and designing services in Tanuku, Andhra Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/Logo.jpg", sizes: "any", type: "image/jpeg" },
      
    ],
   
    
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sri Teja Flex",
              description:
                "Professional Flex Printing & Designing Services in Tanuku",
              telephone: ["+918885776707", "+918886779143"],
              email: "sriteja.tanuku@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop No:2, Shreya Towers, Opp Meenakshi Medical Hall, R.P Road, Narendra Centre",
                addressLocality: "Tanuku",
                addressRegion: "Andhra Pradesh",
                postalCode: "534211",
                addressCountry: "IN",
              },
              "@id": "https://sritejaflex.com",
              url: "https://sritejaflex.com",
              priceRange: "$$",
              openingHours: "Mo-Sa 09:00-21:00",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 16.7757,
                  longitude: 81.6825,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Printing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Flex Printing Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vinyl Printing Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "LED Signage Boards",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
