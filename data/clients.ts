export type ClientTestimonial = {
  id: number
  name: string
  image: string
  review: string
  rating: number
}

export const clients: ClientTestimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar Enterprises",
    image: "/images/gallery/gallery-1.jpg",
    review:
      "Excellent quality and timely delivery. Sri Teja Flex has been our trusted printing partner for over 5 years.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lakshmi Hospital",
    image: "/images/gallery/gallery-2.jpg",
    review:
      "Professional service and outstanding print quality for our hospital signage and promotional materials.",
    rating: 5,
  },
  {
    id: 3,
    name: "Srinivas Rao Constructions",
    image: "/images/gallery/gallery-3.jpg",
    review:
      "Great work on our construction site banners and safety signs. Very durable and weather-resistant.",
    rating: 4,
  },
  {
    id: 4,
    name: "Anjali Reddy School",
    image: "/images/gallery/gallery-4.jpg",
    review:
      "Amazing educational displays and school branding materials. Students love the colorful designs!",
    rating: 5,
  },
  {
    id: 5,
    name: "Mahesh Electronics",
    image: "/images/gallery/gallery-5.jpg",
    review:
      "High-quality flex banners for our store promotions. Great colors and fast turnaround time.",
    rating: 4,
  },
  {
    id: 6,
    name: "Priya Fashion Boutique",
    image: "/images/gallery/gallery-6.jpg",
    review:
      "Beautiful vinyl printing for our shop window displays. Very professional and eye-catching designs.",
    rating: 5,
  },
  {
    id: 7,
    name: "Krishna Temple",
    image: "/images/services/flex-printing.jpg",
    review:
      "Exceptional work on our temple festival banners and religious event signage. Very respectful service.",
    rating: 5,
  },
  {
    id: 8,
    name: "Venkateswara College",
    image: "/images/services/foam-board.jpg",
    review:
      "Outstanding foam board printing for our college events and educational displays. Highly recommended!",
    rating: 4,
  },

]
