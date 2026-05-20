'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { products, packs } from '@/lib/data'

type Props = { isOpen: boolean; onClose: () => void }

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const q = query.toLowerCase().trim()
  const productResults = q
    ? products.filter(p => p.name.toLowerCase().includes(q)).slice(0, 4)
    : []
  const packResults = q
    ? packs.filter(p => p.name.toLowerCase().includes(q)).slice(0, 2)
    : []
  const hasResults = productResults.length > 0 || packResults.length > 0

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full mx-auto mt-16 max-w-lg animate-fade-in"
        style={{ padding: '0 1rem' }}
      >
        <div className="rounded-2xl overflow-hidden" style={{ background: '#111', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: '#2a2a2a' }}>
            <Search size={18} style={{ color: '#888' }} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar productos..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-600"
            />
            <button onClick={onClose} style={{ color: '#888' }}>
              <X size={18} />
            </button>
          </div>

          {q && !hasResults && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: '#555' }}>
              No se encontraron resultados para &quot;{query}&quot;
            </div>
          )}

          {!q && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: '#555' }}>
              Escribe para buscar productos...
            </div>
          )}

          {hasResults && (
            <div className="py-2 max-h-80 overflow-y-auto">
              {productResults.map(product => (
                <Link
                  key={product.id}
                  href={`/producto/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5"
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 dot-texture">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{product.name}</p>
                    <p className="text-xs" style={{ color: '#5FFA3B' }}>€{product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
              {packResults.map(pack => (
                <Link
                  key={pack.id}
                  href={`/producto/${pack.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5"
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0" style={{ background: '#1a1a1a' }}>
                    <Image src={pack.tridentImage} alt={pack.name} fill className="object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{pack.name}</p>
                    <p className="text-xs" style={{ color: '#5FFA3B' }}>€{pack.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
