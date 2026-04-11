import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  className?: string
  isVisible?: boolean
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2.5,
  className = '',
  isVisible = true,
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(progress * end))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, isVisible])

  return <span className={className}>{count.toLocaleString()}</span>
}
