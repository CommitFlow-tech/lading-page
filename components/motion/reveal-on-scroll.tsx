"use client"

import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef, type ReactNode } from "react"

import { fadeUpVariants, softTransition } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, {
    once: false,
    amount: 0.12,
    margin: "0px 0px -32px 0px",
  })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={reduceMotion || isInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ ...softTransition, delay: isInView ? delay / 1000 : 0 }}
    >
      {children}
    </motion.div>
  )
}
