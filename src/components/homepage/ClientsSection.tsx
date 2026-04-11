import React from 'react'
import { motion } from 'framer-motion'

// Import client logos
import golearLogo from '../../assets/images/Golearn.jpg'
import goTapLogo from '../../assets/images/GoTap.jpg'
import ivyLogo from '../../assets/images/IVY.jpg'
import lfcLogo from '../../assets/images/lfc.jpg'
import wemaLogo from '../../assets/images/wema.jpg'
import wrLogo from '../../assets/images/WR.jpg'
import taxLogo from '../../assets/images/tax.jpg'
import lesLogo from '../../assets/images/les.jpg'
import ifcLogo from '../../assets/images/ifc.jpg'

const clients = [
  { name: 'Golearn', logo: golearLogo },
  { name: 'GoTap', logo: goTapLogo },
  { name: 'IVY', logo: ivyLogo },
  { name: 'LFC', logo: lfcLogo },
  { name: 'Wema', logo: wemaLogo },
  { name: 'WR', logo: wrLogo },
  { name: 'Tax', logo: taxLogo },
  { name: 'Les', logo: lesLogo },
  { name: 'IFC', logo: ifcLogo },
]

export const ClientsSection: React.FC = () => {
  // Create triple array for truly infinite scroll effect
  const infiniteClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-4xl font-serif font-bold text-on-surface"
        >
          Clients <span className="text-primary-container">.</span>
        </motion.h2>
      </div>

      {/* Scrolling logos container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {infiniteClients.map((client, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 h-20 md:h-24 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
