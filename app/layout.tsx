import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: 'Upgradia — Productos Digitales para Revendedores',
  description: 'Tu tienda de productos digitales: proveedores verificados, bots, formación y herramientas para empezar a ganar en la reventa.',
  icons: { icon: '/favicon.ico' },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: '#000', color: '#fff' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
