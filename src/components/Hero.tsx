import { motion } from 'framer-motion'
import { heroContent, personal, socialLinks } from '../data/content'
import { PhoneFrame } from './ui/PhoneFrame'
import { SocialLinks } from './ui/SocialLinks'
import { TypewriterText } from './ui/TypewriterText'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * A diagonally-rotated scrolling band of branded app mockups. Duplicating the
 * cards keeps the loop seamless while giving the section a richer, more premium
 * marquee effect similar to finance and lifestyle product showcases.
 */
function PhoneBelt() {
  const beltItems = [...heroContent.brandCards, ...heroContent.brandCards]

  return (
    <div className="absolute left-1/2 top-1/2 h-[max(420%,155vh)] w-[clamp(180px,24vw,320px)] origin-center -translate-x-[45%] -translate-y-[45%] rotate-[50deg] overflow-hidden">
      <div
        className="flex w-full flex-col items-center gap-5"
        style={{ height: 'max-content', animation: 'ticker-scroll 30s linear infinite' }}
      >
        {beltItems.map(({ name, src, accentClass }, i) => (
          <div key={`${name}-${i}`} className="w-full shrink-0">
            <div className={`mb-3 flex items-center justify-between rounded-full bg-gradient-to-r ${accentClass} px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg`}>
              <span>{name}</span>
              <span className="h-2 w-2 rounded-full bg-white/80" />
            </div>
            <PhoneFrame className="!aspect-[9/18]">
              <img src={src} alt={name} className="h-full w-full object-cover" draggable={false} />
            </PhoneFrame>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[500px] sm:h-[440px] lg:h-[520px] lg:max-w-[640px]">
      <PhoneBelt />

      {/* profile avatar with pulsing ring, fixed on top of the scrolling belt */}
      <motion.div
        className="absolute right-[12%] top-0 z-10 h-32 w-32 sm:h-40 sm:w-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 animate-pulse-ring rounded-[2.2rem] border-2 border-brand-lime" />
          <div className="absolute inset-2 overflow-hidden rounded-[1.8rem] border-4 border-white bg-white shadow-xl">
          <img src={personal.profileImage} alt={personal.name} className="h-full w-full object-cover object-top" />
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-hero pt-28 pb-16 sm:pt-32 lg:min-h-screen lg:pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-12">
        <div className="relative z-10">
          <div className="flex gap-6 sm:hidden">
            <SocialLinks
              links={socialLinks}
              className="flex shrink-0 list-none flex-col gap-3 p-0"
              itemClassName="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-sm ring-1 ring-black/5"
            />
            <HeroCopy />
          </div>
          <div className="hidden sm:block">
            <HeroCopy />
            <SocialLinks links={socialLinks} className="mt-8 flex list-none gap-3 p-0" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="text-[clamp(0.95rem,2.4vw,1.25rem)] text-neutral-400"
      >
        <TypewriterText phrases={heroContent.typedPhrases} />
      </motion.p>

      <h1 className="mt-3 text-[clamp(1.75rem,5.5vw,3.75rem)] font-extrabold leading-[1.1] text-ink">
        {heroContent.headingLines.map((line, i) => (
          <motion.span
            key={line}
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE }}
          >
            {line}
          </motion.span>
        ))}
      </h1>

      <motion.a
        href={personal.resumeUrl}
        download
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-block rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {heroContent.ctaLabel}
      </motion.a>
    </div>
  )
}
