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
    services: ['Legal Expertise', 'Design Thinking'],
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
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10 md:mb-16 lg:mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            Methodologies & Competencies
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Expertise Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-on-surface mb-4 group-hover:text-primary-container transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-container rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <p className="text-on-surface-variant text-base group-hover/item:text-on-surface transition-colors">{service}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
