"use client"

import { useState } from "react"
import { Send, Loader2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        e.currentTarget.reset()
      } else {
        setError(result.error || "Failed to send message")
      }
    } catch (error) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mt-6 rounded-xl bg-primary/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Send className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for contacting Sri Teja Flex. We will get back to you
          shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <>
      {error && (
        <div className="mt-6 rounded-xl bg-destructive/5 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-destructive font-medium">Error</p>
            <p className="text-sm text-destructive/80">{error}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Your Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your email (optional)"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Your Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us about your printing needs..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  )
}
