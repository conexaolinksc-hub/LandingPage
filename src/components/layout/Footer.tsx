import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { SITE } from '@/constants/site'
import { NAV_LINKS } from '@/constants/navigation'

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/8">

      {/* ── Main grid ── */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={150}
            height={48}
            className="h-10 w-auto object-contain"
            sizes="150px"
          />
          <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
            {SITE.description}
          </p>
          {/* Social */}
          <div className="flex gap-3 mt-1">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-bg-surface border border-black/8 flex items-center justify-center text-foreground/50 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-bg-surface border border-black/8 flex items-center justify-center text-foreground/50 hover:text-brand-green hover:border-brand-green/30 hover:bg-brand-green/5 transition-all"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact & Address */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
            Contato
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-foreground/60 hover:text-brand-blue transition-colors group"
              >
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-blue/60 group-hover:text-brand-blue" />
                {SITE.address}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-brand-blue transition-colors group"
              >
                <Phone size={15} className="flex-shrink-0 text-brand-blue/60 group-hover:text-brand-blue" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-brand-blue transition-colors group"
              >
                <Mail size={15} className="flex-shrink-0 text-brand-blue/60 group-hover:text-brand-blue" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/55">
              <Clock size={15} className="mt-0.5 flex-shrink-0 text-brand-blue/60" />
              <span>
                {SITE.hours.weekdays}<br />
                {SITE.hours.saturday}
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-black/6">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground/30">
            Vila Velha, Espírito Santo — Brasil
          </p>
        </div>
      </div>

    </footer>
  )
}
