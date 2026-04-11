import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearn from '../../assets/images/Golearn.jpg'
import gotap from '../../assets/images/GoTap.jpg'
import tax from '../../assets/images/tax.jpg'

const featuredProjects = [
  {
    title: 'Golearn',
    logo: golearn,
    description: 'Digital learning platform transforming education access across Africa',
    link: '/work/golearn',
  },
  {
    title: 'TapperX (Wema Bank)',
    logo: gotap,
    description: 'Financial technology initiative bridging digital banking and financial inclusion',
    link: '/work/tapperx',
  },
  {
    title: 'National Tax Policy Implementation Committee',
    logo: tax,
    description: 'Strategic implementation of national tax systems across institutional structures',
    link: '/work/ntpic',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const FeaturedCaseStudies: React.FC = () => {
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
            Featured Case Studies
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(255, 140, 0, 0.5)',
              }}
              className="p-8 rounded-lg bg-surface border border-surface-container-high hover:border-primary-container/50 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className="mb-6 h-32 flex items-center justify-center"
              >
                <img
                  src={project.logo}
                  alt={project.title}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif italic font-bold text-on-surface mb-3 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-on-surface-variant mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* View Button */}
              <Link to={project.link}>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 border-2 border-primary-container text-primary-container font-semibold rounded-lg transition-all duration-300 hover:bg-primary-container hover:text-white"
                >
                  View Case Study →
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
