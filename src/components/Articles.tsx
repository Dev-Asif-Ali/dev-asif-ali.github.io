import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { articlesContent } from '../data/content'
import { Reveal } from './ui/Reveal'

type MediumFeedItem = {
  title: string
  link: string
  pubDate: string
  thumbnail?: string
  description?: string
  categories?: string[]
}

const stripHtml = (value?: string) =>
  (value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

const extractImageFromDescription = (description?: string) => {
  const match = (description ?? '').match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  return match?.[1] ?? ''
}

const optimizeImageUrl = (url?: string) => {
  if (!url) return ''

  const optimized = url.replace(/\/max\/\d+\//i, '/max/600/')

  return optimized.includes('cdn-images-1.medium.com') ? optimized : url
}

export function Articles() {
  const [articles, setArticles] = useState<Array<{ tag: string; date: string; title: string; excerpt: string; image: string; url: string }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const fetchMediumArticles = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aasifalee.114')
        if (!response.ok) throw new Error('Medium feed unavailable')

        const data = await response.json()
        const feedItems: MediumFeedItem[] = Array.isArray(data?.items) ? data.items.slice(0, 3) : []

        if (!active || feedItems.length === 0) return

        const nextArticles = feedItems.map((item) => {
          const cleanDescription = stripHtml(item.description)

          return {
            tag: item.categories?.[0] ?? 'Medium',
            date: new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            title: stripHtml(item.title),
            excerpt: cleanDescription.slice(0, 180) + (cleanDescription.length > 180 ? '…' : ''),
            image: optimizeImageUrl(item.thumbnail || extractImageFromDescription(item.description) || ''),
            url: item.link,
          }
        })

        setArticles(nextArticles)
      } catch (error) {
        console.warn('Unable to load Medium posts, using fallback content.', error)
      } finally {
        if (active) setLoading(false)
      }
    }

    fetchMediumArticles()

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-5xl">{articlesContent.heading}</h2>
          <p className="mt-3 text-neutral-500">{articlesContent.subheading}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {articles.map((article, i) => (
            <Reveal key={`${article.title}-${i}`} delay={i * 0.05} y={36}>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.2)] ring-1 ring-black/5"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={i === 0 ? 'high' : 'low'}
                    sizes="(max-width: 768px) 100vw, 860px"
                    className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-brand-blue-dark">
                      {article.tag}
                    </span>
                    <span className="text-neutral-400">{article.date}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-ink">{article.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{article.excerpt}</p>
                  <motion.span
                    className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-blue-dark"
                    whileHover="hover"
                  >
                    Read More
                    <motion.span variants={{ hover: { x: 4 } }} className="inline-flex">
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {loading && (
          <p className="mt-6 text-sm text-neutral-400">Loading latest Medium posts…</p>
        )}
      </div>
    </section>
  )
}
