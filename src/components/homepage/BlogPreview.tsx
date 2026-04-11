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
    <section className="py-20 md:py-32 bg-surface">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header with Explore Archive */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface">
            Latest Insights
          </h2>
          <Link
            to="/blog"
            className="text-primary-container font-semibold text-sm md:text-base uppercase tracking-wider hover:text-on-surface transition-colors duration-300"
          >
            EXPLORE ARCHIVE
          </Link>
        </motion.div>

        {/* Insights Grid - 2 columns on larger screens */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-surface-container border-l-4 border-primary-container rounded-none transition-all duration-300 hover:border-on-surface"
            >
              <div>
                {/* Category Label */}
                <div className="text-xs font-bold text-primary-container mb-4 tracking-widest">
                  {insight.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-on-surface mb-6 leading-tight">
                  {insight.title}
                </h3>

                {/* Description */}
                <p className="text-on-surface-variant text-base leading-relaxed mb-6 font-light">
                  {insight.description}
                </p>

                {/* Read More Link */}
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary-container font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300 hover:text-on-surface"
                >
                  READ MORE <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
