import React from 'react'
import { motion } from 'framer-motion'

export const ContactHeroSection: React.FC = () => {
  return (
    <motion.section
      className='bg-surface py-20 md:py-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto px-4 md:px-8 max-w-4xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-6 h-1 w-16 bg-primary-container mx-auto'
        />

        <motion.h1
          className='text-4xl md:text-6xl font-display italic text-on-surface mb-6 leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Let's Build Something Meaningful
        </motion.h1>

        <motion.p
          className='text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          For collaborations, strategy, speaking engagements, or partnerships, reach out directly.
        </motion.p>
      </div>
    </motion.section>
  )
}
