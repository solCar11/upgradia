'use client'

import Image from 'next/image'
import { useCartStore } from '@/lib/cart-store'
import { upsellProduct } from '@/lib/data'

export default function UpsellCard() {
  const addItem = useCartStore(s => s.addItem)

  const handleAdd = () => {
    addItem({
      id: upsellProduct.id,
      slug: upsellProduct.slug,
      name: upsellProduct.name,
      price: upsellProduct.price,
      originalPrice: upsellProduct.originalPrice,
      image: upsellProduct.image,
    })
  }

  return (
    <div className="px-4 py-6" style={{ background: '#000' }}>
      <p className="font-black text-white mb-4 text-center leading-tight px-2" style={{ fontSize: '1.5rem' }}>
        Vende el doble de rápido con los Tickets Digitales
      </p>
      <div className="flex items-center justify-center mb-5">
        <span style={{ fontSize: '2.5rem', color: '#fff' }}>↓</span>
      </div>
      <div
        className="rounded-2xl p-4 flex items-center gap-3"
        style={{
          background: '#111',
          border: '1px solid rgba(57,255,20,0.25)',
          boxShadow: '0 0 24px rgba(57,255,20,0.1)',
        }}
      >
        {/* Image + badge */}
        <div className="relative shrink-0">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden dot-texture" style={{ background: '#0d0d0d' }}>
            <Image src={upsellProduct.image} alt={upsellProduct.name} fill className="object-contain p-2" />
          </div>
          <div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
            style={{ background: '#1a1a1a', border: '1px solid #333' }}
          >
            1 mes
          </div>
        </div>

        {/* Name + prices */}
        <div className="flex-1 min-w-0">
          <p className="font-black text-white text-base leading-snug">{upsellProduct.name}</p>
          <p className="price-original text-xs mt-0.5">€{upsellProduct.originalPrice.toFixed(2)}</p>
          <p className="font-black text-white text-2xl leading-none">€{upsellProduct.price.toFixed(2)}</p>
        </div>

        {/* CTA */}
        <div className="shrink-0 flex flex-col items-center gap-2">
          <button
            onClick={handleAdd}
            className="px-6 py-3 rounded-full font-black text-base"
            style={{ background: '#5FFA3B', color: '#000' }}
          >
            Añadir
          </button>
          <p className="text-xs text-center leading-tight" style={{ color: '#888', maxWidth: '90px' }}>
            +120 revendedores ya lo están usando.
          </p>
        </div>
      </div>
    </div>
  )
}
