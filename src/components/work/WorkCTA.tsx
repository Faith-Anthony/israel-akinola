import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const WorkCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="container-max max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass-panel p-6 sm:p-10 md:p-20 rounded-[2rem] md:rounded-[3rem] text-center space-y-6 sm:space-y-10 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary-container/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-on-surface leading-tight">
              Building systems that scale across people, institutions, and nations.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-on-surface px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-surface transition-all hover:bg-primary-container hover:shadow-xl shadow-lg"
                >
                  Start a Conversation
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
