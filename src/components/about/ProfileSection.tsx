import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../../assets/images/profile2.JPG'

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

export const ProfileSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-surface-container">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="h-96 md:h-full rounded-lg overflow-hidden relative group"
          >
            <img
              src={profileImage}
              alt="Israel Akinola"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
            />
            {/* Orange border glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 border-2 border-primary-container/0 group-hover:border-primary-container/50 rounded-lg transition-all duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-on-surface leading-relaxed">
                Israel Akinola, a symphony of gifts and graces, is a thinker, thought leader,
                and cultural engineer—an inspiring professional excelling as a speaker, strategist,
                and an emerging global leader.
              </p>

              <p className="text-lg text-on-surface leading-relaxed">
                As the founder of IVY, he designs systems that elevate the functional quality
                of human existence and the human experience to a superior place through innovative
                leadership, strategy, and systemic change, having empowered over 50,000 young people
                across Africa and the diaspora.
              </p>

              <p className="text-lg text-on-surface leading-relaxed">
                He is also the convener of SQUARE, a community for deep, truth-centered conversations.
              </p>

              <p className="text-lg text-on-surface leading-relaxed">
                At the core of his work is a commitment to community, excellence, and innovation—amplifying
                the voices and potential of the next generation across the continent and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
