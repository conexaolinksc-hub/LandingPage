'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-bg-base"
    >
      {/* Subtle bg gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 60% at 75% 40%, oklch(0.88 0.06 264 / 0.5) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 80%, oklch(0.90 0.05 142 / 0.35) 0%, transparent 60%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: copy ── */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-white border border-black/8 shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground/70 mb-8">
                <Zap size={14} className="text-brand-green" />
                Internet de verdade para quem não pode parar
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-5 text-foreground"
            >
              Conectividade que{' '}
              <span className="gradient-text">impulsiona negócios</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Soluções empresariais e link dedicado com SLA garantido.
              Estabilidade que a sua operação exige.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-brand text-white font-semibold text-base px-8 shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
                onClick={() => scrollTo('#servicos')}
                id="hero-cta-solutions"
              >
                Nossos Serviços
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground border-black/15 bg-white hover:bg-bg-surface hover:border-brand-blue hover:text-brand-blue transition-all text-base px-8 shadow-sm"
                onClick={() => scrollTo('#contato')}
                id="hero-cta-contact"
              >
                Solicitar Proposta
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: banner image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow ring behind image */}
              <div
                aria-hidden
                className="absolute inset-6 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.75 0.14 264 / 0.18), oklch(0.70 0.14 142 / 0.14))',
                  filter: 'blur(32px)',
                }}
              />
              <Image
                src="/hero-banner.png"
                alt="ConexãoLink — rede de alta performance"
                width={600}
                height={480}
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl shadow-brand-blue/10"
                sizes="(max-width: 1024px) 0px, 50vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
