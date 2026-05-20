'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import StarRating from '@/components/ui/StarRating'
import QuantitySelector from '@/components/product-page/QuantitySelector'
import PaymentMethods from '@/components/product-page/PaymentMethods'
import StickyAddToCart from '@/components/product-page/StickyAddToCart'
import ComparisonTable from '@/components/home/ComparisonTable'
import FaqSection from '@/components/home/FaqSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import { useCartStore } from '@/lib/cart-store'
import type { Product, Pack } from '@/lib/data'
import { reviews } from '@/lib/data'

type Props = { product: Product | null; pack: Pack | null }

export default function ProductClient({ product, pack }: Props) {
  const router = useRouter()
  const addItem = useCartStore(s => s.addItem)
  const [qty, setQty] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const posRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const speed = 0.4 // px per frame
    const step = () => {
      if (!paused) {
        posRef.current += speed
        const half = el.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        el.scrollLeft = posRef.current
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  const item = product ?? pack
  if (!item) return <div className="p-8 text-center text-white">Producto no encontrado.</div>

  const name = product ? product.name : pack!.name
  const price = product ? product.price : pack!.price
  const originalPrice = product ? product.originalPrice : pack!.originalPrice
  const image = product ? product.image : pack!.image
  const rating = product ? product.rating : 5
  const reviewCount = product ? product.reviewCount : 423
  const savingsPercent = Math.round(((originalPrice - price) / originalPrice) * 100)
  const includes = pack?.includes ?? []

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: item.id, slug: item.slug ?? (item as Pack).slug, name, price, originalPrice, image })
    }
    router.push('/carrito')
  }

  return (
    <>
      <div style={{ maxWidth: '32rem', margin: '0 auto', paddingBottom: '1rem' }}>
        {/* Hero image — full width, square, dot texture */}
        <div className="relative w-full dot-texture" style={{ background: '#0d0d0d', aspectRatio: '1/1' }}>
          <Image src={image} alt={name} fill className="object-contain p-10" priority sizes="100vw" />
        </div>

        {/* Product info */}
        <div style={{ padding: '1.25rem 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Name */}
          <h1 className="font-black text-white" style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>{name}</h1>

          {/* Stars + count — tight to title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <StarRating rating={rating} size="lg" />
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#888' }}>({reviewCount.toLocaleString('es-ES')})</span>
          </div>

          {/* Price row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
            <span className="font-black text-white" style={{ fontSize: '2.5rem', lineHeight: 1 }}>€{price.toFixed(2)}</span>
            <span className="price-original" style={{ fontSize: '1rem' }}>€{originalPrice.toFixed(2)}</span>
            <span className="badge-oferta">Ahorra {savingsPercent}%</span>
          </div>

          {/* Includes dropdown — packs only */}
          {includes.length > 0 && (
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '1rem 1.25rem', borderRadius: '1rem', fontSize: '1rem', fontWeight: 600, background: '#fff', color: '#000', border: 'none', cursor: 'pointer' }}
              >
                <span>¿Qué Incluye?</span>
                <span
                  style={{
                    color: '#F5A623',
                    fontSize: '13px',
                    display: 'inline-block',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                >▼</span>
              </button>
              {dropdownOpen && (
                <ul className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {includes.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#ccc' }}>
                      <span style={{ color: '#5FFA3B', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Reviews carousel — auto-scroll, pause on press */}
          <div
            ref={carouselRef}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerLeave={() => setPaused(false)}
            style={{ overflowX: 'hidden', marginLeft: '-1rem', marginRight: '-1rem', cursor: 'grab', userSelect: 'none' }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', width: 'max-content', paddingLeft: '1rem', paddingRight: '1rem' }}>
              {[...reviews, ...reviews].map((r, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem', borderRadius: '1rem', background: '#111', border: '1px solid #222', width: '260px', flexShrink: 0 }}>
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '9999px', flexShrink: 0, background: '#1a1a1a', color: '#5FFA3B', border: '2px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.875rem' }}>
                    {r.name[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{r.name}</p>
                      <StarRating rating={r.rating} size="sm" />
                    </div>
                    <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: '#aaa', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Cantidad</p>
            <QuantitySelector value={qty} onChange={setQty} />
          </div>

          {/* CTAs */}
          <div ref={ctaRef} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button onClick={handleAddToCart} className="btn-green" style={{ fontSize: '1rem', padding: '1.1rem' }}>
              AGREGAR AL CARRITO
            </button>
            <button
              style={{ width: '100%', padding: '1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '1rem', color: '#fff', background: '#5A31F4', border: 'none', cursor: 'pointer' }}
            >
              Comprar con Shop Pay
            </button>
          </div>

          {/* Payment methods */}
          <PaymentMethods />
        </div>
      </div>

      <ComparisonTable />
      <FaqSection />
      <ReviewsSection />

      <StickyAddToCart
        productName={name}
        price={price}
        onAddToCart={handleAddToCart}
        triggerRef={ctaRef}
      />
    </>
  )
}
