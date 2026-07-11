import type { ContactInfo, NavLink } from "@/types"

export const siteConfig = {
  name: "CommitFlow-Tech",
  shortName: "CommitFlow-Tech",
  description:
    "Transformamos desafios únicos de negócio em software poderoso. Desenvolvimento sob medida, apps mobile, aplicações web e transformação digital para qualquer setor.",
  url: "https://commitflow-tech.com",
  locale: "pt-BR",
} as const

export const navLinks: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export const contactInfo: ContactInfo = {
  email: "commitflowtecnologia@gmail.com",
  phone: "+55 (85) 98122-8738",
  location: "Ceara , Brasil — Atendimento global",
}
