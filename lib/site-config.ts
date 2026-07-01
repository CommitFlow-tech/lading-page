import type { ContactInfo, NavLink } from "@/types"

export const siteConfig = {
  name: "BuildX Solutions",
  shortName: "CommitFlow-Tech",
  description:
    "Transformamos desafios únicos de negócio em software poderoso. Desenvolvimento sob medida, apps mobile, aplicações web e transformação digital para qualquer setor.",
  url: "https://buildxsolutions.com",
  locale: "pt-BR",
} as const

export const navLinks: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export const contactInfo: ContactInfo = {
  email: "contato@buildxsolutions.com",
  phone: "+55 (11) 4000-1234",
  location: "São Paulo, Brasil — Atendimento global",
}
