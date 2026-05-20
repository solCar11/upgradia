import Image from 'next/image'
import StarRating from './StarRating'
import type { Review } from '@/lib/data'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="rounded-2xl"
      style={{ background: '#fff', color: '#000', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <StarRating rating={review.rating} size="sm" />
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#000' }}>{review.name}</p>
        {review.verified && (
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 500, color: '#222' }}>
            <span
              style={{
                width: 13, height: 13, background: '#222', color: '#fff', fontSize: '8px', lineHeight: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '9999px', flexShrink: 0,
              }}
            >✓</span>
            Compra verificada
          </p>
        )}
      </div>
      <p style={{ fontSize: '0.75rem', lineHeight: 1.6, flex: 1, color: '#333' }}>{review.text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #e5e7eb', marginTop: 'auto' }}>
        <div style={{ position: 'relative', width: '2rem', height: '2rem', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0, background: '#111' }}>
          <Image src={review.productImage} alt={review.productName} fill className="object-contain" style={{ padding: '2px' }} />
        </div>
        <p style={{ fontSize: '0.75rem', fontWeight: 500, color: '#555', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{review.productName}</p>
      </div>
    </div>
  )
}
