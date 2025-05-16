// ProjectsPage.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Link } from "lucide-react"

export default function ProjectsPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeVideoUrl, setActiveVideoUrl] = useState("")

  const projects = [
    {
      id: 1,
      title: "Wedding Cinematography",
      category: "Event",
      image: "/about.png",
      videoUrl: "https://drive.google.com/file/d/1X2Y3zT5o6V7E4J8k9j1g/view?usp=sharing", // Google Drive link
    },
    {
      id: 2,
      title: "Brand Campaign",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      videoUrl: "https://drive.google.com/file/d/1yFnLfM0ghM6A9hZ2yGHsVe0p3odwyo2y/view?usp=sharing",
    },
    {
      id: 3,
      title: "Motion Graphics & Animation",
      category: "Entertainment",
      image: "/placeholder.svg?height=600&width=800",
      videoUrl: "https://drive.google.com/file/d/1NlFoc18g0t5FOmrO8ybFFz9Qyq2DsEw_/view?usp=sharing",
    },
    {
      id: 4,
      title: "Corporate Documentary",
      category: "Documentary",
      image: "/placeholder.svg?height=600&width=800",
      videoUrl: "https://drive.google.com/file/d/1EzrZLFLOs9elAfwr1_xsd_L_uxrE4taV/view?usp=sharing",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital",
      image: "/placeholder.svg?height=600&width=800",
      videoUrl: "https://drive.google.com/file/d/1XnVh76kO2AKCG5K02aDyoeqzCm79Hk_H/view?usp=sharing",
    },
    {
      id: 6,
      title: "Short Film",
      category: "Narrative",
      image: "/placeholder.svg?height=600&width=800",
      videoUrl: "https://drive.google.com/file/d/1zHws3zTpUzDDw8gdd8HvQ71JlGq5t2dy/view?usp=sharing",
    },
  ]

  return (
    <section className="py-24 pt-32 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
            <span>My Portfolio</span>
          </div>
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold"
            highlightClass="text-purple-500"
            highlightWords={["Projects"]}
          />
          <p className="text-gray-300">
            A showcase of my most impactful work across various industries and visual styles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View All Projects
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
