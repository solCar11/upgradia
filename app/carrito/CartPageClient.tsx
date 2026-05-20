'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/cart-store'
import CartTimer from '@/components/cart/CartTimer'
import UpsellCard from '@/components/cart/UpsellCard'
import CartItemComponent from '@/components/cart/CartItem'
import { ShoppingBag } from 'lucide-react'

export default function CartPageClient() {
  const { items, total, clearCart } = useCartStore()
  const [termsAccepted, setTermsAccepted] = useState(false)
  const hasItems = items.length > 0

  if (!hasItems) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 gap-6">
        <ShoppingBag size={48} style={{ color: '#333' }} />
        <p className="text-lg font-bold text-white">Tu carrito está vacío</p>
        <Link href="/" className="btn-green" style={{ width: 'auto', padding: '0.75rem 2rem' }}>
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto pb-10">
      <CartTimer />
      <UpsellCard />

      {/* Cart items */}
      <div style={{ borderTop: '1px solid #1a1a1a' }}>
        <h2 className="px-4 pt-5 pb-3 text-lg font-black text-white">Tu carrito</h2>
        {items.map(item => (
          <CartItemComponent key={item.id} item={item} />
        ))}
      </div>

      {/* Summary */}
      <div className="px-4 pt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between py-3 border-t" style={{ borderColor: '#2a2a2a' }}>
          <span className="text-sm" style={{ color: '#aaa' }}>Total</span>
          <span className="text-xl font-black text-white">€{total().toFixed(2)}</span>
        </div>

        {/* T&C checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={e => setTermsAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#5FFA3B] shrink-0"
          />
          <span className="text-xs leading-relaxed" style={{ color: '#888' }}>
            He leído y acepto los{' '}
            <Link href="/legal/terminos" className="underline" style={{ color: '#5FFA3B' }}>
              Términos y Condiciones
            </Link>{' '}
            y la{' '}
            <Link href="/legal/privacidad" className="underline" style={{ color: '#5FFA3B' }}>
              Política de Privacidad
            </Link>
            . Entiendo que los productos digitales no son reembolsables una vez entregados.
          </span>
        </label>

        <button
          disabled={!termsAccepted}
          className="btn-green"
          onClick={() => alert('Pago — se conectará con Stripe en la siguiente fase')}
        >
          PROCEDER AL PAGO
        </button>

        <button
          onClick={() => clearCart()}
          className="text-xs text-center underline transition-colors"
          style={{ color: '#555' }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  )
}
