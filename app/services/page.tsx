"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Video Production & Editing",
      description:
        "Creating high-quality video content for promotions, events, and social media. Using Adobe Premiere Pro and Final Cut Pro to bring stories to life with a polished, professional touch.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-purple-500"
        >
          <path d="M12 2H2v10h10V2Z" />
          <path d="M12 12H2v10h10V12Z" />
          <path d="M22 2h-10v20h10V2Z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Cinematography",
      description:
        "Specializing in capturing memorable events and dynamic brand visuals. Equipped with the latest cameras and lenses, I focus on stunning visuals and meticulous composition.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-purple-500"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Creative Direction",
      description:
        "Providing strategic creative direction and branding to help businesses achieve a cohesive and impactful visual identity. I specialize in creating content that resonates and enhances brand recognition.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-purple-500"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 pt-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
            <span>My Services</span>
          </div>
          <AnimatedText
            text="Specialized Creative Services For Your Vision"
            className="text-3xl md:text-4xl font-bold"
            highlightClass="text-purple-500"
            highlightWords={["Creative Services"]}
          />
          <p className="text-gray-300">
            Delivering exceptional visual content through a range of professional services tailored to your specific
            needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
