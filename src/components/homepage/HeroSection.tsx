import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/images/backgroundhero.JPG'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: 0.6,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-surface/50 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Main heading */}
        <motion.h1
          variants={fadeInUpVariants}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold italic text-on-surface mb-4 leading-tight"
        >
          Israel Akinola.
        </motion.h1>

        {/* Subheading - Staggered Words in Orange */}
        <motion.div className="mb-8 space-y-0">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Thinker.', 'Strategist.', 'Leader.'].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 + index * 0.15, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-primary-container"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Intro text */}
        <motion.p
          variants={fadeInUpVariants}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed italic font-light"
        >
          Designing systems that transform ideas into impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUpVariants}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-on-surface text-surface font-semibold rounded-lg transition-all duration-300 cursor-pointer hover:bg-primary-container hover:text-on-primary"
            >
              Start a Conversation
            </motion.button>
          </Link>
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-on-surface text-on-surface font-semibold rounded-lg transition-all duration-300 cursor-pointer hover:bg-primary-container hover:border-primary-container hover:text-on-primary"
            >
              Learn About My Approach
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-3xl">
            expand_more
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
