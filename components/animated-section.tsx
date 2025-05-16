"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0, ...motionProps }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
