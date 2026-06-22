'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* ── Background cover image ── */}
      <Image
        src="/hero-cover.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        aria-hidden
      />

      {/* ── Dark overlay for text readability ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, oklch(0.08 0.04 264 / 0.82) 0%, oklch(0.10 0.06 264 / 0.65) 55%, oklch(0.12 0.08 180 / 0.30) 100%)',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="container mx-auto px-6 relative z-10 pt-28 pb-20 max-w-4xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/90 mb-8">
            <Zap size={14} className="text-emerald-400" />
            Internet de verdade para quem não pode parar
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black leading-[1.04] tracking-tight mb-6 text-white"
        >
          Conectividade que{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            impulsiona negócios
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
        >
          Soluções empresariais e link dedicado com SLA garantido.
          Estabilidade que a sua operação exige.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="text-white font-semibold text-base px-8 border-0 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0d9488 100%)' }}
            onClick={() => scrollTo('#servicos')}
            id="hero-cta-solutions"
          >
            Nossos Serviços
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all text-base px-8"
            onClick={() => scrollTo('#contato')}
            id="hero-cta-contact"
          >
            Solicitar Proposta
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into page bg ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg-base))',
        }}
      />
    </section>
  )
}
