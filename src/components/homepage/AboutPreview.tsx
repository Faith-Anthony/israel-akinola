import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/profile2.JPG'

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface-container">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Updated */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="h-96 md:h-full rounded-lg overflow-hidden relative group"
          >
            <img
              src={profileImage}
              alt="Israel Akinola"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
            />

            {/* Orange border glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 border-2 border-primary-container/0 group-hover:border-primary-container/50 rounded-lg transition-all duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface"
            >
              A Cultural Engineer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Israel Akinola is a thinker, strategist, and cultural engineer designing systems that elevate the human experience through leadership, innovation, and systemic change.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                With expertise spanning strategy, technology, and human-centered design, I work with organizations and individuals to build transformative solutions that matter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-8 py-6 border-t border-surface-container-high"
            >
              <div>
                <p className="text-3xl font-serif font-bold text-primary-container">10+</p>
                <p className="text-sm text-on-surface-variant">Years of Impact</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary-container">50+</p>
                <p className="text-sm text-on-surface-variant">Projects Led</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: '#ff8c00' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-3 border-2 border-primary-container text-primary-container font-semibold rounded-lg transition-smooth cursor-pointer hover:bg-primary-container hover:text-on-primary"
                >
                  Learn More
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
