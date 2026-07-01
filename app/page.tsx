import { SiteNavbar } from "@/components/layout/site-navbar"
import { CaseStudySection } from "@/components/sections/case-study-section"
import { ContactFooter } from "@/components/sections/contact-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudySection />
        <SocialProofSection />
      </main>
      <ContactFooter />
    </div>
  )
}
