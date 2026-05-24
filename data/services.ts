export type GalleryImageItem = { src: string; alt: string }
export type GalleryCategoryGroup = {
  category: string
  images: GalleryImageItem[]
}

export type Service = {
  id: number
  title: string
  slug: string
  shortDesc: string
  description: string
  benefits: string[]
  useCases: string[]
  gallery?: GalleryCategoryGroup[]
  videos?: string[]
}

export const services: Service[] = [
  {
    id: 1,
    title: "Pole Flute Board Printing Services",
    slug: "pole-flute-board-printing",
    shortDesc:
      "Durable pole flute boards for outdoor advertising and roadside promotions.",
    description:
      "Our pole flute board printing services deliver high-quality, weather-resistant boards perfect for outdoor advertising. Ideal for roadside promotions, event announcements, and business visibility in Tanuku and surrounding areas.",
    benefits: [
      "Weather-resistant and durable material",
      "Vibrant, long-lasting colors",
      "Custom sizes available",
      "Quick turnaround time",
      "Affordable pricing for bulk orders",
    ],
    useCases: [
      "Roadside advertising",
      "Event promotions",
      "Directional signage",
      "Political campaigns",
      "Business announcements",
    ],
    gallery: [
      {
        category: "Roadside Advertising",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 1}.jpg`,
          alt: "Roadside pole flute board advertising",
        })),
      },
      {
        category: "Event Promotions",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 11}.jpg`,
          alt: "Event promotion pole flute board",
        })),
      },
      {
        category: "Directional Signage",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 21}.jpg`,
          alt: "Directional pole flute board signage",
        })),
      },
      {
        category: "Political Campaigns",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 31}.jpg`,
          alt: "Political campaign pole flute board",
        })),
      },
      {
        category: "Business Announcements",
        images: Array.from({ length: 9 }, (_, i) => ({
          src: `/images/pole-flute/${i + 41}.jpg`,
          alt: "Business announcement pole flute board",
        })),
      },
    ],
  },
  {
    id: 2,
    title: "Flute Boards Printing For Schools & Educational Institutions",
    slug: "flute-boards-schools-educational",
    shortDesc:
      "Educational flute boards for schools, colleges, and coaching centers.",
    description:
      "Specialized flute board printing for educational institutions. We create informative, colorful boards for schools, colleges, and coaching centers in Tanuku and West Godavari district.",
    benefits: [
      "Child-friendly designs and materials",
      "Informative and educational content layout",
      "Durable for indoor and outdoor use",
      "Custom branding for institutions",
      "Bulk order discounts",
    ],
    useCases: [
      "School notice boards",
      "Admission announcements",
      "Educational displays",
      "Sports day events",
      "Annual day promotions",
    ],
    gallery: [
      {
        category: "School notice boards",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/education-flute/${i + 1}.jpg`,
          alt: "school flute board advertising",
        })),
      },
      {
        category: "Admission announcements",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/education-flute/${i + 11}.jpg`,
          alt: "Admission announcements flute board",
        })),
      },
      {
        category: "Educational displays",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/education-flute/${i + 21}.jpg`,
          alt: "Educational displays flute board",
        })),
      },
      {
        category: "Sports day events",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/education-flute/${i + 31}.jpg`,
          alt: "Sports day events flute board",
        })),
      },
      {
        category: "Annual day promotions",
        images: Array.from({ length: 14 }, (_, i) => ({
          src: `/images/education-flute/${i + 41}.jpg`,
          alt: "Annual day promotions flute board",
        })),
      },
    ],
    videos: [
      "https://youtube.com/shorts/G-i3R-av2fY?si=VV1FRQ64ZXd-wGRp",
      "https://youtube.com/shorts/AxyJdBhe2-Q?si=X1ZrYUAz3CfreIBN",
      "https://youtube.com/shorts/g0Ekvonhgzs?si=K8-iK_ayKlHmHYpw",
      "https://youtube.com/shorts/ZOMXVGwF5nI?si=gCWXpIR5-tcFNUqA",
      "https://youtube.com/shorts/_b3SaWW0LOE?si=HuwqjGjhpsTTjBJP",
      "https://youtube.com/shorts/ZhYVNygotKQ?si=1qSbODUaFLuCzmTD",
    ],
  },
  {
    id: 3,
    title: "Kite Flute Board Printing Services",
    slug: "kite-flute-board-printing",
    shortDesc:
      "Eye-catching kite-shaped flute boards for creative advertising.",
    description:
      "Unique kite-shaped flute boards that grab attention. Perfect for creative advertising campaigns and promotional events in Tanuku, Andhra Pradesh.",
    benefits: [
      "Unique kite shape stands out",
      "Lightweight and easy to install",
      "Full-color printing",
      "Weather resistant",
      "Cost-effective advertising",
    ],
    useCases: [
      "Product launches",
      "Festival promotions",
      "Shop openings",
      "Sales events",
      "Brand awareness campaigns",
    ],
    gallery: [
      {
        category: "Brand awareness campaigns",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/kite-flute/${i + 1}.jpg`,
          alt: "Brand awareness campaigns kite flute board",
        })),
      },
      {
        category: "Festival promotions",
        images: Array.from({ length: 4 }, (_, i) => ({
          src: `/images/kite-flute/${i + 11}.jpg`,
          alt: "Event promotion kite flute board",
        })),
      },
    ],
  },
  {
    id: 4,
    title: "No Parking Boards Printing Services",
    slug: "no-parking-boards-printing",
    shortDesc:
      "Professional no parking boards for businesses and residential areas.",
    description:
      "High-quality no parking boards with clear visibility and durable construction. Available in multiple sizes and designs for businesses and residential areas in Tanuku.",
    benefits: [
      "Clear and visible lettering",
      "Durable materials",
      "Multiple size options",
      "Reflective options available",
      "Quick delivery",
    ],
    useCases: [
      "Commercial buildings",
      "Residential apartments",
      "Hospital premises",
      "Private parking areas",
      "Office complexes",
    ],
    gallery: [
      {
        category: "Private parking areas",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/nopark-flute/${i + 1}.jpg`,
          alt: "Private parking areas no parking board",
        })),
      },
      {
        category: "Residential apartments",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/nopark-flute/${i + 11}.jpg`,
          alt: "Residential apartments no parking board",
        })),
      },
      {
        category: "Commercial buildings",
        images: Array.from({ length: 13 }, (_, i) => ({
          src: `/images/nopark-flute/${i + 21}.jpg`,
          alt: "Commercial buildings no parking board",
        })),
      },
    ],
  },
  {
    id: 5,
    title: "Flute Boards Printing For Hospitals",
    slug: "flute-boards-hospitals",
    shortDesc:
      "Informative flute boards for hospitals and healthcare facilities.",
    description:
      "Specialized printing for hospitals and medical facilities. We create informative, professional boards for healthcare institutions in Tanuku and surrounding areas.",
    benefits: [
      "Professional medical-grade designs",
      "Easy-to-read typography",
      "Multilingual options",
      "Hygiene-safe materials",
      "Directional signage solutions",
    ],
    useCases: [
      "Department directories",
      "Health awareness campaigns",
      "Doctor availability boards",
      "Emergency signage",
      "Hospital promotions",
    ],
    gallery: [
      {
        category: "Hospital promotions",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/hospital-flute/${i + 1}.jpg`,
          alt: "Hospital promotions flute board",
        })),
      },
      {
        category: "Health awareness campaigns",
        images: Array.from({ length: 11 }, (_, i) => ({
          src: `/images/hospital-flute/${i + 11}.jpg`,
          alt: "Health awareness campaigns flute board",
        })),
      },
    ],
  },
  {
    id: 6,
    title: "Flute Boards Printing for Pesticide & Fertilizers Companies",
    slug: "flute-boards-pesticide-fertilizers",
    shortDesc:
      "Agricultural industry flute boards for pesticide and fertilizer brands.",
    description:
      "Custom flute board printing for pesticide and fertilizer companies. We understand the agricultural industry needs in West Godavari and create impactful advertising materials.",
    benefits: [
      "Industry-specific designs",
      "UV-resistant printing",
      "Large format options",
      "Rural-market friendly designs",
      "Multilingual content support",
    ],
    useCases: [
      "Product promotions at farms",
      "Dealer point displays",
      "Agricultural exhibitions",
      "Field demonstrations",
      "Warehouse signage",
    ],
    gallery: [
      {
        category: "Pesticide Advertising",
        images: Array.from({ length: 8 }, (_, i) => ({
          src: `/images/Pesticide-flute/${i + 1}.jpg`,
          alt: "Pesticide flute board advertising",
        })),
      },
    ],
  },
  {
    id: 7,
    title: "Political Flute Board Printing Services",
    slug: "political-flute-board-printing",
    shortDesc:
      "Campaign flute boards for political parties and election promotions.",
    description:
      "Professional political campaign printing services. We deliver high-quality flute boards for elections, rallies, and political events with fast turnaround times.",
    benefits: [
      "Rapid production and delivery",
      "Large quantity handling",
      "Bold and impactful designs",
      "Multi-color printing",
      "Campaign-ready packaging",
    ],
    useCases: [
      "Election campaigns",
      "Political rallies",
      "Party meetings",
      "Voter awareness drives",
      "Constituency offices",
    ],
    gallery: [
      {
        category: "Election campaigns",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Political-flute/${i + 1}.jpg`,
          alt: "Election campaigns political flute board",
        })),
      },
      {
        category: "Voter awareness drives",
        images: Array.from({ length: 9 }, (_, i) => ({
          src: `/images/Political-flute/${i + 11}.jpg`,
          alt: "Voter awareness drives political flute board",
        })),
      },
    ],
    videos: [
      "https://youtube.com/shorts/W_UFylcwtT4?si=O5fq1YzsLyqF2Bgf",
      "https://youtube.com/shorts/9CYDmvlUcss?si=qcdgtBQxl78-_eee",
    ],
  },
  {
    id: 8,
    title: "Foam Board Printing Services",
    slug: "foam-board-printing",
    shortDesc:
      "Lightweight foam board printing for displays and presentations.",
    description:
      "Premium foam board printing services for indoor displays, presentations, exhibitions, and retail environments. Lightweight yet rigid boards with high-quality prints.",
    benefits: [
      "Lightweight and easy to handle",
      "Sharp, high-resolution prints",
      "Multiple thickness options",
      "Easy to mount and display",
      "Eco-friendly options",
    ],
    useCases: [
      "Exhibition displays",
      "Retail store signage",
      "Presentation boards",
      "Photo displays",
      "Event backdrops",
    ],
    gallery: [
      {
        category: "Event backdrops",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Foam-Board/${i + 1}.jpg`,
          alt: "Event backdrops foam board",
        })),
      },
      {
        category: "Presentation boards",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Foam-Board/${i + 11}.jpg`,
          alt: "Presentation boards foam board",
        })),
      },
      {
        category: "Photo displays",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Foam-Board/${i + 21}.jpg`,
          alt: "Photo displays foam board",
        })),
      },
      {
        category: "Exhibition displays",
        images: Array.from({ length: 8 }, (_, i) => ({
          src: `/images/Foam-Board/${i + 31}.jpg`,
          alt: "Exhibition displays foam board",
        })),
      },
    ],
  },
  {
    id: 9,
    title: "Foam Cut Out Printing Services",
    slug: "foam-cut-out-printing",
    shortDesc: "Custom-shaped foam cut outs for standees and displays.",
    description:
      "Eye-catching custom foam cut outs for product displays, life-size standees, and promotional materials. Perfect for retail and event marketing in Tanuku.",
    benefits: [
      "Custom shapes and sizes",
      "Life-size standees",
      "Durable construction",
      "Vivid color reproduction",
      "Self-standing capability",
    ],
    useCases: [
      "Product launches",
      "Life-size standees",
      "Photo booths",
      "Retail promotions",
      "Wedding decorations",
    ],
    gallery: [
      {
        category: "Product launches",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Foam-Cut/${i + 1}.jpg`,
          alt: "Product launches advertising foam cut out",
        })),
      },
      {
        category: "Wedding decorations",
        images: Array.from({ length: 4 }, (_, i) => ({
          src: `/images/Foam-Cut/${i + 11}.jpg`,
          alt: "Wedding decorations foam cut out",
        })),
      },
    ],
     videos: [
      "https://youtube.com/shorts/9CYDmvlUcss?si=qcdgtBQxl78-_eee",
      "https://youtube.com/shorts/IHCzz73Tk_w?si=SYvC2fwG_ZUQ9H-d",

    ],
  },
  {
    id: 10,
    title: "Eco Solvent Printing Services",
    slug: "eco-solvent-printing",
    shortDesc:
      "High-quality eco solvent printing for banners and signage.",
    description:
      "Eco-friendly solvent printing delivering vibrant, long-lasting results. Ideal for banners, vehicle wraps, and outdoor signage in Tanuku and surrounding areas.",
    benefits: [
      "Eco-friendly inks",
      "Outdoor durable prints",
      "High resolution output",
      "Wide color gamut",
      "Flexible media options",
    ],
    useCases: [
      "Outdoor banners",
      "Vehicle wraps",
      "Window graphics",
      "Trade show displays",
      "Wall murals",
    ],
    gallery: [
      {
        category: "Outdoor banners",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/EcoSolvent-Printing/${i + 1}.jpg`,
          alt: "Outdoor banners eco solvent printing",
        })),
      },
      {
        category: "Trade show displays",
        images: Array.from({ length: 9 }, (_, i) => ({
          src: `/images/EcoSolvent-Printing/${i + 11}.jpg`,
          alt: "Trade show displays eco solvent printing",
        })),
      },
    ],
  },
  {
    id: 11,
    title: "Vinyl Printing Services",
    slug: "vinyl-printing",
    shortDesc:
      "Professional vinyl printing for stickers, decals, and signage.",
    description:
      "High-quality vinyl printing services for custom stickers, decals, vehicle graphics, and signage. Durable and weather-resistant solutions for businesses in Tanuku.",
    benefits: [
      "Self-adhesive options",
      "Indoor and outdoor grades",
      "Cut-to-shape capability",
      "Long-lasting adhesion",
      "Waterproof and UV resistant",
    ],
    useCases: [
      "Shop signage",
      "Vehicle branding",
      "Floor graphics",
      "Window displays",
      "Product labels",
    ],
    gallery: [
      {
        category: "Product labels",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Vinyl-Printing/${i + 1}.jpg`,
          alt: "Product labels vinyl printing",
        })),
      },
      {
        category: "Window displays",
        images: Array.from({ length: 4 }, (_, i) => ({
          src: `/images/Vinyl-Printing/${i + 11}.jpg`,
          alt: "Window displays vinyl printing",
        })),
      },
    ],
  },
  {
    id: 12,
    title: "One Way Vision Printing Services",
    slug: "one-way-vision-printing",
    shortDesc:
      "One way vision printing for windows and vehicle rear glass.",
    description:
      "One way vision printing allows you to transform windows into advertising space while maintaining interior visibility. Perfect for shops and vehicles in Tanuku.",
    benefits: [
      "Advertising without blocking views",
      "Privacy from outside",
      "Easy application and removal",
      "UV protection",
      "Full-color graphics",
    ],
    useCases: [
      "Shop windows",
      "Vehicle rear windows",
      "Office glass partitions",
      "Bus and auto branding",
      "Building facades",
    ],
    gallery: [
      {
        category: "Office glass partitions",
        images: Array.from({ length: 4 }, (_, i) => ({
          src: `/images/One-Way-Vision/${i + 1}.jpg`,
          alt: "Office glass partitions one way vision printing",
        })),
      },
    ],
  },
  {
    id: 13,
    title: "Flex Printing Services",
    slug: "flex-printing",
    shortDesc:
      "Large format flex printing for banners, hoardings, and displays.",
    description:
      "Our core flex printing services deliver stunning large-format prints for banners, hoardings, and outdoor displays. The most popular printing solution in Tanuku for all advertising needs.",
    benefits: [
      "Large format printing capability",
      "Vivid and bright colors",
      "Cost-effective for large prints",
      "Weather resistant",
      "Fast turnaround",
    ],
    useCases: [
      "Shop front banners",
      "Hoarding advertisements",
      "Event banners",
      "Construction site branding",
      "Trade show backdrops",
    ],
    gallery: [
      {
        category: "Shop front banners",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Flex-Printing/${i + 1}.jpg`,
          alt: "Shop front banners advertising",
        })),
      },
      {
        category: "Hoarding advertisements",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Flex-Printing/${i + 11}.jpg`,
          alt: "Hoarding advertisements",
        })),
      },
      {
        category: "Event banners",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Flex-Printing/${i + 21}.jpg`,
          alt: "Event banners",
        })),
      },
      {
        category: "Political Campaigns",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Flex-Printing/${i + 31}.jpg`,
          alt: "Political campaign pole flex board",
        })),
      },
      {
        category: "Trade show backdrops",
        images: Array.from({ length: 5 }, (_, i) => ({
          src: `/images/Flex-Printing/${i + 41}.jpg`,
          alt: "Trade show backdrops",
        })),
      },
    ],
  },
  {
    id: 14,
    title: "Flex Lamination Services",
    slug: "flex-lamination",
    shortDesc:
      "Professional lamination services to protect and enhance flex prints.",
    description:
      "Extend the life of your flex prints with our professional lamination services. UV protection and weather resistance for outdoor advertising materials in Tanuku.",
    benefits: [
      "UV protection",
      "Scratch resistance",
      "Enhanced color vibrancy",
      "Extended print life",
      "Gloss and matte options",
    ],
    useCases: [
      "Outdoor banners",
      "Menu boards",
      "Photo prints",
      "Maps and charts",
      "Important signage",
    ],
    gallery: [
      {
        category: "Outdoor banners",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/Flex-Lamination/${i + 1}.jpg`,
          alt: "Outdoor banners",
        })),
      },
    ],
  },
  {
    id: 15,
    title: "Visiting Card Printing Services",
    slug: "visiting-card-printing",
    shortDesc:
      "Premium visiting card printing with custom designs and finishes.",
    description:
      "Make a lasting first impression with our premium visiting card printing. Multiple paper stocks, finishes, and design options available in Tanuku.",
    benefits: [
      "Premium paper stocks",
      "Multiple finish options (gloss, matte, spot UV)",
      "Custom design services",
      "Quick delivery",
      "Competitive pricing for bulk",
    ],
    useCases: [
      "Business professionals",
      "Corporate employees",
      "Freelancers",
      "Doctors and lawyers",
      "Shop owners",
    ],
    gallery: [
      {
        category: "Business professionals",
        images: Array.from({ length: 5 }, (_, i) => ({
          src: `/images/Visiting-Card-Printing/${i + 1}.jpg`,
          alt: "Business professionals",
        })),
      },
    ],
  },
  {
    id: 16,
    title: "LED Signage Boards",
    slug: "led-signage-boards",
    shortDesc: "Illuminated LED signage boards for maximum visibility.",
    description:
      "Bright, energy-efficient LED signage boards for shops, businesses, and commercial establishments. Maximize your visibility day and night in Tanuku.",
    benefits: [
      "Energy efficient",
      "High visibility day and night",
      "Long lifespan",
      "Custom sizes and shapes",
      "Low maintenance",
    ],
    useCases: [
      "Shop name boards",
      "Restaurant signage",
      "Hospital signs",
      "Office building names",
      "Directional signs",
    ],
    gallery: [
      {
        category: "Shop name boards",
        images: Array.from({ length: 9 }, (_, i) => ({
          src: `/images/LED-Signage/${i + 1}.jpg`,
          alt: "Shop name boards advertising",
        })),
      },
    ],
  },
  {
    id: 17,
    title: "Ice Cream Push Cart Printing Services",
    slug: "ice-cream-push-cart-printing",
    shortDesc:
      "Colorful and attractive push cart branding for ice cream vendors.",
    description:
      "Complete push cart branding solutions for ice cream vendors and street food businesses. Attractive, durable, and weather-resistant designs in Tanuku.",
    benefits: [
      "Full cart coverage branding",
      "Weather resistant",
      "Attractive food-grade designs",
      "Easy to clean",
      "Brand consistency",
    ],
    useCases: [
      "Ice cream vendors",
      "Street food carts",
      "Mobile juice bars",
      "Pop-up food stalls",
      "Festival food carts",
    ],
    gallery: [
      {
        category: "Roadside Advertising",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 1}.jpg`,
          alt: "Roadside pole flute board advertising",
        })),
      },
      {
        category: "Event Promotions",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 11}.jpg`,
          alt: "Event promotion pole flute board",
        })),
      },
      {
        category: "Directional Signage",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 21}.jpg`,
          alt: "Directional pole flute board signage",
        })),
      },
      {
        category: "Political Campaigns",
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `/images/pole-flute/${i + 31}.jpg`,
          alt: "Political campaign pole flute board",
        })),
      },
      {
        category: "Business Announcements",
        images: Array.from({ length: 9 }, (_, i) => ({
          src: `/images/pole-flute/${i + 41}.jpg`,
          alt: "Business announcement pole flute board",
        })),
      },
    ],
  },
]
