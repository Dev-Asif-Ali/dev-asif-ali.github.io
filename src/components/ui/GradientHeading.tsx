import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

type GradientHeadingProps = {
  children: ReactNode
  className?: string
  gradientClassName?: string
  as?: ElementType
}

/** Heading with a gradient fill that fades/slides in when scrolled into view. */
export function GradientHeading({
  children,
  className,
  gradientClassName = 'from-brand-blue to-brand-purple',
  as: Tag = 'h2',
}: GradientHeadingProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion(Tag)

  return (
    <MotionTag
      className={`inline-block bg-linear-to-r bg-clip-text text-transparent ${gradientClassName} ${className ?? ''}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
