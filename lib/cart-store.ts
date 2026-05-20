'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: string
  slug: string
  name: string
  price: number
  originalPrice: number
  image: string
  quantity: number
}

type CartStore = {
  items: CartItem[]
  timerExpiry: number | null
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  startTimer: () => void
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      timerExpiry: null,

      addItem: (item) => {
        const existing = get().items.find(i => i.id === item.id)
        if (existing) {
          set(state => ({
            items: state.items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }))
        } else {
          set(state => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }))
        }
        get().startTimer()
      },

      removeItem: (id) =>
        set(state => ({ items: state.items.filter(i => i.id !== id) })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set(state => ({
          items: state.items.map(i =>
            i.id === id ? { ...i, quantity } : i
          ),
        }))
      },

      clearCart: () => set({ items: [], timerExpiry: null }),

      startTimer: () =>
        set({ timerExpiry: Date.now() + 5 * 60 * 1000 }),

      total: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      itemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: 'upgradia-cart',
    }
  )
)
