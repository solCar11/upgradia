'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import MobileMenu from './MobileMenu'
import SearchModal from './SearchModal'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const itemCount = useCartStore(s => s.itemCount())
  const isLoggedIn = false

  return (
    <>
      <header
        className="sticky top-0 z-30 w-full"
        style={{ background: '#000', borderBottom: '1px solid #1a1a1a' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem', height: '3.5rem', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-1.5 rounded-lg"
              style={{ color: '#fff' }}
              aria-label="Menú"
            >
              <Menu size={22} />
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 rounded-lg"
              style={{ color: '#fff' }}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Center — Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/logos/isotipo-verde.png"
              alt="Upgradia"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: '#5FFA3B', color: '#000' }}
              >
                U
              </div>
            ) : (
              <button className="p-1.5 rounded-lg" style={{ color: '#fff' }} aria-label="Mi cuenta">
                <User size={20} />
              </button>
            )}
            <Link href="/carrito" className="relative p-1.5 rounded-lg" style={{ color: '#fff' }} aria-label="Carrito">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: '#5FFA3B', color: '#000', fontSize: '10px' }}
                >
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
