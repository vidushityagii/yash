"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: ReactNode
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-950/20 to-black p-8 border border-purple-900/30 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>

      <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
        {service.icon}
      </motion.div>

      <motion.h3
        className="text-xl font-bold mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      >
        {service.description}
      </motion.p>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 0.3 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}
