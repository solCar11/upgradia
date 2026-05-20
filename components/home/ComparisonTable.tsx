import Image from 'next/image'
import WaveSection from '@/components/ui/WaveSection'
import { comparisonRows } from '@/lib/data'

export default function ComparisonTable() {
  return (
    <section id="comparativa">
      <WaveSection />
      <div style={{ background: '#000', padding: '3rem 1rem 3rem' }}>
        <h2
          className="text-center font-black"
          style={{ fontSize: '2.75rem', color: '#5FFA3B', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1, marginBottom: '2rem' }}
        >
          Nosotros vs Otros
        </h2>

        <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '0.5rem' }}>
            <div />
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1rem 0',
                borderRadius: '1rem 1rem 0 0',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderBottom: 'none',
              }}
            >
              <div style={{ position: 'relative', width: '2.25rem', height: '2.25rem' }}>
                <Image src="/images/logos/isotipo-verde.png" alt="Upgradia" fill className="object-contain" />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>Otros</span>
            </div>
          </div>

          {/* Table body */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
          >
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  alignItems: 'center',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  minHeight: '64px',
                }}
              >
                <div style={{ padding: '1rem 0.75rem 1rem 1rem', fontSize: '0.875rem', fontWeight: 600, color: '#fff', lineHeight: 1.35 }}>
                  {row.feature}
                </div>

                <div
                  style={{
                    padding: '1rem 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderLeft: '1.5px solid rgba(255,255,255,0.18)',
                    borderRight: '1.5px solid rgba(255,255,255,0.18)',
                    alignSelf: 'stretch',
                  }}
                >
                  <div
                    style={{
                      width: '2rem', height: '2rem', borderRadius: '9999px',
                      background: '#5FFA3B',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: '15px', lineHeight: 1 }}>✓</span>
                  </div>
                </div>

                <div style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '1.3rem', opacity: 0.7 }}>✕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
