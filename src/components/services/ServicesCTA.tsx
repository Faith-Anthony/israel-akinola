import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const ServicesCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-8"
        >
          {/* Main Text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold italic text-on-surface leading-tight">
            Building systems that move people, institutions, and markets.
          </h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-on-surface text-surface font-bold rounded-lg text-lg transition-all duration-300 hover:bg-primary-container hover:shadow-lg"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
