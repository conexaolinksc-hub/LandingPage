/**
 * Shared Framer Motion variants.
 * Import and reuse across sections — avoids redeclaring the same
 * opacity/y animations in every component.
 */
import type { Variants } from 'framer-motion'

/** Container that staggers children on entry */
export const fadeUpContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

/** Each child fades up from below */
export const fadeUpItem: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/** Simple fade-in without vertical movement */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

/** Slide in from the right */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
