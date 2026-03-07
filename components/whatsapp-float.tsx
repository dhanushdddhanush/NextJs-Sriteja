"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918885776707?text=Hi! I'm interested in your printing services. Please provide me with more information."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
