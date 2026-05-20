'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/data'

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full text-left rounded-2xl overflow-hidden"
          style={{ background: '#fff' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.25rem', gap: '1rem' }}>
            <span style={{ fontWeight: 700, color: '#000', fontSize: '1rem', lineHeight: 1.4 }}>{item.question}</span>
            <span
              style={{
                color: '#000',
                fontSize: '12px',
                display: 'inline-block',
                flexShrink: 0,
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            >▼</span>
          </div>
          {open === i && (
            <div style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.875rem', lineHeight: 1.6, borderTop: '1px solid #f0f0f0', paddingTop: '1rem', color: '#444' }}>
              {item.answer}
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
