"use client"
import { motion, useScroll } from "motion/react"

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
        }}
        className="
          fixed top-0 left-0 right-0 h-[6px]
          origin-left
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          shadow-lg shadow-pink-500/20
        "
      />
    </>
  )
}
