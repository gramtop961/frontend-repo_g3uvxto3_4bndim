import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX }}
      className="origin-left fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500"
    />
  )
}

export default ScrollProgress
