"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "SL Art Production",
      role: "Production Company",
      image:
        "testimonals/slart.png",
      content:
        "Working on our production projects with Yash Agrahari changed everything. Beautiful images were brought to life by his extraordinary cinematography abilities, which flawlessly captured the spirit of our imaginative ideas. Yash's unique approach and painstaking attention to detail ensured that every project was impactful and flawless. The art of visual storytelling is genuinely elevated by him.",
    },
    {
      id: 2,
      name: "Ecodibba",
      role: "Film Production",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Yash has an incredible eye for detail and composition. His ability to capture emotion through his lens is unmatched. We've worked on multiple projects together, and each time he exceeds our expectations. His technical expertise combined with his creative vision makes him our go-to cinematographer.",
    },
    {
      id: 3,
      name: "Digital Marketing Agency",
      role: "Brand Campaign",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Our brand campaigns have seen a 40% increase in engagement since we started working with Yash. His visual storytelling approach resonates deeply with our audience. He doesn't just create videos; he crafts experiences that leave lasting impressions. We highly recommend his services to anyone looking to elevate their visual content.",
    },
  ]

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            <span>Client Feedback</span>
          </div>
          <AnimatedText
            text="What Clients Say"
            className="text-3xl md:text-4xl font-bold"
            highlightClass="text-purple-500"
            highlightWords={["Say"]}
          />
          <p className="text-gray-300">Hear from the people and brands I've had the pleasure of working with</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 rounded-3xl bg-purple-500/5 blur-2xl opacity-70"></div>
          <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-black p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  className="mb-6 rounded-full border-2 border-purple-500/30 p-1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-20 w-20 overflow-hidden rounded-full bg-purple-500/10">
                    <Image
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="flex mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                      >
                        <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                      </motion.div>
                    ))}
                </motion.div>

                <motion.blockquote
                  className="mb-6 text-xl font-medium italic text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "{testimonials[activeTestimonial].content}"
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="text-lg font-bold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-purple-400">{testimonials[activeTestimonial].role}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                onClick={handlePrevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                onClick={handleNextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              className={`h-2 w-2 rounded-full cursor-pointer ${i === activeTestimonial ? "bg-purple-500" : "bg-purple-500/30"}`}
              whileHover={{ scale: 1.5 }}
              onClick={() => setActiveTestimonial(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
