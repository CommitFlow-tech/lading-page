import { Boxes } from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <span className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Boxes className="size-5" />
      </span>
      <span className="text-base">
        {siteConfig.shortName}
        <span className="text-primary">.</span>
      </span>
    </span>
  )
}
