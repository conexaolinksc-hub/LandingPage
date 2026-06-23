'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/forms/ContactForm'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { CONTACT_ITEMS } from '@/constants/content'

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contato" className="py-14 bg-bg-surface">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <SectionHeader
              badge="Contato"
              title="Pronto para conectar sua empresa?"
              highlight="conectar sua empresa?"
              subtitle="Fale com um consultor e receba uma proposta adequada ao seu negócio."
              align="left"
              badgeClassName="bg-brand-green/10 text-brand-green border-brand-green/25"
              className="mb-6"
            />

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-white hover:border-brand-blue/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
                  >
                    <span className="w-10 h-10 rounded-md bg-brand-blue/8 border border-brand-blue/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/15 transition-colors shadow-sm">
                      <Icon size={18} className="text-brand-blue" />
                    </span>
                    <span className="font-medium text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
