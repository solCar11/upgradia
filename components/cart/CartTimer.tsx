'use client'

import { useEffect, useState } from 'react'
import { useCartStore } from '@/lib/cart-store'

export default function CartTimer() {
  const { timerExpiry, clearCart } = useCartStore()
  const [timeLeft, setTimeLeft] = useState<number>(0)

  useEffect(() => {
    if (!timerExpiry) return

    const update = () => {
      const remaining = timerExpiry - Date.now()
      if (remaining <= 0) {
        clearCart()
        setTimeLeft(0)
        return
      }
      setTimeLeft(remaining)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [timerExpiry, clearCart])

  if (!timerExpiry || timeLeft <= 0) return null

  const minutes = Math.floor(timeLeft / 60000)
  const seconds = Math.floor((timeLeft % 60000) / 1000)

  return (
    <div
      className="w-full px-4 py-3 text-center"
      style={{ background: '#fff', borderBottom: '1px solid #eee' }}
    >
      <p className="text-xs font-bold text-black uppercase tracking-widest mb-2">
        CARRITO RESERVADO DURANTE
      </p>
      <div className="flex items-center justify-center gap-2">
        {[
          { value: String(minutes).padStart(2, '0'), label: 'Minutos' },
          { value: String(seconds).padStart(2, '0'), label: 'Segundos' },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center px-5 py-2 rounded-xl min-w-[72px]"
            style={{ background: '#5FFA3B' }}
          >
            <span className="text-2xl font-black text-black leading-none">{value}</span>
            <span className="text-xs font-semibold text-black mt-0.5">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
