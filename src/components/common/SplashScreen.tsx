import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import brandLogo from '@brand-logo'

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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-surface"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <img
          src={brandLogo}
          alt="Israel Akinola"
          className="h-28 w-auto object-contain md:h-36"
        />
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-on-surface-variant"
        >
          Loading
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
