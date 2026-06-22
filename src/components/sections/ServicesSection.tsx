'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  {
    id: 'srv-empresarial',
    badge: 'Plano Empresarial',
    badgeClass: 'bg-brand-green/10 text-brand-green border-brand-green/25',
    image: '/service-empresarial.png',
    imageAlt: 'Internet empresarial para escritórios e comércios',
    title: 'Internet para Empresas',
    description:
      'Conexão rápida e estável para escritórios, comércios e pequenas operações. Suporte ágil e wi-fi de longo alcance inclusos.',
    features: [
      'Conexão rápida e estável',
      'Wi-Fi de longo alcance',
      'Ideal para caixas e computadores',
      'Suporte em horário comercial',
    ],
    ctaLabel: 'Consultar Planos',
    accentFrom: 'from-brand-green/10',
    accentTo: 'to-brand-blue/5',
    hoverBorder: 'hover:border-brand-green/40',
    iconColor: 'text-brand-green',
    ctaClass: 'bg-brand-green hover:bg-brand-green/90 text-white border-0',
    shadow: 'shadow-brand-green/10',
  },
  {
    id: 'srv-dedicado',
    badge: 'Link Dedicado',
    badgeClass: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    image: '/service-link-dedicado.png',
    imageAlt: 'Link dedicado exclusivo para operações críticas',
    title: 'Link Dedicado',
    description:
      'Banda 100% exclusiva sem compartilhamento. IP fixo, SLA garantido e suporte técnico prioritário com reparo em até 5 horas.',
    features: [
      'Banda 100% exclusiva',
      'IP fixo para câmeras e sistemas',
      'Reparo em até 5 horas',
      'Suporte técnico prioritário 24h',
    ],
    ctaLabel: 'Solicitar Cotação',
    accentFrom: 'from-brand-blue/10',
    accentTo: 'to-brand-green/5',
    hoverBorder: 'hover:border-brand-blue/40',
    iconColor: 'text-brand-blue',
    ctaClass: 'gradient-brand text-white border-0',
    shadow: 'shadow-brand-blue/10',
  },
]

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation()

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="servicos" className="py-20 bg-bg-surface">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 mb-4 text-xs font-semibold uppercase tracking-widest">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-3">
            Duas soluções,{' '}
            <span className="gradient-text">uma só confiança</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha o plano ideal para o seu negócio e conte com a estabilidade que você merece.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((srv, i) => (
            <motion.div
              key={srv.id}
              id={srv.id}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`
                group flex flex-col bg-white rounded-2xl border border-border
                ${srv.hoverBorder} hover:shadow-xl ${srv.shadow}
                hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md
              `}
            >
              {/* Image area */}
              <div className={`relative w-full h-52 bg-gradient-to-br ${srv.accentFrom} ${srv.accentTo} overflow-hidden`}>
                <Image
                  src={srv.image}
                  alt={srv.imageAlt}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <Badge className={`${srv.badgeClass} mb-4 w-fit text-xs font-semibold uppercase tracking-widest`}>
                  {srv.badge}
                </Badge>

                <h3 className="text-2xl font-black text-foreground mb-3">{srv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className={`flex-shrink-0 ${srv.iconColor}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    className={`w-full font-semibold shadow-md ${srv.ctaClass} hover:opacity-90 transition-opacity`}
                    onClick={() => scrollTo('#contato')}
                    id={`${srv.id}-cta`}
                  >
                    {srv.ctaLabel}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
