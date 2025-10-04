import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, Network, Sparkles, Cpu, Server } from 'lucide-react'

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState(0) // 0: Particles, 1: Neural Network, 2: NETZ Core, 3: Digital Transformation, 4: Logo
  const [isVisible, setIsVisible] = useState(true)
  const canvasRef = useRef(null)

  // Particle system effect
  useEffect(() => {
    if (stage !== 0 || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 200

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random()
        this.targetX = canvas.width / 2
        this.targetY = canvas.height / 2
        this.color = Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246' // Purple or Blue
      }

      update() {
        // Move towards center
        const dx = this.targetX - this.x
        const dy = this.targetY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance > 5) {
          this.vx += dx * 0.0001
          this.vy += dy * 0.0001
        }

        this.x += this.vx
        this.y += this.vy

        // Friction
        this.vx *= 0.99
        this.vy *= 0.99
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()

        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(${this.color}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let animationFrame
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distance / 100) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [stage])

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenIntro = localStorage.getItem('netzHasSeenIntro')
    if (hasSeenIntro) {
      setIsVisible(false)
      onComplete()
      return
    }

    // Animation sequence
    const timers = []
    
    timers.push(setTimeout(() => setStage(1), 3000))    // Neural Network
    timers.push(setTimeout(() => setStage(2), 5500))    // NETZ Core
    timers.push(setTimeout(() => setStage(3), 8000))    // Digital Transformation
    timers.push(setTimeout(() => setStage(4), 10000))   // Logo
    
    timers.push(setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('netzHasSeenIntro', 'true')
      onComplete()
    }, 13000))

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
        {/* Particle Canvas */}
        {stage === 0 && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0"
          />
        )}

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                background: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246'}, ${Math.random() * 0.5 + 0.3})`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Neural Network Stage */}
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div
              key="neural"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              {/* Neural network nodes */}
              <div className="relative w-96 h-96">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 12
                  const radius = 150
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-purple-500 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: -8,
                        marginTop: -8,
                      }}
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x,
                        y,
                        boxShadow: [
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                          '0 0 30px rgba(139, 92, 246, 1)',
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.05,
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                        },
                      }}
                    />
                  )
                })}

                {/* Center node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-8 h-8 bg-blue-500 rounded-full -ml-4 -mt-4"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 60px rgba(59, 130, 246, 1)',
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                    ],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * Math.PI * 2) / 12
                    const radius = 150
                    const x = Math.cos(angle) * radius + 192
                    const y = Math.sin(angle) * radius + 192

                    return (
                      <motion.line
                        key={i}
                        x1="192"
                        y1="192"
                        x2={x}
                        y2={y}
                        stroke="rgba(139, 92, 246, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      />
                    )
                  })}
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-[0.3em]"
              >
                SYSTÈME NETZ INITIALISATION
              </motion.div>
            </motion.div>
          )}

          {/* NETZ Core Stage */}
          {stage === 2 && (
            <motion.div
              key="core"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
              className="relative"
            >
              {/* Rotating rings */}
              {[0, 1, 2].map((ringIndex) => (
                <motion.div
                  key={ringIndex}
                  className="absolute left-1/2 top-1/2 border-2 rounded-full"
                  style={{
                    width: 200 + ringIndex * 80,
                    height: 200 + ringIndex * 80,
                    marginLeft: -(100 + ringIndex * 40),
                    marginTop: -(100 + ringIndex * 40),
                    borderColor: `rgba(${ringIndex === 0 ? '139, 92, 246' : ringIndex === 1 ? '59, 130, 246' : '16, 185, 129'}, 0.4)`,
                  }}
                  animate={{
                    rotate: ringIndex % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 10 + ringIndex * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: ringIndex === 0 ? '#8B5CF6' : ringIndex === 1 ? '#3B82F6' : '#10B981',
                      top: -6,
                      left: '50%',
                      marginLeft: -6,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${ringIndex === 0 ? '#8B5CF6' : ringIndex === 1 ? '#3B82F6' : '#10B981'}`,
                        `0 0 30px ${ringIndex === 0 ? '#8B5CF6' : ringIndex === 1 ? '#3B82F6' : '#10B981'}`,
                        `0 0 10px ${ringIndex === 0 ? '#8B5CF6' : ringIndex === 1 ? '#3B82F6' : '#10B981'}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              ))}

              {/* Central NETZ icon - CPU/Server hybrid */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="relative">
                  <Cpu className="w-24 h-24 text-purple-500" />
                  <Server className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-500" />
                </div>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(139, 92, 246, 0.5)',
                      '0 0 80px rgba(139, 92, 246, 1)',
                      '0 0 30px rgba(139, 92, 246, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-[0.3em]"
              >
                NETZ CORE ACTIVÉ
              </motion.div>
            </motion.div>
          )}

          {/* Digital Transformation Stage */}
          {stage === 3 && (
            <motion.div
              key="expansion"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Energy waves */}
              {[0, 1, 2, 3, 4].map((wave) => (
                <motion.div
                  key={wave}
                  className="absolute left-1/2 top-1/2 border-2 border-purple-500/30 rounded-full"
                  style={{
                    width: 100,
                    height: 100,
                    marginLeft: -50,
                    marginTop: -50,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: 8,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: wave * 0.3,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Holographic network */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <Network className="w-32 h-32 text-blue-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-[0.3em]"
              >
                TRANSFORMATION DIGITALE
              </motion.div>
            </motion.div>
          )}

          {/* Logo Stage */}
          {stage === 4 && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 10, opacity: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="relative"
            >
              {/* Holographic effect */}
              <motion.div
                className="absolute inset-0 blur-xl"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* NETZ Informatique Logo */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <h1 className="text-6xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
                      NETZ
                    </span>
                    {' '}
                    <span className="text-white">Informatique</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-lg tracking-wider"
                >
                  Votre Partenaire Technologique
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 flex items-center justify-center gap-4"
                >
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-gray-400 tracking-widest">DEPUIS 2003</span>
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>

              {/* Orbiting particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 8
                const radius = 200

                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-500 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: -4,
                      marginTop: -4,
                    }}
                    animate={{
                      x: [
                        Math.cos(angle) * radius,
                        Math.cos(angle + Math.PI * 2) * radius,
                      ],
                      y: [
                        Math.sin(angle) * radius,
                        Math.sin(angle + Math.PI * 2) * radius,
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
