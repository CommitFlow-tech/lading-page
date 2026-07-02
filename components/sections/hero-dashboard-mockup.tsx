"use client"

import {
  Activity,
  BarChart3,
  Bell,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const kpiCards = [
  { label: "Receita mensal", value: "R$ 284k", change: "+12,4%", positive: true },
  { label: "Usuários ativos", value: "1.842", change: "+8,1%", positive: true },
  { label: "Taxa de conversão", value: "4,7%", change: "+0,6%", positive: true },
  { label: "Tickets abertos", value: "23", change: "-18%", positive: false },
]

const barHeights = [42, 58, 48, 72, 65, 80, 74, 88, 76, 92, 85, 96]

const activityRows = [
  { label: "Novo contrato assinado", time: "há 2 min", status: "success" },
  { label: "Relatório de compliance", time: "há 14 min", status: "info" },
  { label: "Alerta de SLA resolvido", time: "há 1 h", status: "success" },
  { label: "Integração API concluída", time: "há 3 h", status: "info" },
]

const navItems = [
  { icon: LayoutDashboard, active: true },
  { icon: BarChart3, active: false },
  { icon: Users, active: false },
  { icon: Activity, active: false },
  { icon: Settings, active: false },
]

export function HeroDashboardMockup() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="flex aspect-[16/10] w-full bg-background text-foreground"
      role="img"
      aria-label="Painel de análise de dados com gráficos e métricas operacionais"
    >
      {/* Sidebar */}
      <aside className="hidden w-[52px] shrink-0 flex-col items-center gap-3 border-r border-border bg-secondary/30 py-4 sm:flex">
        <div className="mb-2 flex size-7 items-center justify-center rounded-lg bg-primary/15">
          <div className="size-3 rounded-sm bg-primary" />
        </div>
        {navItems.map(({ icon: Icon, active }, index) => (
          <div
            key={index}
            className={`flex size-8 items-center justify-center rounded-lg transition-colors ${
              active
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground/60"
            }`}
          >
            <Icon className="size-3.5" strokeWidth={1.75} />
          </div>
        ))}
      </aside>

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
              Visão geral
            </p>
            <h3 className="text-xs font-semibold sm:text-sm">Painel Operacional</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden h-7 w-28 rounded-md border border-border bg-secondary/40 sm:block" />
            <div className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary/40 text-muted-foreground">
              <Bell className="size-3" />
            </div>
            <div className="size-7 rounded-full bg-primary/20 ring-1 ring-primary/30" />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-3 overflow-hidden p-3 sm:gap-4 sm:p-4">
          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {kpiCards.map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-border bg-card/80 px-2.5 py-2 sm:px-3 sm:py-2.5"
              >
                <p className="truncate text-[9px] text-muted-foreground sm:text-[10px]">
                  {card.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold tracking-tight sm:text-base">
                  {card.value}
                </p>
                <p
                  className={`mt-0.5 text-[9px] font-medium sm:text-[10px] ${
                    card.positive ? "text-chart-3" : "text-destructive/80"
                  }`}
                >
                  {card.change}
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-3">
            {/* Area chart */}
            <div className="col-span-1 flex flex-col rounded-lg border border-border bg-card/80 p-2.5 sm:col-span-3 sm:p-3">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium sm:text-xs">Performance</p>
                  <p className="text-[9px] text-muted-foreground">Últimos 30 dias</p>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-chart-3 sm:text-[10px]">
                  <TrendingUp className="size-2.5" />
                  +24%
                </div>
              </div>
              <div className="relative min-h-[72px] flex-1 sm:min-h-0">
                <svg
                  viewBox="0 0 320 100"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.62 0.21 258 / 0.35)" />
                      <stop offset="100%" stopColor="oklch(0.62 0.21 258 / 0)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,72 L32,65 L64,58 L96,48 L128,52 L160,38 L192,42 L224,28 L256,32 L288,18 L320,22 L320,100 L0,100 Z"
                    fill="url(#areaFill)"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.path
                    d="M0,72 L32,65 L64,58 L96,48 L128,52 L160,38 L192,42 L224,28 L256,32 L288,18 L320,22"
                    fill="none"
                    stroke="oklch(0.62 0.21 258)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={reduceMotion ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </div>
            </div>

            {/* Bar chart */}
            <div className="col-span-1 flex flex-col rounded-lg border border-border bg-card/80 p-2.5 sm:col-span-2 sm:p-3">
              <div className="mb-2">
                <p className="text-[10px] font-medium sm:text-xs">Volume por mês</p>
                <p className="text-[9px] text-muted-foreground">Operações processadas</p>
              </div>
              <div className="flex flex-1 items-end justify-between gap-0.5 sm:gap-1">
                {barHeights.map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-sm bg-primary/70"
                    style={{ maxHeight: `${height}%` }}
                    initial={reduceMotion ? false : { height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Activity table */}
          <div className="hidden rounded-lg border border-border bg-card/80 sm:block">
            <div className="border-b border-border px-3 py-2">
              <p className="text-[10px] font-medium sm:text-xs">Atividade recente</p>
            </div>
            <div className="divide-y divide-border/60">
              {activityRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-3 py-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-1.5 rounded-full ${
                        row.status === "success" ? "bg-chart-3" : "bg-primary"
                      }`}
                    />
                    <span className="text-[10px] text-foreground/90">{row.label}</span>
                  </div>
                  <span className="text-[9px] text-muted-foreground">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
