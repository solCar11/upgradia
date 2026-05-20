import Accordion from '@/components/ui/Accordion'
import { faqItems } from '@/lib/data'

export default function FaqSection() {
  return (
    <section id="faq" style={{ padding: '4rem 1rem 3.5rem' }}>
      <h2 className="text-center font-black text-white" style={{ fontSize: '2.75rem', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: '2rem' }}>
        Preguntas Frecuentes
      </h2>
      <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
