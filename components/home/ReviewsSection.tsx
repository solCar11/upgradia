'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import WaveSection from '@/components/ui/WaveSection'
import StarRating from '@/components/ui/StarRating'
import { reviews } from '@/lib/data'
import type { Review } from '@/lib/data'

type Props = { productReviews?: typeof reviews }

function ReviewStrip({ items, direction }: { items: Review[]; direction: 1 | -1 }) {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const posRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const speed = 0.35
    const step = () => {
      if (!paused) {
        posRef.current += speed * direction
        const half = el.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        if (posRef.current < 0) posRef.current = half - 1
        el.scrollLeft = posRef.current
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused, direction])

  const doubled = [...items, ...items]

  return (
    <div
      ref={ref}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerLeave={() => setPaused(false)}
      style={{ overflowX: 'hidden', cursor: 'grab', userSelect: 'none', width: '100%' }}
    >
      <div style={{ display: 'flex', gap: '0.75rem', width: 'max-content', paddingBottom: '0.25rem' }}>
        {doubled.map((review, idx) => (
          <Link
            key={idx}
            href={`/producto/${review.productImage.split('/').pop()?.replace('.png', '') ?? ''}`}
            style={{ textDecoration: 'none', flexShrink: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              background: '#fff',
              color: '#000',
              borderRadius: '1rem',
              padding: '0.875rem',
              width: '240px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}>
              <StarRating rating={review.rating} size="sm" />
              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: '#000' }}>{review.name}</p>
              <p style={{ fontSize: '0.75rem', lineHeight: 1.5, color: '#333', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{review.text}</p>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#5FFA3B', marginTop: '0.25rem' }}>{review.productName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ReviewsSection({ productReviews }: Props) {
  const displayReviews = productReviews ?? reviews
  const row1 = displayReviews.slice(0, Math.ceil(displayReviews.length / 2))
  const row2 = displayReviews.slice(Math.ceil(displayReviews.length / 2))
  const row3 = [...displayReviews].reverse().slice(0, Math.ceil(displayReviews.length / 2))

  return (
    <section id="valoraciones">
      <WaveSection height={100} />
      <div style={{ background: '#000', padding: '2.5rem 0 2.5rem' }}>
        <h2 className="text-center font-black" style={{ fontSize: '2.75rem', color: '#5FFA3B', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1, marginBottom: '1rem', padding: '0 1rem' }}>Valoraciones</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', marginBottom: '1.5rem', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="font-black text-white" style={{ fontSize: '3rem', lineHeight: 1 }}>4.8</span>
            <StarRating rating={5} size="lg" />
          </div>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '0.25rem', color: '#888' }}>2.983 reseñas</p>
        </div>
        <div style={{ borderTop: '1px solid #222', marginBottom: '1.5rem', margin: '0 1rem 1.5rem' }} />

        {/* 3 auto-scrolling rows, alternating directions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
          <ReviewStrip items={row1} direction={1} />
          <ReviewStrip items={row2.length > 0 ? row2 : row1} direction={-1} />
          <ReviewStrip items={row3} direction={1} />
        </div>
      </div>
    </section>
  )
}
