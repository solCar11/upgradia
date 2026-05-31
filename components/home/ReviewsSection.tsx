'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import WaveSection from '@/components/ui/WaveSection'
import ReviewCard from '@/components/ui/ReviewCard'
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
      <div style={{ display: 'flex', gap: '0.75rem', width: 'max-content', paddingBottom: '0.25rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        {doubled.map((review, idx) => (
          <Link
            key={idx}
            href={`/producto/${review.productImage.split('/').pop()?.replace('.png', '') ?? ''}`}
            style={{ textDecoration: 'none', flexShrink: 0, width: '240px', display: 'block' }}
          >
            <ReviewCard review={review} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ReviewsSection({ productReviews }: Props) {
  const all = productReviews ?? reviews
  const third = Math.ceil(all.length / 3)
  const row1 = all.slice(0, third)
  const row2 = all.slice(third, third * 2)
  const row3 = all.slice(third * 2)
  // Pad short rows with duplicates so each strip loops properly
  const pad = (arr: Review[]) => arr.length < 3 ? [...arr, ...arr, ...arr] : arr

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
        <div style={{ borderTop: '1px solid #222', margin: '0 1rem 1.5rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
          <ReviewStrip items={pad(row1)} direction={1} />
          <ReviewStrip items={pad(row2.length > 0 ? row2 : all)} direction={-1} />
          <ReviewStrip items={pad(row3.length > 0 ? row3 : [...all].reverse())} direction={1} />
        </div>
      </div>
    </section>
  )
}
