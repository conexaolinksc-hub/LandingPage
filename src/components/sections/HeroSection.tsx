'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { fadeUpContainer, fadeUpItem } from '@/lib/animations'
import { scrollToSection } from '@/utils/scroll'

/* Blobs animados */
const blobs = [
  {
    style: { top: '-12%', right: '-8%', width: 720, height: 720 },
    color: 'oklch(0.68 0.20 264)',
    animate: { y: [0, -30, 0], x: [0, 18, 0], scale: [1, 1.06, 1] },
    duration: 10,
  },
  {
    style: { bottom: '-18%', left: '-10%', width: 620, height: 620 },
    color: 'oklch(0.66 0.20 162)',
    animate: { y: [0, 28, 0], x: [0, -16, 0], scale: [1, 0.94, 1] },
    duration: 13,
  },
  {
    style: { top: '28%', left: '32%', width: 470, height: 470 },
    color: 'oklch(0.72 0.16 220)',
    animate: { y: [0, -22, 0], x: [0, 24, 0], scale: [1, 1.08, 1] },
    duration: 11,
    delay: 1.5,
  },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg-base"
    >
      {/* ── Blobs ── */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            ...blob.style,
            background: blob.color,
            filter: 'blur(85px)',
            opacity: 0.22,
            willChange: 'transform',
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            delay: (blob as { delay?: number }).delay ?? 0,
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
            'radial-gradient(circle, oklch(0.50 0.12 264 / 0.12) 1px, transparent 1px)',
          backgroundSize: '33px 33px',
        }}
      />

      {/* ══════════════════════════════════════════════════ */}
      {/* ── MOBILE: Imagem no topo + Texto abaixo ──      */}
      {/* ══════════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 flex flex-col">
        {/* Imagem da fachada (topo) */}
        <div className="relative w-full h-[45vw] min-h-[200px] max-h-[320px] mt-16">
          <Image
            src="/fachada.webp"
            alt="Fachada ConexãoLink"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
        </div>

        {/* Texto + CTAs (abaixo da imagem) */}
        <motion.div
          className="px-6 pb-12 -mt-4"
          variants={fadeUpContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUpItem}
            className="text-4xl md:text-5xl font-black leading-[1.08] tracking-tight mb-5 text-foreground"
          >
            Conectividade que{' '}
            <span className="gradient-text">impulsiona negócios</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-base md:text-lg text-foreground/75 leading-relaxed mb-8"
          >
            Soluções empresariais e link dedicado com SLA garantido.
            Estabilidade que a sua operação exige.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="gradient-brand text-white font-semibold text-base px-8 shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
              onClick={() => scrollToSection('#servicos')}
              id="hero-cta-solutions"
            >
              Nossos Serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground border-black/15 bg-white/70 backdrop-blur-sm hover:bg-bg-surface hover:border-brand-blue hover:text-brand-blue transition-all text-base px-8 shadow-sm"
              onClick={() => scrollToSection('#contato')}
              id="hero-cta-contact"
            >
              Solicitar Proposta
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════ */}
      {/* ── DESKTOP: Layout original (texto esq + img dir) */}
      {/* ══════════════════════════════════════════════════ */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%)',
        }}
      >
        <Image
          src="/fachada.webp"
          alt="Fachada ConexãoLink"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.65 }}
          sizes="(min-width: 1024px) 52vw, 100vw"
          priority
        />
      </div>

      <motion.div
        className="hidden lg:flex container mx-auto px-6 relative z-10 pt-28 pb-16 min-h-[92vh] items-center"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl">
          <motion.h1
            variants={fadeUpItem}
            className="text-5xl md:text-7xl font-black leading-[1.04] tracking-tight mb-6 text-foreground"
          >
            Conectividade que{' '}
            <span className="gradient-text">impulsiona negócios</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-lg md:text-xl text-foreground/75 leading-relaxed mb-10"
          >
            Soluções empresariais e link dedicado com SLA garantido.
            Estabilidade que a sua operação exige.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gradient-brand text-white font-semibold text-base px-8 shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
              onClick={() => scrollToSection('#servicos')}
              id="hero-cta-solutions-desktop"
            >
              Nossos Serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground border-black/15 bg-white/70 backdrop-blur-sm hover:bg-bg-surface hover:border-brand-blue hover:text-brand-blue transition-all text-base px-8 shadow-sm"
              onClick={() => scrollToSection('#contato')}
              id="hero-cta-contact-desktop"
            >
              Solicitar Proposta
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Fade inferior ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-base))' }}
      />
    </section>
  )
}
