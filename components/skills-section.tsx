"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"

interface Skill {
  name: string
  level: number // 1-100
  category: "technical" | "creative" | "software" | "ai"
}

export function SkillsSection() {
  const skills: Skill[] = [
    // Technical Skills
    { name: "Camera Operation", level: 95, category: "technical" },
    { name: "Lighting", level: 90, category: "technical" },
    { name: "Sound Recording", level: 85, category: "technical" },
    { name: "Color Grading", level: 92, category: "technical" },
    // { name: "Drone Cinematography", level: 88, category: "technical" },

    // Creative Skills
    { name: "Visual Storytelling", level: 96, category: "creative" },
    { name: "Composition", level: 94, category: "creative" },
    { name: "Creative Direction", level: 90, category: "creative" },
    { name: "Storyboarding", level: 85, category: "creative" },
    { name: "Conceptualization", level: 88, category: "creative" },

    // Software Skills
    { name: "Adobe Premiere Pro", level: 98, category: "software" },
    { name: "After Effects", level: 92, category: "software" },
    { name: "DaVinci Resolve", level: 90, category: "software" },
    { name: "Final Cut Pro", level: 85, category: "software" },
    { name: "Photoshop", level: 80, category: "software" },
    { name: "Adobe Express", level: 90, category: "software" },
    { name: "Canva", level: 95, category: "software" },
     { name: "Capcut", level: 85, category: "software" },
// AI tools
     { name: "ElevenLabs (Voice AI)", level: 93, category: "ai" },
    { name: "HeyGen (Video Avatar AI)", level: 91, category: "ai" },
    { name: "Gama AI", level: 90, category: "ai" },
    { name: "Runway ML", level: 82, category: "ai" },
   
  ]

  const technicalSkills = skills.filter((skill) => skill.category === "technical")
  const creativeSkills = skills.filter((skill) => skill.category === "creative")
  const softwareSkills = skills.filter((skill) => skill.category === "software")
   const AI = skills.filter((skill) => skill.category === "ai")

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
            <span>My Expertise</span>
          </div>
          <AnimatedText
            text="Professional Skills"
            className="text-3xl md:text-4xl font-bold"
            highlightClass="text-purple-500"
            highlightWords={["Skills"]}
          />
          <p className="text-gray-300">
            A comprehensive overview of my technical abilities, creative talents, and software proficiencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column - Technical & Creative Skills */}
          <div className="space-y-10">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </span>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Creative Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </span>
                Creative Skills
              </h3>
              <div className="space-y-4">
                {creativeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </span>
                Gen AI Tools
              </h3>
              <div className="space-y-4">
                {AI.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Software Skills & Skill Chart */}
          <div className="space-y-10">
            {/* Software Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </span>
                Software Proficiency
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {softwareSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-24 bg-purple-500/5 rounded-lg border border-purple-500/20 p-3 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-center">
                        <motion.div
                          className="w-full bg-gradient-to-t from-purple-500 to-purple-500/50"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${skill.level}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        ></motion.div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Skills Visualization */}
            <motion.div
              className="bg-gradient-to-b from-purple-950/20 to-black p-6 rounded-lg border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Cinematography", value: 95 },
                  { name: "Video Editing", value: 92 },
                  { name: "Color Grading", value: 88 },
                  { name: "Sound Design", value: 82 },
                  { name: "Motion Graphics", value: 78 },
                  { name: "Scriptwriting", value: 65 },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-xs text-purple-400">{item.value}%</span>
                      </div>
                      <div className="h-1.5 bg-purple-500/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}