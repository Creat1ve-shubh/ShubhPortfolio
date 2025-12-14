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
          fixed top-0 left-0 right-0 h-2
          origin-left
          bg-orange-500
          border-b-2 border-black
          z-50
        "
      />
    </>
  )
}
