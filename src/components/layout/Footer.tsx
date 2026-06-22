import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/constants/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.png"
          alt="ConexãoLink"
          width={140}
          height={44}
          className="h-9 w-auto object-contain"
          sizes="140px"
        />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  )
}
