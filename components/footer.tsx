"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  // Social media profile URLs
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/yashagravanshi/",
    linkedin: "https://www.linkedin.com/in/yash-agrahari-062771216/",
    
  }

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

  return (
    <footer className="py-12 bg-black border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white inline-block mb-4">
              <span className="text-purple-500">Yash</span>Agrahari
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into compelling visual narratives through expert cinematography and video editing.
            </p>
            <div className="flex space-x-4">
              {Object.entries(socialMediaLinks).map(([platform, url]) => (
                <motion.div key={platform} whileHover={{ y: -5, scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
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
                        <path d="M23 7c-.9 7.1-6 12.9-7.7 14.2-1.7 1.3-3.3-.5-3.8-1.9-1.2-3.1-3.4-10.5-5-11.1-1.6-.6-2.9 1.1-2.9 1.1L3 8c2.9-3.4 5.8-6 7.4-6.3 2-.3 3.2 1.1 3.7 4 1.1 6.5 1.8 10.2 3.3 10.2 1 0 2.7-2.2 4.1-5.5.4-1.2-.1-2.3-2.2-1.5 1.9-6.5 10.2-8.3 9.7-1.9z" />
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
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={item.path} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 8004236560</span>
              </li>
              <li className="flex items-start">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:yashagrahari7@gmail.com" className="hover:text-purple-400 transition-colors">
                  yashagrahari7@gmail.com
                </a>
              </li>
              <li className="flex items-start">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Yash Agrahari. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
