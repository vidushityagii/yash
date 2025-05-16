"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve" | "zigzag"
  flip?: boolean
  className?: string
}

export function SectionDivider({ variant = "wave", flip = false, className = "" }: SectionDividerProps) {
  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`absolute ${flip ? "bottom-0 rotate-180" : "top-0"} left-0 w-full h-16 ${className}`}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-current text-black"
            ></path>
          </svg>
        )
      case "angle":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`absolute ${flip ? "bottom-0 rotate-180" : "top-0"} left-0 w-full h-16 ${className}`}
          >
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-current text-black"></path>
          </svg>
        )
      case "curve":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`absolute ${flip ? "bottom-0 rotate-180" : "top-0"} left-0 w-full h-16 ${className}`}
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="fill-current text-black"
            ></path>
          </svg>
        )
      case "zigzag":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`absolute ${flip ? "bottom-0 rotate-180" : "top-0"} left-0 w-full h-16 ${className}`}
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="fill-current text-black"
            ></path>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        {renderDivider()}
      </motion.div>
    </div>
  )
}
