'use client'

import { useEffect, useRef } from 'react'
import Accordion from '@/components/ui/Accordion'
import type { FaqItem } from '@/lib/data'

type Props = { items: FaqItem[] }

export default function FaqSection({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" style={{ padding: '4rem 1rem 3.5rem' }}>
      <h2 className="text-center font-black text-white" style={{ fontSize: '2.75rem', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: '2rem' }}>
        Preguntas Frecuentes
      </h2>
      <div ref={ref} className="scroll-reveal" style={{ maxWidth: '32rem', margin: '0 auto' }}>
        <Accordion items={items} />
      </div>
    </section>
  )
}
