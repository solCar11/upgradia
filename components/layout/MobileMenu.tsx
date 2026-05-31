'use client'

import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

type Props = { isOpen: boolean; onClose: () => void }

const sections = [
  { label: 'Proveedores', href: '#proveedores', emoji: '📦' },
  { label: 'Bots', href: '#bots', emoji: '🤖' },
  { label: 'Formación', href: '#formacion', emoji: '📚' },
  { label: 'Packs Pro', href: '#packs', emoji: '⚡' },
  { label: 'Nosotros vs Otros', href: '#comparativa', emoji: '🏆' },
  { label: 'Preguntas Frecuentes', href: '#faq', emoji: '💬' },
  { label: 'Valoraciones', href: '#valoraciones', emoji: '⭐' },
  { label: 'Contacto', href: '/contacto', emoji: '✉️' },
]

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
  </svg>
)

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <>
      <style>{`
        .menu-overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 280ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .menu-panel {
          transform: translateX(-100%);
          transition: transform 320ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .menu-panel.open {
          transform: translateX(0);
        }
        .menu-item {
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 220ms ease-out, transform 220ms ease-out, background 150ms ease, color 150ms ease;
        }
        .menu-overlay.open .menu-item {
          opacity: 1;
          transform: translateX(0);
        }
        .menu-item:active {
          transform: scale(0.97) translateX(0);
          background: rgba(95,250,59,0.06) !important;
        }
        .social-btn {
          transition: color 150ms ease, transform 150ms ease;
        }
        .social-btn:active {
          transform: scale(0.9);
          color: #5FFA3B !important;
        }
        ${sections.map((_, i) => `
          .menu-overlay.open .menu-item:nth-child(${i + 1}) {
            transition-delay: ${60 + i * 40}ms;
          }
        `).join('')}
      `}</style>

      {/* Overlay + panel wrapper */}
      <div className={`menu-overlay fixed inset-0 z-50 flex ${isOpen ? 'open' : ''}`}>
        {/* Backdrop */}
        <div
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        />

        {/* Panel */}
        <div
          className={`menu-panel relative flex flex-col`}
          style={{
            width: '300px',
            maxWidth: '88vw',
            height: '100%',
            background: '#080808',
            borderRight: '1px solid rgba(95,250,59,0.15)',
            boxShadow: '4px 0 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.25rem 1rem', borderBottom: '1px solid #141414' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{ position: 'relative', width: '28px', height: '28px' }}>
                <Image src="/images/logos/isotipo-verde.png" alt="Upgradia" fill className="object-contain" />
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: '#5FFA3B', letterSpacing: '-0.01em' }}>
                Upgradia
              </span>
            </div>
            <button
              onClick={onClose}
              style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: '#141414', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', cursor: 'pointer', transition: 'color 150ms ease, background 150ms ease' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, overflowY: 'auto', padding: '0.75rem 0.75rem' }}>
            {sections.map((section, i) => (
              <a
                key={section.href}
                href={section.href}
                onClick={onClose}
                className="menu-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '0.9rem 1rem',
                  borderRadius: '0.875rem',
                  marginBottom: '0.25rem',
                  textDecoration: 'none',
                  background: 'transparent',
                }}
              >
                <span style={{ fontSize: '1.1rem', width: '1.5rem', textAlign: 'center', flexShrink: 0 }}>{section.emoji}</span>
                <span style={{ fontWeight: 600, fontSize: '1rem', color: '#e0e0e0', letterSpacing: '-0.01em' }}>
                  {section.label}
                </span>
                <span style={{ marginLeft: 'auto', color: 'rgba(95,250,59,0.4)', fontSize: '0.75rem' }}>›</span>
              </a>
            ))}
          </nav>

          {/* Divider + socials */}
          <div style={{ padding: '1rem 1.25rem 1.5rem', borderTop: '1px solid #141414' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
              Síguenos
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="https://instagram.com/upgradia.store" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: '#141414', border: '1px solid #222' }}>
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com/@upgradia.store" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: '#141414', border: '1px solid #222' }}>
                <TikTokIcon />
              </a>
              <a href="https://discord.gg/ar7cWD3GTn" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: '#141414', border: '1px solid #222' }}>
                <DiscordIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
