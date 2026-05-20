import Image from 'next/image'
import Link from 'next/link'
import StarRating from '@/components/ui/StarRating'
import type { Product } from '@/lib/data'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.slug}`} className="block">
      <div
        className="rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: '#111',
          border: '1px solid rgba(57,255,20,0.25)',
          boxShadow: '0 0 20px rgba(57,255,20,0.12), 0 0 0 1px rgba(57,255,20,0.08)',
        }}
      >
        {/* Image */}
        <div className="relative dot-texture" style={{ background: '#0d0d0d', aspectRatio: '1/1' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            style={{ padding: 0 }}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.badge && (
            <div className="absolute bottom-2 left-2">
              <span className="badge-oferta">{product.badge}</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '0.875rem 0.875rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.name}</p>
          <StarRating rating={product.rating} size="sm" />
          <p className="price-original" style={{ fontSize: '0.85rem' }}>€{product.originalPrice.toFixed(2)}</p>
          <p style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1 }}>€{product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}
