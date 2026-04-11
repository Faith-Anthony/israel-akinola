import React from 'react'
import { motion } from 'framer-motion'

export const BlogHeroSection: React.FC = () => {
  return (
    <motion.section
      className='bg-surface py-20 md:py-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto px-4 md:px-8 max-w-6xl'>
        <div className='mb-8 h-1 w-16 bg-primary-container' />

        <motion.h1
          className='text-4xl md:text-6xl font-display italic text-on-surface mb-4 leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Insights & Perspectives
        </motion.h1>

        <motion.p
          className='text-lg md:text-xl text-on-surface-variant max-w-2xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Thoughts on leadership, systems, design, and the future we're building together.
        </motion.p>
      </div>
    </motion.section>
  )
}
