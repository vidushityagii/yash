"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Cinematogrpaher & Editor",
      company: "KIET Group of Institutions, Ghaziabad, India",
      period: "02/2024 - Present",
      description:
        "Managing video production and editing processes at the college, I led a 35+ student team in multi-platform campaigns, boosting student engagement by 30%. By optimizing workflows, I reduced turnaround times by 25%. I also introduced advanced metrics tracking, which enhanced viewer retention by 40%. Collaborating with various departments, I ensured cohesive branding across projects, introducing tech innovations that improved overall satisfaction to 97%",
      skills: [
        "Studio Management",
        "Team Leadership",
        "Workflow Optimization",
        "Metrics Tracking",
        "Brand Strategy",
        "Video Technology",
      ],
    },
    {
      id: 2,
      title: "Cinematographer",
      company: "Sketch-Light Art Production, Delhi, India",
      period: "09/2023 - 01/2024",
      description:
        "Captured weddings and events with creative compositions. Operated diverse camera equipment for ideal lighting and shots. Managed full video production cycles, contributing to a 10% market growth. Fostered team collaboration with editors.",
      skills: ["Cinematography", "Camera Operation", "Production Management", "Team Collaboration"],
    },
    {
      id: 3,
      title: "Advertising Executive",
      company: "ecodibba, Delhi, India",
      period: "01/2023 - 09/2023",
      description:
        "Led a rebranding strategy that increased lead generation by 20%, aligning marketing and visual storytelling for better audience resonance.",
      skills: ["Rebranding", "Lead Generation", "Marketing Strategy"],
    },
    {
      id: 4,
      title: "Freelance Video Editor",
      company: "NABARD, AICTE",
      period: "12/2019 - Present",
      description:
        "Edited content for clients across industries, improving video performance by 15%. Provided strategic advice that boosted content virality by 35%. Managed vendor coordination and ensured timely deliveries.",
      skills: ["Video Editing", "Client Management", "Social Media Strategy", "Content Optimization"],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
            <span>My Journey</span>
          </div>
          <AnimatedText
            text="Professional Experience"
            className="text-3xl md:text-4xl font-bold"
            highlightClass="text-purple-500"
            highlightWords={["Experience"]}
          />
          <p className="text-gray-300">
            A timeline of my career journey and key milestones in the world of cinematography and video production
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/10 via-purple-500/50 to-purple-500/10 transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-1/2 top-0 w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center z-10 transform -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              </div>

              <div className="pt-10 bg-gradient-to-b from-purple-950/20 to-black p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10 max-w-2xl mx-auto text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-3">
                  {experience.period}
                </div>
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <div className="text-purple-400 mb-4">{experience.company}</div>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-500/10 rounded-full text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
