import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-reveal wrapper: fades + slides its children into view once.
 * Respects prefers-reduced-motion (renders statically when reduced).
 */
const Reveal = ({ children, className = '', delay = 0, y = 24, as = 'div' }) => {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
