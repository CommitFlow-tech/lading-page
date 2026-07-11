"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react"

import { SiteLogo } from "@/components/layout/site-logo"
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll"
import { Button } from "@/components/ui/button"
import { contactInfo, siteConfig } from "@/lib/site-config"
import { motion } from "motion/react"

const socialLinks = [
  { icon: Globe, label: "Website" },
  { icon: LinkIcon, label: "LinkedIn" },
  { icon: MessageCircle, label: "WhatsApp" },
] as const

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contato" className="scroll-mt-20 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <div>
            <a href="#" aria-label="CommitFlow-Tech — início">
              <SiteLogo />
            </a>

            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Vamos construir a sua próxima solução
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Estamos prontos para entender o seu desafio e desenhar a tecnologia
              certa para resolvê-lo. Fale com a nossa equipe.
            </p>

            <ul className="mt-8 space-y-4">
              <ContactItem icon={Mail} label={contactInfo.email} />
              <ContactItem icon={Phone} label={contactInfo.phone} />
              <ContactItem icon={MapPin} label={contactInfo.location} />
            </ul>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <motion.div
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              whileHover={{ y: -2, boxShadow: "0 16px 32px -12px oklch(0.62 0.21 258 / 0.08)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
            <h3 className="text-xl font-semibold tracking-tight">
              Pronto para transformar sua ideia? Conte para a gente
            </h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/10 px-6 py-12 text-center">
                <CheckCircle2 className="size-10 text-primary" />
                <p className="mt-4 text-base font-medium">Mensagem enviada!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <FormField id="name" label="Nome">
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </FormField>
                <FormField id="email" label="E-mail corporativo">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </FormField>
                <FormField id="message" label="Mensagem">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte sobre o desafio do seu negócio..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </FormField>
                <Button
                  type="submit"
                  size="lg"
                  className="group h-11 w-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Enviar mensagem
                  <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
                </Button>
              </form>
            )}
            </motion.div>
          </RevealOnScroll>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary">
        <Icon className="size-4" />
      </span>
      {label}
    </li>
  )
}

function FormField({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
