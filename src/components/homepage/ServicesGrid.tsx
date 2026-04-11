import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Strategy', icon: 'lightbulb' },
  { title: 'Consultation', icon: 'chat' },
  { title: 'Project Management', icon: 'assignment' },
  { title: 'Systems Design', icon: 'architecture' },
  { title: 'Branding', icon: 'palette' },
  { title: 'Policy', icon: 'gavel' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface">
            The Strategic Framework
          </h2>
          <p className="text-lg text-on-surface-variant mt-4">
            Leveraging cross-disciplinary expertise to navigate complex global challenges
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, borderColor: '#ff8c00' }}
              className="p-6 bg-surface-container-high border-2 border-surface-container-highest rounded-lg transition-smooth cursor-pointer group relative overflow-hidden"
            >
              {/* Animated background glow on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-primary-container blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, color: '#ff8c00' }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 text-3xl text-on-surface-variant"
                >
                  <span className="material-symbols-outlined">{service.icon}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-on-surface mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Professional services designed for impact
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
