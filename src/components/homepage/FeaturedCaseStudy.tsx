import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearn from '../../assets/images/Golearn.jpg'
import gotap from '../../assets/images/GoTap.jpg'
import tax from '../../assets/images/tax.jpg'

const featuredWork = [
  {
    id: 1,
    title: 'Featured Impact: Golearn',
    subtitle: 'Golearn',
    description: 'Golearn is a leading African EdTech social enterprise dedicated to eradicating poverty and cybercrime by providing accessible world-class technical education.',
    image: golearn,
    link: '/work/golearn',
    tags: ['Curriculum', 'Strategy', 'Community', 'Roadmap'],
    color: 'primary-container'
  },
  {
    id: 2,
    title: 'Featured Impact: TapperX',
    subtitle: 'TapperX (Wema Bank)',
    description: 'A financial technology initiative focused on bridging the gap between digital banking and financial inclusion across diverse demographics.',
    image: gotap,
    link: '/work/tapperx',
    tags: ['Fintech', 'Inclusion', 'Strategy', 'UX'],
    color: 'secondary-container'
  },
  {
    id: 3,
    title: 'Featured Impact: NTPIC',
    subtitle: 'National Tax Policy',
    description: 'Strategic implementation of national tax systems, optimizing institutional structures for efficient policy delivery and compliance.',
    image: tax,
    link: '/work/ntpic',
    tags: ['Policy', 'Institutional', 'Execution', 'Systems'],
    color: 'primary-container'
  }
]

export const FeaturedCaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredWork.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const current = featuredWork[currentIndex]

  return (
    <section className="bg-surface-dim py-8 sm:py-16 overflow-hidden">
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
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-on-surface sm:text-5xl"
            >
              {current.subtitle}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Slider Container */}
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[1.75rem] bg-surface/80 ring-1 ring-on-surface/5 shadow-lg transition-all duration-300 hover:ring-on-surface/10 sm:rounded-[2rem]"
            >
              {/* Case Study Image */}
              <div className="relative h-48 overflow-hidden sm:h-64 md:h-72">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  src={current.image}
                  alt={current.subtitle}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant">
                  Case Study
                </p>

                <h3 className="mb-5 font-display text-2xl font-semibold uppercase tracking-tight text-on-surface sm:text-3xl md:text-4xl">
                  {current.title}
                </h3>

                <p className="mb-8 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
                  {current.description}
                </p>

                <div className="mb-10 grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4">
                  {current.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-2 border-l-2 border-on-surface/10 pl-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface">{tag}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Link to={current.link} data-cursor-hover>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-container px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-primary transition-transform sm:w-auto"
                    >
                      View Case Study
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </motion.span>
                  </Link>

                  {/* Navigation dots */}
                  <div className="flex justify-center gap-2">
                    {featuredWork.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentIndex === idx ? 'w-8 bg-primary-container' : 'w-2 bg-on-surface/20'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual controls (optional but good for UX) */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + featuredWork.length) % featuredWork.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/10 bg-surface/80 text-on-surface-variant backdrop-blur-sm transition-all hover:bg-surface hover:text-on-surface hover:shadow-lg"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % featuredWork.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/10 bg-surface/80 text-on-surface-variant backdrop-blur-sm transition-all hover:bg-surface hover:text-on-surface hover:shadow-lg"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}
