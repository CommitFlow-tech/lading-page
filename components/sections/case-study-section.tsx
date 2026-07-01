"use client"

import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"
import { motion } from "motion/react"

import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { Button } from "@/components/ui/button"
import {
  caseHighlights,
  caseMetrics,
  nextIndustries,
} from "@/lib/data/case-study"
import type { CaseMetric } from "@/types"

export function CaseStudySection() {
  return (
    <section id="cases" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <motion.div
            className="overflow-hidden rounded-3xl border border-border bg-card"
            whileHover={{ boxShadow: "0 20px 40px -12px oklch(0.62 0.21 258 / 0.08)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <ShieldCheck className="size-3.5" />
                Case em destaque
              </div>

              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Especialistas em: Segurança do Trabalho
                <span className="text-muted-foreground"> (e escalando além).</span>
              </h2>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Resolvemos um problema complexo de um setor altamente regulado —
                provando nossa capacidade de lidar com compliance pesado, grandes
                volumes de dados operacionais e dashboards críticos para a tomada de
                decisão.
              </p>

              <ul className="mt-7 space-y-3">
                {caseHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="group mt-8 h-11 bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                nativeButton={false}
                render={<a href="#contato" />}
              >
                Quero um resultado assim
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>

            <div className="relative flex flex-col justify-between gap-8 border-t border-border bg-secondary/30 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="grid grid-cols-2 gap-4">
                {caseMetrics.map((metric, index) => (
                  <RevealOnScroll key={metric.label} delay={index * 60}>
                    <CaseMetricCard {...metric} />
                  </RevealOnScroll>
                ))}
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Indústrias que atendemos a seguir
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nextIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function CaseMetricCard({ value, label }: CaseMetric) {
  return (
    <motion.div
      className="rounded-2xl border border-border bg-card p-5"
      whileHover={{ borderColor: "oklch(0.62 0.21 258 / 0.25)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-3xl font-semibold tracking-tight text-primary">{value}</p>
      <p className="mt-1.5 text-xs leading-snug text-muted-foreground">{label}</p>
    </motion.div>
  )
}
