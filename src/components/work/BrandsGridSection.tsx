import React from 'react'
import { motion } from 'framer-motion'

// Import all brand logos
import golearn from '../../assets/images/Golearn.jpg'
import gotap from '../../assets/images/GoTap.jpg'
import ivy from '../../assets/images/IVY.jpg'
import lfc from '../../assets/images/lfc.jpg'
import wr from '../../assets/images/WR.jpg'
import wema from '../../assets/images/wema.jpg'
import tax from '../../assets/images/tax.jpg'
import les from '../../assets/images/les.jpg'
import ifc from '../../assets/images/ifc.jpg'

const brands = [
  { name: 'Golearn', logo: golearn },
  { name: 'TapperX (Wema)', logo: gotap },
  { name: 'IVY', logo: ivy },
  { name: 'LFC', logo: lfc },
  { name: 'World Resources', logo: wr },
  { name: 'Wema Bank', logo: wema },
  { name: 'Tax Authority', logo: tax },
  { name: 'LES', logo: les },
  { name: 'IFC', logo: ifc },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const BrandsGridSection: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-on-surface mb-6">
            Organizations & Brands Worked With
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Collaborating with institutions, startups, and national systems to drive meaningful impact.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="flex items-center justify-center p-6 rounded-lg bg-surface/20 border border-surface-container-high/30 hover:border-primary-container/30 transition-all duration-300 group aspect-square"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-24 w-auto max-w-full object-contain hover:brightness-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
