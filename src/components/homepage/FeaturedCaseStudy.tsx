import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearImage from '../../assets/images/Golearn.jpg'

export const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface-container">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-primary-container mb-4 font-semibold">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface">
            Golearn
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          whileHover={{ y: -8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-surface border border-surface-container-high rounded-lg overflow-hidden shadow-lg transition-smooth hover:shadow-2xl hover:border-primary-container/50 group">
            {/* Case Study Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="h-64 md:h-80 relative overflow-hidden"
            >
              <img
                src={golearImage}
                alt="Golearn Case Study"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-12"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-xs uppercase tracking-widest text-primary-container mb-3 font-semibold"
              >
                Case Study
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-3xl md:text-4xl font-serif font-bold italic text-on-surface mb-4"
              >
                Featured Impact: Golearn
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg text-on-surface-variant mb-6 leading-relaxed"
              >
                Golearn is a leading African EdTech social enterprise dedicated to eradicating poverty and cybercrime by providing accessible world-class technical education.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary-container material-symbols-outlined">
                    check_circle
                  </span>
                  <span className="text-sm font-semibold text-on-surface">Curriculum Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container material-symbols-outlined">
                    check_circle
                  </span>
                  <span className="text-sm font-semibold text-on-surface">Platform Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container material-symbols-outlined">
                    check_circle
                  </span>
                  <span className="text-sm font-semibold text-on-surface">Community Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container material-symbols-outlined">
                    check_circle
                  </span>
                  <span className="text-sm font-semibold text-on-surface">Execution Roadmap</span>
                </div>
              </motion.div>

              <Link to="/work">
                <motion.div
                  whileHover={{ scale: 1.02, gap: '12px' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-3 bg-primary-container text-on-primary font-semibold rounded-lg transition-smooth cursor-pointer gap-2"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
