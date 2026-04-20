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
    <section className="py-12 md:py-20 bg-surface-dim/20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-10 md:mb-16 lg:mb-24 text-center"
        >
          <p className="text-[10px] font-bold tracking-[0.4em] text-primary-container mb-4">
            Legacy of leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface mb-6">
            Selected work
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Strategic systems and initiatives across education, finance, and policy.
          </p>
        </motion.div>

        {/* Work List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {selectedWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              className="glass-panel p-6 sm:p-8 rounded-[2rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center sm:items-start relative z-10">
                {/* Index & Logo */}
                <div className="flex items-center gap-6">
                  <div className="text-5xl md:text-6xl font-serif font-bold text-on-surface/10 group-hover:text-primary-container/20 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <motion.div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white p-4 shadow-sm group-hover:shadow-md transition-all">
                    <img
                      src={work.logo}
                      alt={work.title}
                      className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left pt-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl">
                    {work.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden sm:flex self-center">
                  <span className="material-symbols-outlined text-on-surface/20 group-hover:text-primary-container group-hover:translate-x-2 transition-all duration-300 text-3xl">
                    arrow_forward
                  </span>
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
          className="mt-10 md:mt-16 lg:mt-20 text-center"
        >
          <Link to="/work">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-primary-container px-10 py-4 text-[11px] font-bold tracking-[0.25em] text-on-primary transition-all hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.3)] shadow-lg"
            >
              View all case studies
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
