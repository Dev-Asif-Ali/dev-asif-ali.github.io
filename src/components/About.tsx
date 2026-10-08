import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Check, Heart, Layers, Rocket, Server, Smartphone, Sparkles, TrendingUp } from 'lucide-react'
import type { ComponentType, MouseEvent, ReactNode } from 'react'
import { aboutContent } from '../data/content'
import { CountUp } from './ui/CountUp'
import { GradientHeading } from './ui/GradientHeading'
import { Reveal, staggerItem, StaggerGroup } from './ui/Reveal'

const STAT_ICONS = {
  rocket: Rocket,
  'trending-up': TrendingUp,
  heart: Heart,
} as const

const SPECIALTY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  smartphone: Smartphone,
  layers: Layers,
  android: Smartphone,
  apple: Sparkles,
  server: Server,
}

const FLOATING_NODES = [
  { label: 'Flutter', className: 'left-[7%] top-[17%] text-sky-300', delay: 0 },
  { label: 'Kotlin', className: 'right-[12%] top-[11%] text-violet-300', delay: 0.8 },
  { label: 'Swift', className: 'right-[5%] bottom-[18%] text-orange-300', delay: 1.4 },
  { label: 'Java', className: 'left-[15%] bottom-[10%] text-red-300', delay: 0.5 },
]

function TiltPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), { stiffness: 180, damping: 22 })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const reset = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function About() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101419] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:56px_56px]" />
      <motion.div
        initial={{ opacity: 0.1, x: '-20%' }}
        whileInView={{ opacity: 0.35, x: '15%' }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-sky-300">
              <Sparkles className="h-4 w-4" />
              {aboutContent.eyebrow}
            </p>
            <GradientHeading
              gradientClassName="from-sky-300 via-white to-violet-300"
              className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl"
            >
              {aboutContent.label}
            </GradientHeading>
          </Reveal>
          <Reveal delay={0.12} className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">{aboutContent.description}</p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <TiltPanel className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 sm:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(56,189,248,0.15),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.12),transparent_32%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">Developer profile</span>
                <span className="flex items-center gap-2 text-xs text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />Available for good problems</span>
              </div>

              <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-sky-300/40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-7 rounded-full border border-violet-300/30"
                />
                <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-white/15 bg-[#151d26]/90 shadow-[0_0_60px_rgba(56,189,248,0.18)] sm:h-44 sm:w-44">
                  <span className="text-5xl font-black tracking-tight text-white">4<span className="text-sky-300">+</span></span>
                  <span className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">years shipping</span>
                </div>
                {FLOATING_NODES.map((node) => (
                  <motion.span
                    key={node.label}
                    animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4 + node.delay, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute rounded-full border border-white/10 bg-[#17202b]/90 px-3 py-1.5 text-xs font-bold shadow-lg ${node.className}`}
                  >
                    {node.label}
                  </motion.span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {aboutContent.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-xs leading-relaxed text-neutral-400"
                  >
                    <Check className="mb-2 h-4 w-4 text-sky-300" />
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </div>
          </TiltPanel>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {aboutContent.specialties.map((specialty) => {
                const Icon = SPECIALTY_ICONS[specialty.icon] ?? Sparkles
                return (
                  <motion.div
                    key={specialty.label}
                    variants={staggerItem}
                    whileHover={{ x: 6, borderColor: 'rgba(125,211,252,0.45)' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-white">{specialty.label}</span>
                      <span className="mt-1 block text-xs text-neutral-500">{specialty.detail}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-neutral-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
                  </motion.div>
                )
              })}
            </StaggerGroup>

            <TiltPanel className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/15 to-violet-400/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutContent.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-neutral-200">
                    {item}
                  </span>
                ))}
              </div>
            </TiltPanel>
          </div>
        </div>

        <Reveal delay={0.16} className="mt-16">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-300">
                <BriefcaseBusiness className="h-4 w-4" />
                Selected work
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Products across real-world domains</h3>
            </div>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-600 sm:block">01 — 05</span>
          </div>

          <div className="mt-3 divide-y divide-white/10">
            {aboutContent.workExperience.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                whileHover={{ x: 6 }}
                className="group grid gap-2 py-5 transition-colors sm:grid-cols-[1fr_1fr_1.4fr] sm:items-center"
              >
                <p className="text-base font-bold text-white transition-colors group-hover:text-sky-300">{item.label}</p>
                <p className="text-sm font-medium text-neutral-400">{item.client}</p>
                <p className="text-sm leading-relaxed text-neutral-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
          {aboutContent.stats.map((stat) => {
            const Icon = STAT_ICONS[stat.icon]
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="border-t border-white/15 pt-4"
              >
                <Icon className="h-5 w-5 text-sky-300" />
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl"><CountUp to={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-neutral-500 sm:text-xs">{stat.label}</p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
