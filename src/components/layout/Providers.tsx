'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll()
  return <>{children}</>
}
