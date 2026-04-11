import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearn from '../../assets/images/Golearn.jpg'
import tapperx from '../../assets/images/GoTap.jpg'
import taxPolicy from '../../assets/images/tax.jpg'

const selectedWork = [
  {
    title: 'Golearn',
    description: 'Transformative digital learning platform',
    logo: golearn,
  },
  {
    title: 'TapperX (Wema Bank)',
    description: 'Financial technology strategic initiative',
    logo: tapperx,
  },
  {
    title: 'National Tax Policy Implementation Committee',
    description: 'Policy systems and institutional design',
    logo: taxPolicy,
  },
]

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold italic text-on-surface mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Strategic systems and initiatives across education, finance, and policy.
          </p>
        </motion.div>

        {/* Work List */}
        <div className="space-y-8 max-w-4xl">
          {selectedWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              className="pb-8 border-b border-surface-container-high last:border-b-0 group"
            >
              <div className="flex gap-6 md:gap-8 items-start">
                {/* Index */}
                <div className="text-6xl md:text-7xl font-serif font-bold text-surface-container-high group-hover:text-primary-container/30 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Logo */}
                <motion.img
                  src={work.logo}
                  alt={work.title}
                  className="h-20 w-20 md:h-24 md:w-24 object-contain flex-shrink-0 mt-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                />

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-on-surface mb-2 group-hover:text-primary-container transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-lg text-on-surface-variant">
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-20"
        >
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-primary-container text-surface font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View Case Studies
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
