import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, suffix = '', duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setValue(to)
      return
    }

    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, to, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
