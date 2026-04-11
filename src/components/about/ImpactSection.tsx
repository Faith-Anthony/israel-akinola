import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Counter } from '../common/Counter'

const impactStats = [
  {
    number: 50000,
    label: 'Young People Impacted',
    suffix: '+',
  },
  {
    number: 4000,
    label: 'Digitally Skilled in One Year',
    suffix: '+',
  },
  {
    number: 50,
    label: 'Presence in Institutions',
    suffix: '+',
  },
]

export const ImpactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 bg-surface-container" ref={ref}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold italic text-on-surface">
            Impact
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-lg bg-surface border border-surface-container-high hover:border-primary-container/30 transition-all duration-300"
            >
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-serif font-bold text-primary-container mb-4">
                  <Counter
                    end={stat.number}
                    duration={2.5}
                    isVisible={isInView}
                  />
                  {stat.suffix}
                </p>
                <p className="text-lg text-on-surface font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
