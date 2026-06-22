'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { STATS } from '@/constants/content'

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      className="border-y border-border bg-white py-8"
      aria-label="Diferenciais"
    >
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-border bg-bg-base hover:border-brand-blue/40 hover:bg-brand-blue/5 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-brand-blue/10 to-brand-green/8 border border-brand-blue/15 group-hover:from-brand-blue/18 group-hover:border-brand-blue/30 transition-all shadow-sm">
                  <Icon
                    size={22}
                    className="text-brand-blue group-hover:text-brand-blue-light transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-black gradient-text mb-1">{stat.value}</h3>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
