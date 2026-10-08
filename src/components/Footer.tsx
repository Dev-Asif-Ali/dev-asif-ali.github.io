import { ArrowUp } from 'lucide-react'
import { personal } from '../data/content'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/10 bg-[#101419] px-6 py-8 text-white sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{personal.name}</p>
          <p className="mt-1 text-neutral-500">Building useful digital experiences.</p>
        </div>
        <div className="flex items-center justify-between gap-6 text-neutral-500 sm:justify-end">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-sky-300 hover:text-sky-300"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
