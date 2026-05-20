'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

type Props = { isOpen: boolean; onClose: () => void }

const sections = [
  { label: 'Proveedores', href: '#proveedores' },
  { label: 'Bots', href: '#bots' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Packs Pro', href: '#packs' },
  { label: 'Nosotros vs Otros', href: '#comparativa' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Valoraciones', href: '#valoraciones' },
  { label: 'Contacto', href: '/contacto' },
]

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

export default function MobileMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-72 max-w-[85vw] h-full flex flex-col animate-slide-in-left"
        style={{ background: '#0d0d0d', borderRight: '1px solid #222' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: '#222' }}>
          <span className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--green)', letterSpacing: '0.05em' }}>MENÚ</span>
          <button onClick={onClose} className="p-1 rounded-lg" style={{ color: '#888' }}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {sections.map(section => (
            <a
              key={section.href}
              href={section.href}
              onClick={onClose}
              className="flex items-center px-5 py-3.5 text-sm font-medium transition-colors hover:text-white"
              style={{ color: '#aaa', borderBottom: '1px solid #1a1a1a' }}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="p-5 border-t" style={{ borderColor: '#222' }}>
          <p className="text-xs mb-3" style={{ color: '#555' }}>Síguenos</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/upgradia.store" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} className="hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://tiktok.com/@upgradia.store" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} className="hover:text-white transition-colors">
              <TikTokIcon />
            </a>
            <a href="https://discord.gg/ar7cWD3GTn" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} className="hover:text-white transition-colors">
              <DiscordIcon />
            </a>
            <a href="#" style={{ color: '#555' }} className="cursor-not-allowed">
              <YoutubeIcon />
            </a>
          </div>
          <p className="text-xs mt-2" style={{ color: '#444' }}>YouTube — Próximamente</p>
        </div>
      </div>
    </div>
  )
}
