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
    <section className="overflow-hidden bg-app-background py-8 sm:py-10 border-y border-on-surface/5">
      <div className="container-max mb-6 px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-on-surface-variant"
        >
          Trusted By
        </motion.p>
      </div>

      {/* Scrolling logos container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient fades for edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-32" />

        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16"
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
              className="flex h-12 w-24 shrink-0 items-center justify-center sm:h-16 sm:w-32 md:h-20 md:w-40"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

