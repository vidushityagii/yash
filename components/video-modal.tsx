"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"

interface VideoModalProps {
  url: string
  onClose: () => void
}

export function VideoModal({ url, onClose }: VideoModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <VideoPlayer url={url} autoPlay />
      </motion.div>
    </motion.div>
  )
}
