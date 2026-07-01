"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { services } from "@/lib/data/services"

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-primary">Nossas capacidades</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Tecnologia agnóstica de indústria
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Combinamos engenharia de ponta com profundo entendimento de negócio para
              entregar soluções que geram resultado, seja qual for o seu mercado.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 70}>
              <motion.div
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                whileHover={{ y: -2, borderColor: "oklch(0.62 0.21 258 / 0.3)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ArrowUpRight className="mt-5 size-4 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
