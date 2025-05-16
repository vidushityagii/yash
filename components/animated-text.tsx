"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  highlightClass?: string
  highlightWords?: string[]
}

export function AnimatedText({ text, className = "", highlightClass = "", highlightWords = [] }: AnimatedTextProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const words = text.split(" ")

  const shouldHighlight = (word: string) => {
    return highlightWords.some((highlight) => word.includes(highlight) || highlight.includes(word))
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block ${shouldHighlight(word) ? highlightClass : ""}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}
