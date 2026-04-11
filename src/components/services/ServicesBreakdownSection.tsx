import React from 'react'
import { motion } from 'framer-motion'

const serviceCategories = [
  {
    title: 'Strategy & Systems',
    description: 'Foundational thinking and systemic approaches',
    services: ['Strategy', 'Systems Design', 'Policy', 'Ideation'],
  },
  {
    title: 'Execution & Operations',
    description: 'Implementation and operational excellence',
    services: ['Project Management', 'Execution', 'Finance', 'Consultation'],
  },
  {
    title: 'Creative & Communication',
    description: 'Brand expression and content creation',
    services: ['Writing', 'Media', 'Branding', 'Marketing', 'Curation', 'Creation'],
  },
  {
    title: 'Advisory & Specialized',
    description: 'Expert guidance across domains',
    services: ['Legal Services', 'Design Thinking'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const ServicesBreakdownSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface-container">
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
            Service Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="p-8 rounded-lg bg-surface border border-surface-container-high hover:border-primary-container/30 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-on-surface mb-3">
                {category.title}
              </h3>

              {/* Category Description */}
              <p className="text-on-surface-variant text-base mb-6">
                {category.description}
              </p>

              {/* Services List */}
              <div className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-container rounded-full flex-shrink-0" />
                    <p className="text-on-surface-variant text-base">{service}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
