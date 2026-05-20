'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import type { CartItem as CartItemType } from '@/lib/cart-store'
import QuantitySelector from '@/components/product-page/QuantitySelector'

export default function CartItem({ item }: { item: CartItemType }) {
  const { removeItem, updateQuantity } = useCartStore()

  return (
    <div
      className="flex items-center gap-3 px-4 py-3"
      style={{ borderBottom: '1px solid #1a1a1a' }}
    >
      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 dot-texture" style={{ background: '#0d0d0d' }}>
        <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-snug truncate">{item.name}</p>
        <p className="price-original text-xs">€{item.originalPrice.toFixed(2)}</p>
        <p className="text-base font-bold text-white">€{item.price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button onClick={() => removeItem(item.id)} style={{ color: '#555' }} className="hover:text-red-400 transition-colors">
          <Trash2 size={16} />
        </button>
        <QuantitySelector value={item.quantity} onChange={q => updateQuantity(item.id, q)} />
      </div>
    </div>
  )
}
