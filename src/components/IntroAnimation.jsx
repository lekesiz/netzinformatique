import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Globe, Sparkles } from 'lucide-react'

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState(0) // 0: AI, 1: World, 2: Galaxy, 3: Complete
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenIntro = localStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setIsVisible(false)
      onComplete()
      return
    }

    // Animation sequence
    const timers = []
    
    // AI Stage
    timers.push(setTimeout(() => setStage(1), 2000))
    
    // World Stage
    timers.push(setTimeout(() => setStage(2), 4000))
    
    // Galaxy Stage
    timers.push(setTimeout(() => setStage(3), 6000))
    
    // Complete
    timers.push(setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('hasSeenIntro', 'true')
      onComplete()
    }, 7500))

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [onComplete])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Stars background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: stage >= 2 ? [0, 1, 0] : 0,
                scale: stage >= 2 ? [0, 1.5, 0] : 0,
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* AI Stage */}
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="ai"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 60px rgba(139, 92, 246, 0.8)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <Brain className="w-32 h-32 text-purple-500" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-40 h-40 border-2 border-purple-500/30 rounded-full" />
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-2xl font-bold mt-8 text-center"
              >
                Intelligence Artificielle
              </motion.h2>
            </motion.div>
          )}

          {/* World Stage */}
          {stage === 1 && (
            <motion.div
              key="world"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Globe className="w-32 h-32 text-blue-500" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 80px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-2xl font-bold mt-8 text-center"
              >
                Solutions Globales
              </motion.h2>
            </motion.div>
          )}

          {/* Galaxy Stage */}
          {stage >= 2 && (
            <motion.div
              key="galaxy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 10, opacity: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                {/* Galaxy spiral */}
                <svg width="300" height="300" viewBox="0 0 300 300" className="absolute inset-0">
                  <motion.path
                    d="M150,150 Q200,100 250,150 T150,250 Q50,200 50,150 T150,50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <motion.div
                  className="relative w-32 h-32 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-32 h-32 text-green-500" />
                </motion.div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-3xl font-bold mt-8 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent"
              >
                NETZ Informatique
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-white/70 text-lg mt-2 text-center"
              >
                L'univers de vos solutions IT
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => {
            setIsVisible(false)
            localStorage.setItem('hasSeenIntro', 'true')
            onComplete()
          }}
          className="absolute bottom-8 right-8 text-white/70 hover:text-white text-sm underline"
        >
          Passer l'intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}