import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const insights = [
  {
    category: 'LEADERSHIP',
    title: 'Leading is first a Personal Art',
    description:
      'The foundation of effective organizational leadership begins with internal mastery. Exploring the philosophical depths of personal...',
  },
  {
    category: 'AESTHETICS',
    title: 'Multiplying Beauty',
    description:
      'How structural harmony and design excellence influence cultural momentum. A deep dive into the intersection of aesthetics and operational...',
  },
  {
    category: 'SYSTEMS',
    title: 'Systems compound. Begin with what you can control.',
    description:
      'Understanding compound effects in organizational design. The strategic approach to building resilient systems that scale with purpose...',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const BlogPreview: React.FC = () => {
  return (
    <section className="bg-surface-container py-16 sm:py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header with Explore Archive */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-on-surface-variant">
              Journal
            </p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-on-surface sm:text-5xl">
              Latest Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-surface transition-colors duration-300 hover:text-on-surface/70"
            data-cursor-hover
          >
            EXPLORE ARCHIVE
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[16px]">arrow_forward</span>
          </Link>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-surface p-8 ring-1 ring-on-surface/5 transition-all duration-300 hover:ring-on-surface/20"
            >
              {/* Category Label */}
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant">
                {insight.category}
              </div>

              {/* Title */}
              <h3 className="mb-4 font-display text-2xl font-semibold uppercase tracking-tight text-on-surface leading-snug">
                {insight.title}
              </h3>

              {/* Description */}
              <p className="mb-8 flex-1 text-sm leading-relaxed text-on-surface-variant">
                {insight.description}
              </p>

              {/* Read More Link */}
              <Link
                to="/blog"
                className="mt-auto inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface transition-all duration-300 hover:gap-3"
                data-cursor-hover
              >
                READ MORE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

