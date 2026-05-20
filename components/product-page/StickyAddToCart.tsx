'use client'

import { useEffect, useState, useRef } from 'react'

type Props = {
  productName: string
  price: number
  onAddToCart: () => void
  triggerRef: React.RefObject<HTMLElement | null>
}

export default function StickyAddToCart({ productName, price, onAddToCart, triggerRef }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (triggerRef.current) observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [triggerRef])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-safe animate-bounce-in"
      style={{ background: 'linear-gradient(to top, #000 80%, transparent)', paddingBottom: '1rem', paddingTop: '1.5rem' }}
    >
      <div className="max-w-lg mx-auto">
        <button
          onClick={onAddToCart}
          className="btn-green"
          style={{ fontSize: '0.9rem' }}
        >
          AGREGAR AL CARRITO — €{price.toFixed(2)}
        </button>
      </div>
    </div>
  )
}
