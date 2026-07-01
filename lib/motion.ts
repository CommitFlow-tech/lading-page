import type { Transition, Variants } from "motion/react"

export const easeSoft = [0.22, 1, 0.36, 1] as const

export const softTransition: Transition = {
  duration: 0.7,
  ease: easeSoft,
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
}

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSoft },
  },
}

export const floatTransition: Transition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut",
}

export const glowTransition: Transition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
}
