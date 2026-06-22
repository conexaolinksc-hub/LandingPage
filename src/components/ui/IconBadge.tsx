import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconBadgeProps {
  icon: LucideIcon
  size?: number
  /** Container size class — defaults to 'md' (w-10 h-10) */
  containerSize?: 'sm' | 'md' | 'lg'
  className?: string
  iconClassName?: string
}

const containerSizes = {
  sm:  'w-8 h-8',
  md:  'w-10 h-10',
  lg:  'w-12 h-12',
}

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 22,
}

/**
 * Reusable icon badge — gradient background with brand colors.
 * Used in StatsSection, ContactSection, Navbar mobile menu, etc.
 */
export function IconBadge({
  icon: Icon,
  size,
  containerSize = 'md',
  className,
  iconClassName,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        'flex-shrink-0 rounded-xl flex items-center justify-center',
        'bg-gradient-to-br from-brand-blue/10 to-brand-green/8',
        'border border-brand-blue/15',
        'group-hover:from-brand-blue/18 group-hover:border-brand-blue/30 transition-all',
        containerSizes[containerSize],
        className,
      )}
    >
      <Icon
        size={size ?? iconSizes[containerSize]}
        className={cn('text-brand-blue', iconClassName)}
      />
    </span>
  )
}
