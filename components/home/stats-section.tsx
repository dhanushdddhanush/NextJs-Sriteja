"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { target: 13, suffix: "+", label: "Years of Experience" },
  { target: 100000, suffix: "+", label: "Prints Delivered" },
  { target: 10000, suffix: "+", label: "Happy Clients" },
  { target: 17, suffix: "+", label: "Services Offered" },
]

function useCountUp(target: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutQuart for a snappy feel
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, shouldStart])

  return count
}

function StatItem({
  target,
  suffix,
  label,
  shouldStart,
}: {
  target: number
  suffix: string
  label: string
  shouldStart: boolean
}) {
  const count = useCountUp(target, target > 100 ? 2000 : 1500, shouldStart)

  return (
    <div className="text-center">
      <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary-foreground tabular-nums md:text-4xl lg:text-5xl">
        {shouldStart ? count.toLocaleString() : "0"}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-primary-foreground/80 md:text-base">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              shouldStart={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
