'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Pack } from '@/lib/data'

export default function PackCard({ pack }: { pack: Pack }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-2xl"
      style={{
        background: '#111',
        border: `1px solid ${pack.glowColor}55`,
        boxShadow: `0 0 40px ${pack.glowColor}22, 0 0 0 1px ${pack.glowColor}11`,
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
        <div>
          <h3 className="font-black text-white" style={{ fontSize: '1.6rem', lineHeight: 1.15 }}>{pack.name}</h3>
          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem', color: pack.subtitleColor }}>{pack.subtitle}</p>
        </div>
        <div style={{ position: 'relative', width: '3.5rem', height: '3.5rem', flexShrink: 0 }}>
          <Image src={pack.tridentImage} alt={pack.name} fill className="object-contain" />
        </div>
      </div>

      {/* Dropdown */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          fontSize: '1rem',
          fontWeight: 600,
          background: '#1a1a1a',
          border: '1px solid #333',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        <span>¿Qué Incluye?</span>
        <span
          style={{
            color: '#F5A623',
            fontSize: '12px',
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >▼</span>
      </button>

      {open && (
        <ul className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '-0.5rem' }}>
          {pack.includes.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#ccc' }}>
              <span style={{ color: '#5FFA3B', marginTop: '2px', flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <p className="price-original" style={{ fontSize: '1rem' }}>€{pack.originalPrice.toFixed(2)}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <p className="font-black text-white" style={{ fontSize: '2.25rem', lineHeight: 1 }}>€{pack.price.toFixed(2)}</p>
          <span className="badge-savings">Ahorra {pack.savingsPercent}%</span>
        </div>
      </div>

      {/* CTA */}
      <Link href={`/producto/${pack.slug}`} className="btn-green" style={{ fontSize: '1rem', padding: '1.1rem 1.5rem' }}>
        AÑADIR AL CARRITO
      </Link>
    </div>
  )
}
