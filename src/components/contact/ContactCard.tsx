import React from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface ContactCardProps {
  icon: IconType
  title: string
  link: string
  isExternal?: boolean
  index: number
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  link,
  isExternal = false,
  index,
}) => {
  return (
    <motion.a
      href={link}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.05 }}
      className='group block'
    >
      <motion.div
        className='p-8 rounded-lg bg-surface-container border border-surface-container-high group-hover:border-primary-container/50 transition-all duration-300'
        whileHover={{
          boxShadow: '0 0 30px rgba(255, 140, 0, 0.1)',
        }}
      >
        <div className='flex flex-col items-center text-center gap-6'>
          <motion.div
            whileHover={{ scale: 1.15, color: '#FF8C00' }}
            className='text-4xl text-on-surface group-hover:text-primary-container transition-colors duration-300'
          >
            <Icon />
          </motion.div>

          <h3 className='text-lg md:text-xl font-serif font-bold text-on-surface group-hover:text-primary-container transition-colors duration-300'>
            {title}
          </h3>

          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className='h-0.5 bg-primary-container'
          />
        </div>
      </motion.div>
    </motion.a>
  )
}
