import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { ContactCard } from './ContactCard'

export const ContactCardsGrid: React.FC = () => {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: 'mailto:theisraelakinola@gmail.com',
      link: 'mailto:theisraelakinola@gmail.com',
      isExternal: false,
    },
    {
      icon: FaLinkedin,
      title: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/israel-akinola',
      isExternal: true,
    },
    {
      icon: FaXTwitter,
      title: 'Follow on X',
      link: 'https://x.com/theking_israel',
      isExternal: true,
    },
    {
      icon: FaWhatsapp,
      title: 'Chat on WhatsApp',
      link: 'https://wa.me/+2348160688443',
      isExternal: true,
    },
  ]

  return (
    <motion.section
      className='bg-surface-container py-20 md:py-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto px-4 md:px-8 max-w-6xl'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {contactOptions.map((option, index) => (
            <ContactCard
              key={index}
              icon={option.icon}
              title={option.title}
              link={option.link}
              isExternal={option.isExternal}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
