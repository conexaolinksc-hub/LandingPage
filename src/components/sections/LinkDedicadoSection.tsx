'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { LD_FEATURES } from '@/constants/content'

export function LinkDedicadoSection() {
  const { ref, isInView } = useScrollAnimation()

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="link-dedicado"
      className="relative py-14 overflow-hidden bg-bg-base"
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.90 0.04 142 / 0.35) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 mb-5 text-xs font-semibold uppercase tracking-widest">
            Link Dedicado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-foreground">
            Conexão{' '}
            <span className="gradient-text">exclusiva para você</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Banda 100% exclusiva, sem compartilhamento. Ideal para operações críticas.
          </p>
        </div>

        {/* Feature grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          {LD_FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.id}
                id={feat.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className="group flex flex-col p-7 rounded-xl border border-border bg-white hover:border-brand-green/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-brand-green/10 to-brand-blue/6 border border-brand-green/18 group-hover:from-brand-green/18 group-hover:border-brand-green/35 transition-all shadow-sm">
                  <Icon size={22} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-base mb-2 text-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-2xl bg-white border border-border shadow-md"
        >
          <p className="text-base font-semibold text-foreground/80">
            Para empresas que dependem 100% da internet.
          </p>
          <Button
            className="gradient-brand text-white font-semibold shadow-md shadow-brand-blue/20 hover:opacity-90 border-0 flex-shrink-0"
            onClick={() => scrollTo('#contato')}
            id="ld-cta"
          >
            Solicitar Cotação Formal
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
