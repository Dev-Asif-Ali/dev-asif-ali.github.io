import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { Bluetooth, Box, Cloud, Code, Code2, CreditCard, Database, FileJson, Fingerprint, Infinity as InfinityIcon, Layers, Lock, Monitor, Plug, Server, ShieldCheck, Smartphone, Sparkles, Store, Undo2 } from 'lucide-react'
import { SiDart, SiFirebase, SiFlutter, SiJira, SiKotlin, SiOpenjdk, SiSpring, SiSwift, SiTrello } from 'react-icons/si'
import { useState, type ComponentType, type MouseEvent } from 'react'
import { skillsContent, type Skill, type SkillCategory } from '../data/content'
import { GradientHeading } from './ui/GradientHeading'
import { staggerItem } from './ui/Reveal'

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  kotlin: SiKotlin,
  java: SiOpenjdk,
  springboot: SiSpring,
  swift: SiSwift,
  flutter: SiFlutter,
  dart: SiDart,
  firebase: SiFirebase,
  trello: SiTrello,
  jira: SiJira,
  box: Box,
  server: Server,
  'file-json': FileJson,
  layers: Layers,
  monitor: Monitor,
  'shield-check': ShieldCheck,
  'code-2': Code2,
  database: Database,
  lock: Lock,
  'undo-2': Undo2,
  infinity: InfinityIcon,
  code: Code,
  sdk: Code2,
  'android-studio': Smartphone,
  xcode: Code2,
  figma: Layers,
  git: Code2,
  claude: Sparkles,
  chatgpt: Sparkles,
  antigravity: InfinityIcon,
  codex: Code2,
  bluetooth: Bluetooth,
  fingerprint: Fingerprint,
  'credit-card': CreditCard,
  plug: Plug,
  cloud: Cloud,
  'app-store': Smartphone,
  'play-store': Store,
}

const BRAND_COLORS: Record<string, string> = {
  kotlin: 'text-violet-500',
  java: 'text-red-500',
  springboot: 'text-emerald-600',
  swift: 'text-orange-500',
  flutter: 'text-sky-500',
  dart: 'text-blue-600',
  firebase: 'text-amber-500',
  trello: 'text-blue-600',
  jira: 'text-blue-600',
  sdk: 'text-neutral-700',
  'android-studio': 'text-emerald-600',
  xcode: 'text-sky-600',
  figma: 'text-fuchsia-500',
  git: 'text-orange-600',
  claude: 'text-amber-600',
  chatgpt: 'text-emerald-600',
  antigravity: 'text-violet-600',
  codex: 'text-neutral-700',
  bluetooth: 'text-blue-600',
  fingerprint: 'text-indigo-600',
  'credit-card': 'text-emerald-700',
  plug: 'text-orange-600',
  cloud: 'text-sky-600',
  'app-store': 'text-slate-700',
  'play-store': 'text-green-600',
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const prefersReducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 220, damping: 22 })
  const Icon = ICONS[skill.icon] ?? Code2
  const iconColor = BRAND_COLORS[skill.icon] ?? 'text-neutral-700'
  const isPrimary = skill.priority === 'primary'

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <motion.div
      variants={staggerItem}
      onMouseMove={handleMove}
      onMouseLeave={() => { pointerX.set(0); pointerY.set(0) }}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      whileHover={prefersReducedMotion ? undefined : { y: -7 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22, delay: index * 0.02 }}
      className={`group relative min-h-36 overflow-hidden rounded-2xl border bg-white p-5 text-left shadow-[0_14px_32px_-22px_rgba(15,23,42,0.45)] transition-colors ${isPrimary ? 'border-sky-200/80' : 'border-black/5'}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-300/0 blur-2xl transition-all duration-500 group-hover:bg-sky-300/30" />
      <div className="relative flex items-start justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 ${iconColor} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
          <Icon className="h-6 w-6" />
        </span>
        {isPrimary && <span className="rounded-full bg-sky-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-600">Focus</span>}
      </div>
      <p className="relative mt-5 text-sm font-bold text-neutral-900">{skill.label}</p>
      <p className="relative mt-1 max-w-[16rem] text-xs leading-relaxed text-neutral-500 transition-colors group-hover:text-neutral-700">{skill.description}</p>
    </motion.div>
  )
}

function Category({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-neutral-950">{category.label}</h3>
          <p className="mt-1 text-sm text-neutral-500">{category.description}</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{String(category.skills.length).padStart(2, '0')} tools</span>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {category.skills.map((skill, index) => <SkillCard key={skill.label} skill={skill} index={index} />)}
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-24 sm:py-32">
      <div className="pointer-events-none absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-80 w-80 rounded-full bg-sky-200/30 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-600">The toolkit</p>
            <GradientHeading gradientClassName="from-sky-500 to-violet-500" className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              {skillsContent.heading}
            </GradientHeading>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">{skillsContent.intro}</p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto border-b border-neutral-200 pb-3 [scrollbar-width:none]">
          {skillsContent.categories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${activeCategory === index ? 'bg-[#101419] text-white shadow-lg' : 'bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[360px]">
          <Category category={skillsContent.categories[activeCategory]} />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-500" />Primary focus: Flutter, Kotlin, Swift, Java</span>
          <span>Spring Boot supports the product layer</span>
        </div>
      </div>
    </section>
  )
}
