import { Code2, LayoutGrid, Smartphone, Workflow } from "lucide-react"

import type { Service } from "@/types"

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desenvolvimento de software sob medida",
    description:
      "Sistemas construídos do zero para resolver exatamente o seu problema — sem amarras de ferramentas genéricas.",
  },
  {
    icon: Smartphone,
    title: "Design de aplicativos mobile",
    description:
      "Apps iOS e Android rápidos e elegantes, pensados para engajar usuários e escalar com o seu negócio.",
  },
  {
    icon: LayoutGrid,
    title: "Aplicações web",
    description:
      "Plataformas e dashboards performáticos com dados em tempo real, fluxos complexos e experiência impecável.",
  },
  {
    icon: Workflow,
    title: "Transformação digital",
    description:
      "Automatizamos operações e modernizamos processos legados para reduzir custos e acelerar decisões.",
  },
]
