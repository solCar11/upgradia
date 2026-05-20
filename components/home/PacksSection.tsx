import WaveSection from '@/components/ui/WaveSection'
import PackCard from './PackCard'
import { packs } from '@/lib/data'

export default function PacksSection() {
  return (
    <section id="packs">
      <WaveSection />
      <style>{`
        .packs-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 32rem;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .packs-grid {
            flex-direction: row;
            max-width: 1200px;
            align-items: stretch;
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
          {packs.map(pack => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  )
}
