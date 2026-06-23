'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Rocket, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { fadeUpContainer, fadeUpItem } from '@/lib/animations'
import { scrollToSection } from '@/utils/scroll'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* ── Background Image Full Bleed ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/fachada.webp"
          alt="Fachada ConexãoLink"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />
        
        {/* Brand color subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-transparent mix-blend-overlay" />
      </div>

      {/* ── Conteúdo Centralizado ── */}
      <motion.div
        className="container mx-auto px-6 relative z-10 pt-32 pb-24 flex flex-col items-center text-center"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl flex flex-col items-center">
          
          {/* Badge Luminosa */}
          <motion.div variants={fadeUpItem} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Rocket size={16} className="text-brand-green-light" />
              Internet 100% Fibra Óptica
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpItem}
            className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white drop-shadow-lg"
          >
            Conectividade que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-white to-brand-green-light filter drop-shadow-sm">
              impulsiona negócios
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUpItem}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-light drop-shadow-md"
          >
            Soluções empresariais e link dedicado com SLA garantido.
            A estabilidade e alta performance que a sua operação exige para nunca parar.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-full sm:w-auto">
            <Button
              size="lg"
              className="gradient-brand text-white font-bold text-base px-8 py-6 rounded-xl shadow-[0_0_30px_-5px_rgba(0,112,240,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,112,240,0.7)] hover:scale-105 transition-all duration-300 border border-white/10"
              onClick={() => scrollToSection('#servicos')}
              id="hero-cta-solutions"
            >
              Conheça os Planos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/15 transition-all duration-300 text-base px-8 py-6 rounded-xl shadow-lg"
              onClick={() => scrollToSection('#contato')}
              id="hero-cta-contact"
            >
              Falar com Consultor
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Indicador de Scroll ── */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors"
        onClick={() => scrollToSection('#servicos')}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* ── Fade inferior para transição suave com a próxima seção ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-base))' }}
      />
    </section>
  )
}
