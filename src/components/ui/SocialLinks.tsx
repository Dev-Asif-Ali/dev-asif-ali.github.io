import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMedium, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import type { SocialLink } from '../../data/content'

const ICONS: Record<SocialLink['icon'], ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  medium: FaMedium,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
}

type SocialLinksProps = {
  links: SocialLink[]
  className?: string
  itemClassName?: string
}

export function SocialLinks({ links, className, itemClassName }: SocialLinksProps) {
  return (
    <ul className={className}>
      {links.map((link, i) => {
        const Icon = ICONS[link.icon]
        return (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.name}
              className={
                itemClassName ??
                'flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-sm ring-1 ring-black/5'
              }
              whileHover={{ y: -3, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          </motion.li>
        )
      })}
    </ul>
  )
}
