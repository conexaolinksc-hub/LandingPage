import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge: string
  title: string
  /** Substring of title rendered with gradient styling */
  highlight?: string
  subtitle?: string
  align?: 'center' | 'left'
  /** Override badge colors — defaults to brand-blue */
  badgeClassName?: string
  className?: string
}

/**
 * Reusable section header: Badge → h2 (with optional gradient highlight) → subtitle.
 * Used in StatsSection, ServicesSection, ContactSection, etc.
 */
export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  badgeClassName,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  const titleParts = highlight ? title.split(highlight) : null

  return (
    <div
      className={cn(
        'flex flex-col gap-3 mb-12',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <Badge
        className={cn(
          'w-fit text-xs font-semibold uppercase tracking-widest',
          badgeClassName ?? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'
        )}
      >
        {badge}
      </Badge>

      <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-muted-foreground text-base leading-relaxed',
            isCenter ? 'max-w-md' : 'max-w-sm'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
