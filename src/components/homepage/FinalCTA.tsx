import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface-container-high relative overflow-hidden">
      {/* Decorative background element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl -mr-48 -mt-48"
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic text-on-surface mb-8 leading-tight">
            Building systems that shape
            <br />
            <span className="text-primary-container">people, nations, and the future.</span>
          </h2>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Let's collaborate to create meaningful impact through strategic thinking and execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary-container text-on-primary font-semibold rounded-lg transition-smooth cursor-pointer text-lg"
              >
                Start a Conversation
              </motion.div>
            </Link>
            <a href="/about">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-primary-container text-primary-container font-semibold rounded-lg transition-smooth cursor-pointer text-lg hover:bg-primary-container hover:text-on-primary"
              >
                Learn About My Approach
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
