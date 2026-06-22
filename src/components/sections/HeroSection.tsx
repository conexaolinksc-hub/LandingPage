'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ParticleNetwork } from '@/components/ui/ParticleNetwork'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

/* Animated blob data */
const blobs = [
  {
    style: { top: '-12%', right: '-8%', width: 680, height: 680 },
    color: 'oklch(0.72 0.18 264)',   // brand blue
    animate: { y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.06, 1] },
    duration: 10,
  },
  {
    style: { bottom: '-18%', left: '-10%', width: 560, height: 560 },
    color: 'oklch(0.72 0.18 162)',   // brand green
    animate: { y: [0, 28, 0], x: [0, -18, 0], scale: [1, 0.94, 1] },
    duration: 13,
  },
  {
    style: { top: '30%', left: '35%', width: 420, height: 420 },
    color: 'oklch(0.78 0.14 220)',   // mid teal
    animate: { y: [0, -20, 0], x: [0, 24, 0], scale: [1, 1.08, 1] },
    duration: 11,
    delay: 1.5,
  },
  {
    style: { top: '-5%', left: '15%', width: 300, height: 300 },
    color: 'oklch(0.82 0.12 290)',   // light purple accent
    animate: { y: [0, 22, 0], scale: [1, 0.92, 1] },
    duration: 9,
    delay: 2,
  },
]

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white"
    >
      {/* ── Animated blobs ── */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            ...blob.style,
            background: blob.color,
            filter: 'blur(90px)',
            opacity: 0.17,
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            delay: blob.delay ?? 0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ── Dot grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, oklch(0.55 0.12 264 / 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Particle network ── */}
      <ParticleNetwork />

      {/* ── Decorative rings ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ right: '6%', top: '18%' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '1.5px solid oklch(0.60 0.18 264 / 0.15)',
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 36,
            borderRadius: '50%',
            border: '1.5px solid oklch(0.60 0.16 162 / 0.18)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 76,
            borderRadius: '50%',
            border: '1.5px solid oklch(0.65 0.14 220 / 0.20)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="container mx-auto px-6 relative z-10 pt-28 pb-16 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/8 shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground/70 mb-8">
            <Zap size={14} className="text-brand-green" />
            Internet de verdade para quem não pode parar
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black leading-[1.04] tracking-tight mb-6 text-foreground"
        >
          Conectividade que{' '}
          <span className="gradient-text">impulsiona negócios</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
        >
          Soluções empresariais e link dedicado com SLA garantido.
          Estabilidade que a sua operação exige.
        </motion.p>

        {/* CTAs */}
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
            className="text-foreground border-black/15 bg-white/70 backdrop-blur-sm hover:bg-bg-surface hover:border-brand-blue hover:text-brand-blue transition-all text-base px-8 shadow-sm"
            onClick={() => scrollTo('#contato')}
            id="hero-cta-contact"
          >
            Solicitar Proposta
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-base))' }}
      />
    </section>
  )
}
