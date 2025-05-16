"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"

export function StatsSection() {
  const stats = [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Projects Completed", value: 70, suffix: "+" },
    { label: "Satisfied Clients", value: 22, suffix: "+" },

  ]

  return (
    <div className="py-16 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-purple-500 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
