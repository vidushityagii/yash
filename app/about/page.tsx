"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCounter } from "@/components/animated-counter"

export default function AboutPage() {
  return (
    <section className="py-24 pt-32 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 rounded-full bg-purple-500/10 blur-3xl opacity-50"></div>
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-500/40"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              ></motion.div>
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden border-2 border-purple-500/60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design.jpg-Ge0t95V9iDRirYPHU2Q1NaU4y4vzye.jpeg"
                  alt="Yash Agrahari"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>About Me</span>
            </motion.div>

            <AnimatedText
              text="Transforming Ideas Into Visual Masterpieces"
              className="text-3xl md:text-4xl font-bold"
              highlightClass="text-purple-500"
              highlightWords={["Visual Masterpieces"]}
            />

            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            With a focus on video production and creative direction, I bring ideas to life through engaging visuals. My expertise helps brands enhance their presence, captivate audiences, and drive meaningful connections.
            </motion.p>

            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              With a focus on video production and creative direction, I bring ideas to life through engaging visuals. My expertise helps brands enhance their presence, captivate audiences, and drive meaningful connections..
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {[
                { label: "Experience", value: "4+" },
                { label: "Projects", value: "70+" },
                { label: "Clients", value: "22+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="text-purple-400 font-medium">{stat.label}</div>
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={Number.parseInt(stat.value)} suffix={stat.value.includes("+") ? "+" : ""} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
