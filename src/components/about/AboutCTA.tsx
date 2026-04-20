import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container-max max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass-panel p-10 md:p-20 rounded-[3rem] text-center space-y-10 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-primary-container/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-on-surface leading-tight">
              Building systems that shape people, institutions, and nations.
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
                  className="inline-flex items-center gap-3 rounded-full bg-on-surface px-10 py-5 text-[11px] font-bold tracking-[0.25em] text-surface transition-all hover:bg-primary-container hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.3)] shadow-lg"
                >
                  Work with me
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
