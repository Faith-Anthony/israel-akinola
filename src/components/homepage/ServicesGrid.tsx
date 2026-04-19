import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'Strategy',
    icon: 'lightbulb',
    description: 'Crafting long-term visions and actionable roadmaps that turn ambitions into tangible outcomes.',
  },
  {
    title: 'Consultation',
    icon: 'chat',
    description: 'Expert guidance on positioning, decision-making, and navigating complex organizational challenges.',
  },
  {
    title: 'Project Management',
    icon: 'assignment',
    description: 'End-to-end delivery orchestration—timelines, stakeholders, and quality assured at every stage.',
  },
  {
    title: 'Systems Design',
    icon: 'architecture',
    description: 'Architecting scalable systems and processes that grow with your organization and mission.',
  },
  {
    title: 'Branding',
    icon: 'palette',
    description: 'Building identities that resonate, differentiate, and create lasting emotional connections.',
  },
  {
    title: 'Policy',
    icon: 'gavel',
    description: 'Developing frameworks and guidelines that drive compliance, equity, and sustainable governance.',
  },
]

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const handleType = () => {
      const currentLength = displayText.length

      if (!isDeleting && currentLength === text.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false)
        timeout = setTimeout(handleType, 500)
      } else {
        const nextText = isDeleting
          ? text.substring(0, currentLength - 1)
          : text.substring(0, currentLength + 1)

        setDisplayText(nextText)
        const typingSpeed = isDeleting ? 30 : 50
        timeout = setTimeout(handleType, typingSpeed + Math.random() * 20)
      }
    }

    timeout = setTimeout(handleType, 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, text])

  return (
    <span className="inline-block min-h-[48px]">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-0.5 h-4 ml-1 bg-primary-container align-middle"
      />
    </span>
  )
}

export const ServicesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-surface-container-lowest py-16 sm:py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-on-surface-variant">
            Expertise
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-on-surface sm:text-5xl">
            The Strategic Framework
          </h2>
          <div className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            <TypewriterText text="Leveraging cross-disciplinary expertise to navigate complex global challenges and deliver sustainable impact." />
          </div>
        </motion.div>

        {/* Services Grid — hover-to-reveal reel cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const isOpen = hoveredIndex === index
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-surface-container/30 backdrop-blur-2xl transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                {/* Ambient glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-container/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header row — always visible */}
                <div className="relative z-10 flex items-center gap-4 p-6">
                  <motion.div
                    animate={{ scale: isOpen ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-on-surface-variant transition-colors duration-300 group-hover:bg-primary-container/10 group-hover:text-primary-container"
                  >
                    <span className="material-symbols-outlined text-xl">{service.icon}</span>
                  </motion.div>

                  <h3 className="font-display text-lg font-semibold tracking-tight text-on-surface">
                    {service.title}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </motion.span>
                </div>

                {/* Expand panel — slides open on hover */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.06] px-6 pb-6 pt-4">
                        <p className="text-sm leading-relaxed text-on-surface-variant">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
