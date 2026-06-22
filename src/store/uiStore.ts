import { create } from 'zustand'

interface UIState {
  isNavScrolled: boolean
  isMobileMenuOpen: boolean
  setNavScrolled: (value: boolean) => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isNavScrolled: false,
  isMobileMenuOpen: false,
  setNavScrolled: (value) => set({ isNavScrolled: value }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}))
