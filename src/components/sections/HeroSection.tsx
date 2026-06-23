'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { fadeUpContainer, fadeUpItem } from '@/lib/animations'
import { scrollToSection } from '@/utils/scroll'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg-base"
    >
      {/* ── Background Sutil (Light) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, oklch(0.50 0.12 264 / 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div variants={fadeUpItem} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase">
              <Rocket size={16} />
              Internet 100% Fibra Óptica
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpItem}
            className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-foreground"
          >
            Conectividade que{' '}
            <span className="gradient-text filter drop-shadow-sm">
              impulsiona negócios
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUpItem}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-normal"
          >
            Soluções empresariais e link dedicado com SLA garantido.
            A estabilidade e alta performance que a sua operação exige para nunca parar.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="gradient-brand text-white font-bold text-base px-8 py-6 rounded-xl shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => scrollToSection('#servicos')}
              id="hero-cta-solutions"
            >
              Conheça os Planos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground border-border bg-bg-surface hover:bg-brand-blue/5 hover:border-brand-blue/30 hover:text-brand-blue transition-all duration-300 text-base px-8 py-6 rounded-xl shadow-sm"
              onClick={() => scrollToSection('#contato')}
              id="hero-cta-contact"
            >
              Falar com Consultor
            </Button>
          </motion.div>
        </div>

        {/* ── Imagem Central em Destaque ── */}
        <motion.div 
          variants={fadeUpItem}
          className="mt-16 lg:mt-24 relative w-full max-w-6xl mx-auto h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5"
        >
          <Image
            src="/fachada.webp"
            alt="Loja ConexãoLink"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </motion.div>

      </motion.div>
    </section>
  )
}
