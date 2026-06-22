/**
 * Smoothly scrolls to a section by CSS selector.
 * Centralizes all scroll logic — avoids duplicating
 * document.querySelector().scrollIntoView() across components.
 */
export function scrollToSection(selector: string): void {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
