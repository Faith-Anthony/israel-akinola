import React from 'react'
import { motion } from 'framer-motion'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-surface/50">
      <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.div
            variants={fadeInUpVariants}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold italic leading-tight"
          >
            <p className="text-on-surface">Israel Akinola,</p>
            <p className="text-on-surface-variant">a symphony of gifts and graces.</p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-primary-container font-medium text-xl sm:text-2xl block mb-2">
              Strategist. Architect of Impact. Voice of Transformation.
            </span>{' '}
            <span className="text-on-surface-variant">
              A leader dedicated to the art of human elevation.
            </span>
          </motion.p>

          {/* Intro text */}
          <motion.p
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed italic font-light"
          >
            Designing systems that elevate the functional quality of human existence and human
            experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
