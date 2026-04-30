import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseTrail() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 160, damping: 24, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 160, damping: 24, mass: 0.3 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return

    setEnabled(true)
    const handleMove = (event) => {
      x.set(event.clientX - 14)
      y.set(event.clientY - 14)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-50 h-6 w-6 rounded-full border border-blueSoft/25 bg-blueSoft/10 shadow-[0_0_30px_rgba(37,99,235,0.18)] backdrop-blur-sm"
      style={{ x: springX, y: springY }}
    />
  )
}
