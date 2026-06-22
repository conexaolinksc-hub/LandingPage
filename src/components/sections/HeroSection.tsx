'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-bg-base"
    >
      {/* Subtle background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 70% 30%, oklch(0.88 0.06 264 / 0.55) 0%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 15% 75%, oklch(0.90 0.05 142 / 0.40) 0%, transparent 60%)
          `,
        }}
      />

      {/* Floating blobs — soft on light */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-60px] right-[-40px] w-[420px] h-[420px] rounded-full"
        style={{
          background: 'oklch(0.75 0.14 264)',
          filter: 'blur(90px)',
          opacity: 0.18,
        }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-[-40px] left-[8%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'oklch(0.75 0.14 142)',
          filter: 'blur(80px)',
          opacity: 0.16,
        }}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10 pt-24 pb-14 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white border border-black/8 shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground/70 mb-8"
        >
          <Zap size={14} className="text-brand-green" />
          Internet de verdade para quem não pode parar
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-foreground"
        >
          Conectividade que{' '}
          <span className="gradient-text">impulsiona negócios</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
        >
          Soluções empresariais e link dedicado com SLA garantido.
          Estabilidade que a sua operação exige.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            className="gradient-brand text-white font-semibold text-base px-8 shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
            onClick={() => scrollTo('#link-dedicado')}
            id="hero-cta-solutions"
          >
            Ver Soluções
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
    </section>
  )
}
