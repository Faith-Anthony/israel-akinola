import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/profile2.JPG'

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-surface-dim py-12 sm:py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[2rem] border border-white/[0.06] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.6)] md:grid-cols-2">
          
          {/* Profile Image — full height, no crop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="group relative min-h-[24rem] overflow-hidden md:min-h-[32rem]"
          >
            <img
              src={profileImage}
              alt="Israel Akinola"
              className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
              decoding="async"
            />
            {/* Dark overlay gradient for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/5" />
          </motion.div>

          {/* Content panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-center bg-surface-container-high/40 px-8 py-10 backdrop-blur-sm sm:px-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container"
            >
              The Architect
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-on-surface sm:text-4xl"
            >
              A Cultural
              <br />
              <span className="text-on-surface/60">Engineer</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 h-px w-12 origin-left bg-primary-container/60"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">
                Israel Akinola is a thinker, strategist, and cultural engineer designing systems that elevate the human experience through leadership, innovation, and systemic change.
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant/70">
                With expertise spanning strategy, technology, and human-centered design, I work with organizations and individuals to build transformative solutions that matter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex gap-8 border-t border-white/[0.06] pt-6"
            >
              <div>
                <p className="font-display text-3xl font-semibold text-on-surface">10+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Years of Impact</p>
              </div>
              <div className="w-px bg-white/[0.06]" />
              <div>
                <p className="font-display text-3xl font-semibold text-on-surface">50+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Projects Led</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Link to="/about" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
