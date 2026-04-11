import React from 'react'
import { motion } from 'framer-motion'

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Deep analysis of the problem and context',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Strategic system creation and modeling',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Implementation with precision',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'Optimization and expansion',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface">
            Approach
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-lg bg-surface border border-surface-container-high hover:border-primary-container/30 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-5xl font-serif font-bold text-primary-container mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-serif font-bold italic text-on-surface mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-on-surface-variant text-base leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line (desktop only) */}
              {index < approachSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary-container/20"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
