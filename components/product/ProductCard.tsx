import Image from 'next/image'
import Link from 'next/link'
import StarRating from '@/components/ui/StarRating'
import type { Product } from '@/lib/data'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>

        {/* Image box with white border + green neon glow */}
        <div
          className="dot-texture"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1.5px solid rgba(255,255,255,0.3)',
            boxShadow: '0 0 12px rgba(95,250,59,0.5), 0 0 28px rgba(95,250,59,0.25), 0 0 1px rgba(95,250,59,0.7)',
            background: '#0d0d0d',
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            style={{ padding: '0.75rem' }}
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
        <StarRating rating={product.rating} size="sm" />
        <p className="price-original" style={{ fontSize: '0.8rem', textAlign: 'center' }}>€{product.originalPrice.toFixed(2)}</p>
        <p style={{ color: '#fff', fontWeight: 900, fontSize: '1.3rem', lineHeight: 1, textAlign: 'center' }}>
          €{product.price.toFixed(2)}
        </p>

      </div>
    </Link>
  )
}
