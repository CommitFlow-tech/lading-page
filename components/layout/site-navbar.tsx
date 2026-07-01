"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/layout/site-logo"
import { fadeDownVariants, softTransition } from "@/lib/motion"
import { navLinks } from "@/lib/site-config"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={fadeDownVariants}
      transition={{ ...softTransition, duration: 0.55 }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="CommitFlow-Tech — início">
          <SiteLogo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            size="lg"
            className="h-10 bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            nativeButton={false}
            render={<a href="#contato" />}
          >
            Consultoria gratuita
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-border/60 bg-background/95 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-4 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-3 h-11 w-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                nativeButton={false}
                render={<a href="#contato" onClick={() => setOpen(false)} />}
              >
                Consultoria gratuita
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
