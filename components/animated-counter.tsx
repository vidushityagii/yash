"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
      controls.start({ opacity: 1, y: 0 })

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, value, duration, controls])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.5 }}>
      {count}
      {suffix}
    </motion.div>
  )
}
