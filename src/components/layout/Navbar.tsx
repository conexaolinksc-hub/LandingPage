'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Layers, Building2, Zap, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/uiStore'
import { NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

/* Items exclusivos do menu mobile — mais detalhados */
const MOBILE_ITEMS = [
  {
    label: 'Nossos Serviços',
    href: '#servicos',
    icon: Layers,
    description: 'Veja todas as soluções',
  },
  {
    label: 'Plano Empresarial',
    href: '#srv-empresarial',
    icon: Building2,
    description: 'Para escritórios e comércios',
  },
  {
    label: 'Link Dedicado',
    href: '#srv-dedicado',
    icon: Zap,
    description: 'Banda exclusiva com SLA',
  },
  {
    label: 'Fale Conosco',
    href: '#contato',
    icon: MessageCircle,
    description: 'Solicite uma proposta',
  },
]

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -8 },
}

const itemVariants: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: (i: number) => ({ opacity: 1, x: 0 }),
}

export function Navbar() {
  const {
    isNavScrolled,
    isMobileMenuOpen,
    setNavScrolled,
    toggleMobileMenu,
    closeMobileMenu,
  } = useUIStore()

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setNavScrolled])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) closeMobileMenu() }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMobileMenu])

  const handleNavClick = (href: string) => {
    closeMobileMenu()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isNavScrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-black/8 shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
      id="navbar"
    >
      <div className="container mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/logo.png"
            alt="ConexãoLink"
            width={160}
            height={50}
            className="h-11 w-auto object-contain"
            sizes="160px"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 ml-auto" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          className="hidden md:inline-flex gradient-brand text-white font-semibold shadow-md shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
          onClick={() => handleNavClick('#contato')}
          id="nav-cta"
        >
          Fale Conosco
        </Button>

        {/* Hamburger */}
        <button
          className={cn(
            'md:hidden ml-auto p-2 rounded-lg transition-colors',
            isMobileMenuOpen
              ? 'bg-black/8 text-foreground'
              : 'text-foreground hover:bg-black/5'
          )}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          id="hamburger"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* ── Mobile Menu Panel ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden"
          >
            <div className="bg-white/98 backdrop-blur-xl border-t border-black/6 shadow-xl">
              {/* Nav items */}
              <nav className="px-4 pt-4 pb-2" aria-label="Menu mobile">
                {MOBILE_ITEMS.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 px-3 py-3.5 rounded-xl hover:bg-bg-surface active:bg-bg-surface/80 transition-colors group text-left"
                    >
                      {/* Icon badge */}
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-green/8 border border-brand-blue/12 flex items-center justify-center group-hover:from-brand-blue/18 transition-all">
                        <Icon size={18} className="text-brand-blue" />
                      </span>
                      {/* Text */}
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground leading-tight">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </span>
                      </span>
                    </motion.button>
                  )
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="px-4 pb-5 pt-2 border-t border-black/5 mt-1">
                <Button
                  className="gradient-brand text-white font-semibold border-0 w-full shadow-md shadow-brand-blue/20 hover:opacity-90 transition-opacity"
                  onClick={() => handleNavClick('#contato')}
                  id="mobile-cta"
                >
                  Solicitar Proposta Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
