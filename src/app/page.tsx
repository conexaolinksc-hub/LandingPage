import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { LinkDedicadoSection } from '@/components/sections/LinkDedicadoSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <LinkDedicadoSection />
      <ContactSection />
    </>
  )
}
