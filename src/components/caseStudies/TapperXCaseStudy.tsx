import React from 'react'
import { motion } from 'framer-motion'
import gotap from '../../assets/images/GoTap.jpg'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const TapperXCaseStudy: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-surface/50">
        <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUpVariants} className="h-32 flex items-center justify-center">
              <img
                src={gotap}
                alt="TapperX"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <motion.h1
              variants={fadeInUpVariants}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-on-surface leading-tight"
            >
              TapperX
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-3xl sm:text-4xl font-serif font-bold text-primary-container"
            >
              Reimagining Digital Payments in Nigeria
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto"
            >
              A tap-and-scan payment solution built to compete with leading fintech platforms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container-max max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-on-surface">
              Overview
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              TapperX is a financial technology solution developed in collaboration with Wema Bank
              to bridge the gap between traditional banking and digital inclusion, focusing on
              seamless, user-centric experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 md:py-20 bg-surface-container">
        <div className="container-max max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-10"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-on-surface">
              The Challenge
            </h2>

            <div className="space-y-6">
              {[
                'Complex onboarding processes for new users',
                'Low adoption rates in underbanked demographics',
                'Fragmented user experience across digital touchpoints',
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-3 h-3 bg-secondary-container rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-on-surface-variant leading-relaxed">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Solutions Section */}
      <section className="py-12 md:py-20">
        <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-on-surface">
              Strategic Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Simplified UX/UI for universal accessibility',
                'Strategic integration with Wema ALAT ecosystem',
                'Localized marketing and onboarding campaigns',
                'Data-driven feature optimization',
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-surface border border-surface-container-high hover:border-secondary-container/30 transition-all duration-300"
                >
                  <p className="text-xl font-serif font-bold text-on-surface leading-relaxed">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-12 md:py-20 bg-surface-container">
        <div className="container-max max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-10"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-on-surface">
              Execution
            </h2>

            <div className="space-y-6">
              {[
                'Conducted extensive user research in targeted zones',
                'Redesigned the primary interface for clarity',
                'Collaborated with engineering to optimize performance',
                'Launched community-led onboarding events',
              ].map((execution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-3xl font-serif font-bold text-secondary-container/30 min-w-fit">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed pt-1">{execution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-20">
        <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-on-surface">
              Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '40%', label: 'Increase in Onboarding' },
                { number: '250k+', label: 'Active Monthly Users' },
                { number: '4.8/5', label: 'User Satisfaction Rating' },
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg bg-surface border border-surface-container-high text-center"
                >
                  <p className="text-4xl md:text-5xl font-serif font-bold text-secondary-container mb-3">
                    {impact.number}
                  </p>
                  <p className="text-lg text-on-surface-variant font-medium">{impact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-surface-container">
        <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-on-surface leading-tight">
              Designing systems for modern economies.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-on-surface text-surface font-bold rounded-lg text-lg transition-all duration-300 hover:bg-primary-container hover:shadow-lg"
                >
                  Work With Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
