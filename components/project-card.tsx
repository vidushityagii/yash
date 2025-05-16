"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    videoUrl?: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Watch Video Link */}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg"
              >
                View Work
              </a>
            )}
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-purple-400 text-sm mb-2">{project.category}</div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
