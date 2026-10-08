import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export function StaggerGroup({ children, className, staggerDelay = 0.08, once = true }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}
