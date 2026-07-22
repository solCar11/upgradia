'use client'

import { useEffect, useRef } from 'react'
import WaveSection from '@/components/ui/WaveSection'
import PackCard from './PackCard'
import type { Pack } from '@/lib/data'

type Props = { packs: Pack[] }

export default function PacksSection({ packs }: Props) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="packs">
      <WaveSection />
      <style>{`
        .packs-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 32rem;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .packs-grid {
            flex-direction: row;
            max-width: 1200px;
            align-items: stretch;
            gap: 1.5rem;
          }
          .packs-grid > * {
            flex: 1;
            min-width: 0;
          }
        }
      `}</style>
      <div style={{ background: '#000', padding: '1.5rem 1.25rem 2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 className="font-black" style={{ fontSize: '2.75rem', color: '#5FFA3B', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1 }}>Elige tu Nivel</h2>
          <p style={{ color: '#aaa', fontSize: '0.875rem', marginTop: '0.375rem' }}>Tú decides hasta dónde llegar.</p>
        </div>
        <div className="packs-grid">
          {packs.map((pack, i) => (
            <div
              key={pack.id}
              ref={el => { itemRefs.current[i] = el }}
              className="scroll-reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <PackCard pack={pack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
