'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StarRating from '@/components/ui/StarRating'
import type { Product } from '@/lib/data'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      href={`/producto/${product.slug}`}
      className="scroll-reveal"
      style={{ display: 'block', textDecoration: 'none', animationDelay: `${(index % 4) * 80}ms` }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>

        {/* Image box: white border + green neon glow */}
        <div
          className="dot-texture"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.85)',
            boxShadow: '0 0 14px rgba(95,250,59,0.5), 0 0 30px rgba(95,250,59,0.28), 0 0 60px rgba(95,250,59,0.12)',
            background: '#0d0d0d',
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            style={{ padding: 0 }}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.badge && (
            <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem' }}>
              <span className="badge-oferta">{product.badge}</span>
            </div>
          )}
        </div>

        {/* Info — centered, below the box */}
        <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem', lineHeight: 1.3, textAlign: 'center', width: '100%' }}>
          {product.name}
        </p>
        <StarRating rating={product.rating} size="md" color="#5FFA3B" />
        <p className="price-original" style={{ fontSize: '0.875rem', textAlign: 'center' }}>€{product.originalPrice.toFixed(2)}</p>
        <p style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1, textAlign: 'center' }}>
          €{product.price.toFixed(2)}
        </p>

      </div>
    </Link>
  )
}
