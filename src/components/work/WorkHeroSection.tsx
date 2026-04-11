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

export const WorkHeroSection: React.FC = () => {
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
          <motion.h1
            variants={fadeInUpVariants}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold italic text-on-surface leading-tight"
          >
            Work & Case Studies
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-primary-container"
          >
            Systems. Strategy. Execution in action.
          </motion.p>

          {/* Intro text */}
          <motion.p
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            A selection of high-impact projects and collaborations across education, finance, and
            national policy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
