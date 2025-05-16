"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(true) // autoplay starts it
  const [isMuted, setIsMuted] = useState(true)     // muted for autoplay rules
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting fullscreen: ${err.message}`)
        })
        setIsFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <section id="showreel" className="py-24 bg-gradient-to-b from-purple-950/20 to-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Featured Work"
          title="Cinematography Showreel"
          description="A short introduction to my creative journey, passion for visual storytelling, and the inspiration behind my work."
          highlightWords={["Showreel"]}
        />

        <motion.div
          className="relative max-w-5xl mx-auto overflow-hidden rounded-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent z-10 pointer-events-none"></div>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="yashh.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
          This video offers a glimpse into who I am and my journey in video production and creative 
          direction. It's a brief introduction to my style, passion, and the creative process that 
          drives me in every project I undertake.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
