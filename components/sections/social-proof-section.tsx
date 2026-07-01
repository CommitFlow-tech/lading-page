"use client"

import { Star } from "lucide-react"
import { motion } from "motion/react"

import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { clientLogos, testimonials } from "@/lib/data/social-proof"

export function SocialProofSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium text-primary">Histórias de sucesso</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Resultados que falam por nós
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold tracking-tight text-muted-foreground transition-opacity duration-500 hover:opacity-100"
              >
                {logo}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} delay={index * 80}>
              <motion.figure
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                whileHover={{ y: -2, borderColor: "oklch(0.62 0.21 258 / 0.25)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <span className="mt-4 inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {testimonial.metric}
              </span>
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                {`"${testimonial.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </figcaption>
              </motion.figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
