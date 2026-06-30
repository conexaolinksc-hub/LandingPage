'use client'

import { useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Layers, Building2, Zap, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { IconBadge } from '@/components/ui/IconBadge'
import { useUIStore } from '@/store/uiStore'
import { NAV_LINKS, MOBILE_MENU_ITEMS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { scrollToSection } from '@/utils/scroll'
import type { LucideIcon } from 'lucide-react'

/** Map iconName strings → lucide components (avoids passing non-serialisable functions to a constant) */
const ICON_MAP: Record<string, LucideIcon> = {
  Layers, Building2, Zap, MessageCircle,
}

const menuVariants: Variants = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

/** Staggered slide-in for each mobile menu item */
const itemVariants: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06 } }),
}

export function Navbar() {
  const {
    isNavScrolled,
    isMobileMenuOpen,
    setNavScrolled,
    toggleMobileMenu,
    closeMobileMenu,
  } = useUIStore()

  // Guard: only call setNavScrolled when the value actually changes
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20
    if (scrolled !== isNavScrolled) setNavScrolled(scrolled)
  }, [isNavScrolled, setNavScrolled])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) closeMobileMenu()
  }, [closeMobileMenu])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const handleNavClick = useCallback((href: string) => {
    closeMobileMenu()
    scrollToSection(href)
  }, [closeMobileMenu])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isNavScrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-black/8 shadow-sm py-3'
          : 'bg-gradient-to-r from-brand-blue/35 to-brand-green/35 backdrop-blur-md border-b border-white/40 py-4',
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
              className="text-sm font-semibold text-foreground/75 hover:text-brand-blue hover:bg-brand-blue/5 px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
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
            'md:hidden ml-auto z-10 p-2 rounded-md transition-colors',
            isMobileMenuOpen
              ? 'bg-black/8 text-foreground'
              : 'text-foreground hover:bg-black/5',
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
            <div className="bg-white/95 backdrop-blur-xl border border-black/5 shadow-2xl rounded-xl overflow-hidden">
              <nav className="px-4 pt-4 pb-2" aria-label="Menu mobile">
                {MOBILE_MENU_ITEMS.map((item, i) => {
                  const Icon = ICON_MAP[item.iconName]
                  return (
                    <motion.button
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 px-4 py-3.5 rounded-lg hover:bg-brand-blue/5 active:bg-brand-blue/10 transition-colors group text-left"
                    >
                      <IconBadge icon={Icon} containerSize="md" />
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

              <div className="px-4 pb-5 pt-2 border-t border-black/5 mt-1">
                <Button
                  className="gradient-brand text-white font-semibold shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 border-0 rounded-md px-6 w-full"
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
