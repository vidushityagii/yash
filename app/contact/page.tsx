"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="py-24 pt-32 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-purple-500/5 blur-3xl opacity-70"></div>
          <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-950/30 to-black p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <AnimatedText
                  text="Ready to Create Something Extraordinary?"
                  className="text-3xl md:text-4xl font-bold"
                  highlightClass="text-purple-500"
                  highlightWords={["Extraordinary"]}
                />

                <p className="text-gray-300">
                  Let's collaborate to bring your vision to life with stunning visuals and compelling storytelling that
                  captivates your audience.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: "phone", text: "+91 8004236560" },
                    { icon: "mail", text: "yashagrahari7@gmail.com" },
                    { icon: "map-pin", text: "Ghaziabad, Uttar Pradesh, India" },
                  ].map((item) => (
                    <motion.div
                      key={item.icon}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 text-purple-400"
                      >
                        {item.icon === "phone" && (
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        )}
                        {item.icon === "mail" && (
                          <>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </>
                        )}
                        {item.icon === "map-pin" && (
                          <>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </>
                        )}
                      </svg>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
