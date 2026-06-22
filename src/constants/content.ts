import {
  Gauge,
  Network,
  ShieldCheck,
  Headphones,
  Lock,
  Wrench,
  Phone,
  MessageCircle,
  Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SITE } from '@/constants/site'

/* ─── Types ────────────────────────────────────────────────────────────────── */

export interface Stat {
  icon: LucideIcon
  value: string
  label: string
}

export interface LDFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface ContactItem {
  id: string
  icon: LucideIcon
  label: string
  href: string
  external?: boolean
}

export interface InterestOption {
  value: string
  label: string
}

/* ─── Stats ─────────────────────────────────────────────────────────────────── */

export const STATS: Stat[] = [
  { icon: Gauge,       value: '100%',       label: 'Velocidade Entregue' },
  { icon: Network,     value: 'IP Fixo',    label: 'Para Câmeras e Sistemas' },
  { icon: ShieldCheck, value: 'Prioridade', label: 'Atendimento Rápido e Ágil' },
  { icon: Headphones,  value: '24h',        label: 'Suporte Sempre Ativo' },
]

/* ─── Link Dedicado features ─────────────────────────────────────────────── */

export const LD_FEATURES: LDFeature[] = [
  {
    id: 'ld-fixo',
    icon: Network,
    title: 'IP Fixo para Acessos Remotos',
    description:
      'Acesso remoto seguro a câmeras, servidores e sistemas da sua empresa a qualquer momento.',
  },
  {
    id: 'ld-suporte',
    icon: Headphones,
    title: 'Suporte Técnico Prioritário',
    description:
      'Atendimento exclusivo com técnicos especializados e tempo de resposta garantido em contrato.',
  },
  {
    id: 'ld-reparo',
    icon: Wrench,
    title: 'Reparo em até 5 Horas',
    description:
      'Garantia contratual de restauração rápida do serviço para sua operação nunca parar.',
  },
  {
    id: 'ld-exclusivo',
    icon: Lock,
    title: 'Banda 100% Exclusiva',
    description:
      'Sem compartilhamento. Velocidade total garantida em qualquer horário do dia ou da noite.',
  },
]

/* ─── Contact items ──────────────────────────────────────────────────────── */

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'contact-phone',
    icon: Phone,
    label: SITE.phone,
    href: `tel:${SITE.phone.replace(/\D/g, '')}`,
  },
  {
    id: 'contact-whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
  },
  {
    id: 'contact-email',
    icon: Mail,
    label: SITE.email,
    href: `mailto:${SITE.email}`,
  },
]

/* ─── Contact form interest options ─────────────────────────────────────── */

export const INTEREST_OPTIONS: InterestOption[] = [
  { value: 'empresarial', label: 'Plano Empresarial' },
  { value: 'dedicado',    label: 'Link Dedicado' },
  { value: 'outro',       label: 'Outro' },
]
