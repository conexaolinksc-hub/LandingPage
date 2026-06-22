'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/uiStore'
import { NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { isNavScrolled, isMobileMenuOpen, setNavScrolled, toggleMobileMenu, closeMobileMenu } =
    useUIStore()

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setNavScrolled])

  const handleNavClick = (href: string) => {
    closeMobileMenu()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
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

        {/* CTA */}
        <Button
          className="hidden md:inline-flex gradient-brand text-white font-semibold shadow-md shadow-brand-blue/20 hover:opacity-90 transition-opacity border-0"
          onClick={() => handleNavClick('#contato')}
          id="nav-cta"
        >
          Fale Conosco
        </Button>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Menu"
          id="hamburger"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-black/8 px-6 py-6 flex flex-col gap-5 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="gradient-brand text-white font-semibold border-0 mt-2"
              onClick={() => handleNavClick('#contato')}
            >
              Fale Conosco
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
