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
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className="group block"
    >
      <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden transition-smooth group-hover:border-primary-container/40">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="h-16 w-16 rounded-2xl bg-on-surface/[0.03] group-hover:bg-primary-container/10 flex items-center justify-center transition-colors duration-500">
            <Icon className="text-3xl text-on-surface/60 group-hover:text-primary-container transition-all duration-500 group-hover:scale-110" />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-serif font-bold text-on-surface leading-tight break-all">
              {title}
            </h3>
            
            <div className="flex items-center justify-center gap-3 group/link">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary-container transition-colors">
                Connect
              </span>
              <div className="h-px w-6 bg-on-surface/10 group-hover:w-10 group-hover:bg-primary-container transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  )
}
