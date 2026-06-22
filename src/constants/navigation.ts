export const NAV_LINKS = [
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Contato',   href: '#contato'  },
] as const

export type NavLink = (typeof NAV_LINKS)[number]

/** Items exclusivos do menu mobile — com ícone e descrição */
export const MOBILE_MENU_ITEMS = [
  {
    label: 'Nossos Serviços',
    href: '#servicos',
    iconName: 'Layers' as const,
    description: 'Veja todas as soluções',
  },
  {
    label: 'Plano Empresarial',
    href: '#srv-empresarial',
    iconName: 'Building2' as const,
    description: 'Para escritórios e comércios',
  },
  {
    label: 'Link Dedicado',
    href: '#srv-dedicado',
    iconName: 'Zap' as const,
    description: 'Banda exclusiva com SLA',
  },
  {
    label: 'Fale Conosco',
    href: '#contato',
    iconName: 'MessageCircle' as const,
    description: 'Solicite uma proposta',
  },
] as const
