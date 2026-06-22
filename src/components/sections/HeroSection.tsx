'use client'

import { motion } from 'framer-motion'
import { Zap, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUpContainer, fadeUpItem } from '@/lib/animations'
import { scrollToSection } from '@/utils/scroll'

/* Número de anéis pulsantes */
const RINGS = [0, 1, 2, 3, 4]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white"
    >
      {/* ── Keyframes inline ── */}
      <style>{`
        @keyframes wave-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ring-expand {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>

      {/* ── Fundo gradiente suave ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.94 0.06 264 / 0.55), transparent 70%), ' +
            'radial-gradient(ellipse 60% 50% at 20% 80%, oklch(0.94 0.06 162 / 0.35), transparent 70%)',
        }}
      />

      {/* ── Anéis pulsantes (decoração direita) ── */}
      <div
        aria-hidden
        className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:flex items-center justify-center"
      >
        {RINGS.map((i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-brand-blue"
            style={{
              width: 88 + i * 72,
              height: 88 + i * 72,
              opacity: 0,
              animation: `ring-expand 3.2s ease-out infinite`,
              animationDelay: `${i * 0.64}s`,
            }}
          />
        ))}
        {/* Ícone central */}
        <div
          className="relative z-10 w-20 h-20 rounded-full gradient-brand flex items-center justify-center shadow-2xl"
          style={{ boxShadow: '0 0 40px oklch(0.55 0.22 264 / 0.35)' }}
        >
          <Wifi size={34} className="text-white" strokeWidth={2.2} />
        </div>
      </div>

      {/* ── Conteúdo ── */}
      <motion.div
        className="container mx-auto px-6 relative z-10 pt-32 pb-44 max-w-2xl"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUpItem}>
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/8 shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground/70 mb-8">
            <Zap size={14} className="text-brand-green" />
            Internet de verdade para quem não pode parar
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUpItem}
          className="text-5xl md:text-7xl font-black leading-[1.04] tracking-tight mb-6 text-foreground"
        >
          Conectividade que{' '}
          <span className="gradient-text">impulsiona negócios</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUpItem}
          className="text-lg md:text-xl text-foreground/75 leading-relaxed mb-10 max-w-xl"
        >
          Soluções empresariais e link dedicado com SLA garantido.
          Estabilidade que a sua operação exige.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4">
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

      {/* ── Ondas animadas na base ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 200 }}
      >
        {/* Onda 3 — fundo, mais lenta */}
        <div
          className="absolute bottom-0 flex"
          style={{ width: '200%', animation: 'wave-scroll 9s linear infinite' }}
        >
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 1440 200" preserveAspectRatio="none"
              className="flex-shrink-0" style={{ width: '50%', height: 200 }}>
              <path
                d="M0,120 C180,160 360,80 540,120 C720,160 900,80 1080,120 C1260,160 1440,80 1440,100 L1440,200 L0,200 Z"
                fill="oklch(0.72 0.16 220 / 0.20)"
              />
            </svg>
          ))}
        </div>

        {/* Onda 2 — meio, direção inversa */}
        <div
          className="absolute bottom-0 flex"
          style={{ width: '200%', animation: 'wave-scroll 7s linear infinite reverse' }}
        >
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 1440 180" preserveAspectRatio="none"
              className="flex-shrink-0" style={{ width: '50%', height: 180 }}>
              <path
                d="M0,90 C200,130 400,50 600,90 C800,130 1000,50 1200,90 C1360,120 1440,70 1440,80 L1440,180 L0,180 Z"
                fill="oklch(0.68 0.18 264 / 0.16)"
              />
            </svg>
          ))}
        </div>

        {/* Onda 1 — frente, mais rápida */}
        <div
          className="absolute bottom-0 flex"
          style={{ width: '200%', animation: 'wave-scroll 5s linear infinite' }}
        >
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 1440 160" preserveAspectRatio="none"
              className="flex-shrink-0" style={{ width: '50%', height: 160 }}>
              <path
                d="M0,70 C240,110 480,30 720,70 C960,110 1200,30 1440,55 L1440,160 L0,160 Z"
                fill="oklch(0.66 0.20 162 / 0.14)"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Fade final para o branco */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </section>
  )
}
