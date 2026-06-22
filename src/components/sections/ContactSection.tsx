'use client'

import { Phone, MessageCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/forms/ContactForm'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SITE } from '@/constants/site'

const contactItems = [
  {
    id: 'contact-phone',
    icon: Phone,
    label: SITE.phone,
    href: `tel:${SITE.phone.replace(/\D/g, '')}`,
  },
  {
    id: 'contact-whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
  },
  {
    id: 'contact-email',
    icon: Mail,
    label: SITE.email,
    href: `mailto:${SITE.email}`,
  },
]

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
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="bg-brand-green/10 text-brand-green border-brand-green/25 mb-5 text-xs font-semibold uppercase tracking-widest">
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-foreground">
              Pronto para{' '}
              <span className="gradient-text">conectar sua empresa?</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Fale com um consultor e receba uma proposta adequada ao seu negócio.
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white hover:border-brand-blue/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
                  >
                    <span className="w-10 h-10 rounded-lg bg-brand-blue/8 border border-brand-blue/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/15 transition-colors shadow-sm">
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
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
