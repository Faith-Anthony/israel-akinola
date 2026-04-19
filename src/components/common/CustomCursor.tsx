import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE =
  'a[href], button, input, textarea, select, [role="button"], [data-cursor-hover]'

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 })
  const dotX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const dotY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element | null
      setHovering(!!target?.closest(INTERACTIVE))
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-container/45 bg-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.4)] backdrop-blur-[2px] transition-all duration-300 ease-out"
          style={{
            width: hovering ? 52 : 44,
            height: hovering ? 52 : 44,
            opacity: visible ? 1 : 0,
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10001]"
        style={{ x: dotX, y: dotY }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container shadow-[0_0_12px_rgba(255,140,0,0.55)] transition-all duration-200"
          style={{
            width: hovering ? 6 : 8,
            height: hovering ? 6 : 8,
            opacity: visible ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  )
}
