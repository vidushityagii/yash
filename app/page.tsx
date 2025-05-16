"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Film, Play, X, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { VideoPlayer } from "@/components/video-player"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { BackToTop } from "@/components/back-to-top"
import { SectionDivider } from "@/components/section-divider"
import { ParticleBackground } from "@/components/particle-background"
import { SectionHeading } from "@/components/section-heading"
import { StatsSection } from "@/components/stats-section"
import { motion, AnimatePresence } from "framer-motion"
import { ShowreelSection } from "@/components/showreel-section"
import { ContactInfo } from "@/components/contact-info"

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeVideoUrl, setActiveVideoUrl] = useState("")

  // Social media profile URLs
  const socialMediaLinks = {
    instagram: "https://instagram.com/yashagrahari7",
    linkedin: "https://linkedin.com/in/yash-agrahari",
    youtube: "https://youtube.com/@yashagrahari",
    vimeo: "https://vimeo.com/yashagrahari",
  }

  // Google Drive CV link
  const cvDownloadLink = "https://drive.google.com/file/d/1234567890/view?usp=sharing"

    const testimonials = [
    {
      id: 1,
      name: "SL Art Production",
      role: "Production Company",
      image:
        "testimonals/slart.png",
      content:
        "Working with Yash Agrahari completely changed the overall experience. His stunning cinematographic abilities perfectly portrayed the essence of our creative concepts. His creative approach and strict attention to detail ensured that every project was both effective and error-free.",
    },
    {
      id: 2,
      name: "Ecodibba",
      role: "Packaging Company",
      image: "testimonals/eco.png",
      content:
        "Yash possesses an incredible eye for composition and detail. No one can match his talent for capturing emotion with the camera. We've collaborated on numerous projects with him, and each time, he over-delivers. His technical proficiency combined with his visual creativity makes him our first choice cinematographer.",
    },
    {
      id: 3,
      name: "Digital Marketing Agency",
      role: "Marketing Agency",
      image: "testimonals/digi.png",
      content:
        "Our brand projects have seen a 40% boost in engagement since we partnered with Yash. His style of visual storytelling largely appeals to our audience. He doesn't just make videos; he painstakingly develops experiences that have lasting effects. We highly recommend his services to anyone who wishes to elevate their visual content to the next level.",
    },
    {
  id: 4,
  name: "Sarthak",
  role: "Content Creator & Educator",
  image: "testimonals/aii.png",
  content:
    "Working with Yash Agrahari was a seamless and enjoyable process. His ability to take educational content and turn it into visually appealing and engaging stories greatly helped to enhance the overall effect of our videos. His professionalism, creativity, and technical proficiency make him an asset to his field.",
},
{
  id: 5,
  name: "KIET Group of Institutions",
  role: "Educational Institution",
  image: "testimonals/kiet.png",
  content:
    "Yash has been consistently delivering outstanding work for our institutional events, skillfully capturing the spirit and vibrancy of every moment with accuracy. His commitment to excellence, coupled with his storytelling skills, has immensely boosted the coverage and popularity of our campus events. He is a seasoned and effective media professional whom we feel fortunate to have.",
}

  ]

  const projects = [
    {
      id: 1,
      title: "Wedding Films & Portraiture",
      category: "Cinematic Weddings",
      image: "project/wedd.png",
      videoUrl: "https://drive.google.com/drive/folders/1zHY8JH-YO3wCux8v4gU8qkBtuzLfFWfn?usp=sharing",
    },
    {
      id: 2,
      title: "Marketing & Promotional ",
      category: "Brand Films & Promos",
      image: "project/mark.png",
      videoUrl: "https://drive.google.com/drive/folders/1QMLGH6h-9QSPV0_TAZB0EaH1ojmk2y4U?usp=sharing",
    },
    {
      id: 3,
      title: "Animated Visual Design",
      category: "Motion Graphics",
      image: "project/motion.png",
      videoUrl: "https://drive.google.com/drive/folders/1RJwaXFPjTOlDd5DcsKlobIx9jlSLOP2-?usp=sharing",
    },
    {
      id: 4,
      title: "Event & Sports Documentation",
      category: "Event Highlights",
      image: "project/event.png",
      videoUrl: "https://drive.google.com/drive/folders/10UC50EU3vf7NZKKdONVjmf3e7Eoqwhlq?usp=sharing",
    },
    {
      id: 5,
      title: "Social Media Visuals",
      category: "Social Media Creatives",
      image: "project/soc.png",
      videoUrl: "https://drive.google.com/drive/folders/1X7OGENN0JAiKb6b0oFboIXTOIYn1-cDT?usp=sharing",
    },
    {
      id: 6,
      title: "Corporate Media Productions",
      category: "Corporate Showreels",
      image: "project/film.png",
      videoUrl: "https://drive.google.com/drive/folders/1mWYsGpiU9shZdyrxgE7fS4ftLyoxZ8dp?usp=sharing",
    },
    {
      id: 7,
      title: "Youtube Productions",
      category: "Digital Series",
      image: "project/yt.png",
      videoUrl: "https://drive.google.com/drive/folders/1CBec7oMOt6tIf7e6dAjqPCwjRqLSOuLr?usp=sharing",
    },
    {
      id: 8,
      title: "Documentary & Podcasts",
      category: "Narrative Features",
      image: "project/docu.png",
      videoUrl: "https://drive.google.com/drive/folders/110v3rxR18HBKuvLqwDWwGkV9lNqcjSZg?usp=sharing",
    },
    {
      id: 9,
      title: "Travelogues & Lifestyle",
      category: "Travel Visual Diaries",
      image: "project/travel.png",
      videoUrl: "https://drive.google.com/drive/folders/1nos3pZLBQZ8IaqRT-GmXxLeer_KTvH08?usp=sharing",
    },
  ]

  const services = [
    {
      id: 1,
      title: "Video Production & Editing",
      description:
        "Creating high-quality video content for promotions, events, and social media using Adobe Premiere Pro and Final Cut Pro to bring stories to life with a polished, professional touch.",
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

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openVideoModal = (url: string) => {
    setActiveVideoUrl(url)
    setIsVideoModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Film className="w-4 h-4 mr-2" />
                <span>Cinematographer & Video Editor</span>
              </motion.div>

              <AnimatedText
                text="Crafting Visual Narratives That Captivate"
                className="text-4xl md:text-6xl font-bold leading-tight"
                highlightClass="text-purple-500"
                highlightWords={["Narratives"]}
              />

              <motion.p
                className="text-lg text-gray-300 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                I bring stories to life through dynamic visuals and impactful editing. Let's create something
                unforgettable together.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => scrollToSection("projects")}
                >
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    View My Work
                  </motion.span>
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  onClick={() => window.open(cvDownloadLink, "_blank")}
                >
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {Object.entries(socialMediaLinks).map(([platform, url], index) => (
                  <motion.div key={platform} whileHover={{ y: -5, color: "#8b5cf6" }} transition={{ duration: 0.2 }}>
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
                        
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative hidden md:block hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-3xl opacity-70 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Cinematography work sample"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.01, borderColor: "#9333ea" }}
  className="rounded-lg overflow-hidden border-2 border-transparent transition-all duration-300"
>
  <img
   src="/IMG_1975.heic"
    alt="Project Image"
    className="w-full h-auto object-cover"
  />
</motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        

        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="wave" className="text-purple-950/20" />
        </div>
      </section>

      {/* Showreel Section */}
      <ShowreelSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-purple-950/20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="About Me"
            title="Transforming Ideas Into Visual Masterpieces"
            description="With a background in Journalism & Mass Communication, I specialize in video production, editing, and cinematography. My work has helped brands increase engagement and stand out."
            highlightWords={["Visual Masterpieces"]}
          />

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
                    src="about.png"
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
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                As a professional video editor and cinematographer, I am committed to providing innovative
ideas into engaging visual narratives. Throughout production to post-production,
I work closely with brands, institutions, and clients to produce content that resonates.
and engages people.
              </motion.p>

              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
Having experience working with software like Adobe Creative Suite, DaVinci Resolve, and Final Cut Pro, I bring cinematic composition, lighting, and style to every project. Whether it is a brand campaign, social media, or a feature film, my goal is to create high-end visuals that captivate the viewer and augment the message of your brand.

My work has consistently assisted brands in engaging more effectively, sharpening their story, and making a lasting impact on different platforms.
              </motion.p>

              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Learn More About Me
                  </motion.span>
                </Button> */}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="curve" className="text-black" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="My Portfolio"
            title="Featured Projects"
            description="A showcase of my most impactful work across various industries and visual styles"
            highlightWords={["Projects"]}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                // onPlay={() => openVideoModal(project.videoUrl)}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View All Projects
              </motion.span>
            </Button> */}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="wave" className="text-purple-950/20" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-purple-950/20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="My Services"
            title="Specialized Creative Services For Your Vision"
            description="Delivering exceptional visual content through a range of professional services tailored to your specific needs"
            highlightWords={["Creative Services"]}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="curve" className="text-black" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-black relative">
        <ExperienceSection />
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="zigzag" className="text-purple-950/20" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-black to-purple-950/20 relative">
        <SkillsSection />
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="angle" className="text-black" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Client Feedback"
            title="What Clients Say"
            description="Hear from the people and brands I've had the pleasure of working with"
            highlightWords={["Say"]}
          />

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
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider variant="zigzag" className="text-purple-950/20" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-purple-950/20 to-black relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Get In Touch"
            title="Ready to Create Something Extraordinary?"
            description="Let's collaborate to bring your vision to life with stunning visuals and compelling storytelling."
            highlightWords={["Extraordinary"]}
          />

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-purple-500/5 blur-3xl opacity-70"></div>
            <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-950/30 to-black p-8 md:p-12">
              <ContactInfo />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to top button */}
      <BackToTop />

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideoModal}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/10 rounded-full"
              onClick={closeVideoModal}
            >
              <X className="h-6 w-6" />
            </Button>
            <VideoPlayer url={activeVideoUrl} />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
