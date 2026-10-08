import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

/** A simple CSS phone bezel that clips its children (an app screenshot) inside. */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full overflow-hidden rounded-[2.2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl ${className ?? ''}`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
      <div className="h-full w-full overflow-hidden rounded-[1.7rem] bg-white">{children}</div>
    </div>
  )
}
