'use client'

import { useEffect, useRef } from 'react'

export function useSmoothScroll() {
  // Use 'any' type to avoid needing the Lenis type imported synchronously
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Respect OS motion preference — fall back to native scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId: number
    let lenisInstance: any

    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      lenisRef.current = lenis
      lenisInstance = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])
}
