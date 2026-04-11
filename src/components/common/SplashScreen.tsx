import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo2.PNG'

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className='fixed inset-0 bg-surface flex items-center justify-center z-50'
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='flex flex-col items-center gap-6'
      >
        <img
          src={logo}
          alt='Israel Akinola'
          className='h-32 md:h-40 w-auto object-contain brightness-125 contrast-125'
          style={{ mixBlendMode: 'screen' }}
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='text-on-surface-variant text-sm font-light tracking-widest'
        >
          Loading
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
