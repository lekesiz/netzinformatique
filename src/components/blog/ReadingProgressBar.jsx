import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Reading Progress Bar Component
 * Shows reading progress as user scrolls through blog post
 */
const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
    />
  )
}

export default ReadingProgressBar
