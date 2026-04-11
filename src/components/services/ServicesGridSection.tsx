import React from 'react'
import { motion } from 'framer-motion'

const services = [
  'Strategy',
  'Consultation',
  'Project Management',
  'Design Thinking',
  'Systems Design',
  'Writing',
  'Legal Services',
  'Media',
  'Branding',
  'Marketing',
  'Policy',
  'Ideation',
  'Curation',
  'Creation',
  'Execution',
  'Finance',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const ServicesGridSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface">
            Core Offerings
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(255, 140, 0, 0.5)',
              }}
              className="p-6 md:p-8 rounded-lg bg-surface border border-surface-container-high hover:border-primary-container/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <p className="text-xl md:text-2xl font-serif font-bold text-on-surface group-hover:text-primary-container transition-colors duration-300">
                {service}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
