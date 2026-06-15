import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Animated number counter that runs once when scrolled into view.
 * Accepts values like "2772+", "900+", "35+". For non-pure-integer values
 * (e.g. "24-48h", "4,9/5") it renders the value statically.
 */
const CountUp = ({ value, duration = 1400, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  const str = String(value)
  const pure = /^(\d[\d\s]*)(\+)?$/.exec(str) // integer (+ optional suffix), allows spaces
  const target = pure ? parseInt(pure[1].replace(/\s/g, ''), 10) : null
  const suffix = pure && pure[2] ? pure[2] : ''

  const [n, setN] = useState(target === null || reduce ? target : 0)

  useEffect(() => {
    if (target === null || reduce || !inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, reduce])

  if (target === null) return <span ref={ref} className={className}>{str}</span>
  return <span ref={ref} className={className}>{n.toLocaleString('fr-FR')}{suffix}</span>
}

export default CountUp
