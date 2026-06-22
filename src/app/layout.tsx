import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Providers } from '@/components/layout/Providers'
import { FloatingButtons } from '@/components/ui/FloatingButtons'
import { Raleway } from 'next/font/google'
import { SITE } from '@/constants/site'

/** Raleway — elegante e sofisticada para títulos e corpo */
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: ['internet empresarial', 'link dedicado', 'fibra óptica', 'IP fixo', 'provedor'],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={raleway.variable}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  )
}
