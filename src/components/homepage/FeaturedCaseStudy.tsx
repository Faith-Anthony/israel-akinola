import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearImage from '../../assets/images/Golearn.jpg'

export const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="bg-surface-dim py-8 sm:py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8 text-center"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-on-surface-variant">
            Featured Work
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-on-surface sm:text-5xl">
            Golearn
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl"
        >
          <div className="group overflow-hidden rounded-[1.75rem] bg-surface-container/20 ring-1 ring-white/5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:ring-white/10 sm:rounded-[2rem]">
            {/* Case Study Image */}
            <motion.div
              className="relative h-48 overflow-hidden sm:h-64 md:h-72"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={golearImage}
                alt="Golearn Case Study"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-8 md:p-10"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant"
              >
                Case Study
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-5 font-display text-2xl font-semibold uppercase tracking-tight text-on-surface sm:text-3xl md:text-4xl"
              >
                Featured Impact: Golearn
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mb-8 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base"
              >
                Golearn is a leading African EdTech social enterprise dedicated to eradicating poverty and cybercrime by providing accessible world-class technical education.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mb-10 grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4"
              >
                <div className="flex items-center gap-2 border-l-2 border-on-surface/10 pl-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface">Curriculum</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-on-surface/10 pl-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface">Strategy</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-on-surface/10 pl-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface">Community</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-on-surface/10 pl-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface">Roadmap</span>
                </div>
              </motion.div>

              <Link to="/work" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-container px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-primary transition-transform"
                >
                  View Case Study
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

