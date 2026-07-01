import type { LucideIcon } from "lucide-react"

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export interface CaseHighlight {
  text: string
}

export interface CaseMetric {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  metric: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}
