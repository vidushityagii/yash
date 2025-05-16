"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"

interface SectionHeadingProps {
  badge: string
  title: string
  description?: string
  highlightWords?: string[]
  centered?: boolean
}

export function SectionHeading({
  badge,
  title,
  description,
  highlightWords = [],
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`max-w-3xl mx-auto mb-16 space-y-4 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span>{badge}</span>
      </motion.div>

      <AnimatedText
        text={title}
        className="text-3xl md:text-4xl font-bold"
        highlightClass="text-purple-500"
        highlightWords={highlightWords}
      />

      {description && (
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
