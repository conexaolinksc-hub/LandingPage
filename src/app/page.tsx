import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'

// Lazy load sections below the fold
const StatsSection = dynamic(() => import('@/components/sections/StatsSection').then(mod => mod.StatsSection), { ssr: true })
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => mod.ContactSection), { ssr: true })

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
