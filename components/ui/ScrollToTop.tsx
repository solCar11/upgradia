'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-200"
      style={{ background: '#1a1a1a', border: '1px solid #333' }}
      aria-label="Volver arriba"
    >
      <ArrowUp size={18} color="#fff" />
    </button>
  )
}
