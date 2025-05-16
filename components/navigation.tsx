"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Social media profile URLs
  const socialMediaLinks = {
    instagram: "https://instagram.com/yashagrahari7",
    linkedin: "https://linkedin.com/in/yash-agrahari",
    youtube: "https://youtube.com/@yashagrahari",
    vimeo: "https://vimeo.com/yashagrahari",
  }

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better UX
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Updated sequence of navigation items
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Showreel", path: "#showreel" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "Experience", path: "#experience" },
    { name: "Skills", path: "#skills" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId.replace("#", ""))
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <a
              href="#home"
              className="text-2xl font-bold text-white"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
            >
              <span className="text-purple-500">Yash</span>Agrahari
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.path)
                  }}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    activeSection === item.path.replace("#", "")
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full ${
                      activeSection === item.path.replace("#", "") ? "w-full" : ""
                    }`}
                  ></span>
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("#contact")
                  }}
                >
                  Contact
                </a>
              </Button>
            </motion.div>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <span className="sr-only">Toggle menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-10">
              <a
                href="#home"
                className="text-2xl font-bold text-white"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#home")
                }}
              >
                <span className="text-purple-500">Yash</span>Agrahari
              </a>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.path)
                    }}
                    className={`text-xl font-medium tracking-wide transition-colors relative group ${
                      activeSection === item.path.replace("#", "")
                        ? "text-purple-400"
                        : "text-white hover:text-purple-400"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full ${
                        activeSection === item.path.replace("#", "") ? "w-full" : ""
                      }`}
                    ></span>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex space-x-6 pt-10">
              {Object.entries(socialMediaLinks).map(([platform, url], index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
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
                    >
                      {platform === "instagram" && (
                        <>
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </>
                      )}
                      {platform === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                      {platform === "vimeo" && (
                        <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z M10 9l5 3-5 3V9Z" />
                      )}
                      {platform === "youtube" && (
                        <>
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </>
                      )}
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
