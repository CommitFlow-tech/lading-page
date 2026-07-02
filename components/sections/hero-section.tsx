"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, Play, Sparkles } from "lucide-react"

import { HeroDashboardMockup } from "@/components/sections/hero-dashboard-mockup"
import { Button } from "@/components/ui/button"
import { heroStats } from "@/lib/data/hero"
import {
  floatTransition,
  glowTransition,
  heroContainerVariants,
  heroItemVariants,
} from "@/lib/motion"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.21 258 / 0.18), transparent 70%)",
        }}
        animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={glowTransition}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={heroContainerVariants}
        >
          <motion.div
            variants={heroItemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            Software house para qualquer indústria
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Você exige. Nós construímos.{" "}
            <span className="text-primary">Soluções digitais para todo setor.</span>
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Transformamos as dores específicas do seu negócio em software poderoso e
            sob medida — independentemente da sua indústria.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-12 w-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
              nativeButton={false}
              render={<a href="#servicos" />}
            >
              Conheça nossos serviços
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full border-border bg-secondary/40 px-6 text-sm font-medium hover:bg-secondary sm:w-auto"
              nativeButton={false}
              render={<a href="#cases" />}
            >
              <Play className="size-4 text-primary" />
              Veja nossa metodologia
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-16 max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            aria-hidden
            className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] opacity-60 blur-2xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.62 0.21 258 / 0.25), transparent)",
            }}
            animate={reduceMotion ? undefined : { opacity: [0.5, 0.7, 0.5] }}
            transition={glowTransition}
          />
          <motion.div
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 ring-1 ring-white/5"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={floatTransition}
          >
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-3/70" />
              <span className="size-3 rounded-full bg-primary/70" />
            </div>
            <HeroDashboardMockup />
          </motion.div>
        </motion.div>

        <motion.dl
          className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-10"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.55 },
            },
          }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={heroItemVariants}
              className="text-center"
            >
              <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
