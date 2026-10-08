import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type TypewriterTextProps = {
  phrases: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  phrases,
  className,
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseDuration = 1800,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    if (prefersReducedMotion) return
    const current = phrases[index % phrases.length]
    let timeout: number

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = window.setTimeout(() => setPhase('deleting'), pauseDuration)
      }
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
      } else {
        setPhase('typing')
        setIndex((i) => (i + 1) % phrases.length)
      }
    }

    return () => window.clearTimeout(timeout)
  }, [text, phase, index, phrases, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
      </span>
      <span className="sr-only">{phrases[0]}</span>
    </span>
  )
}
