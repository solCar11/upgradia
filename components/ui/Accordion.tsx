'use client'

import { useState, useRef, useEffect } from 'react'
import type { FaqItem } from '@/lib/data'

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <button
      onClick={onToggle}
      style={{ width: '100%', textAlign: 'left', borderRadius: '1rem', overflow: 'hidden', background: '#fff', border: 'none', cursor: 'pointer', display: 'block' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', gap: '1rem' }}>
        <span style={{ fontWeight: 700, color: '#000', fontSize: '1rem', lineHeight: 1.4 }}>{item.question}</span>
        <span style={{
          color: '#000',
          fontSize: '12px',
          display: 'inline-block',
          flexShrink: 0,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}>▼</span>
      </div>
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={contentRef} style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.875rem', lineHeight: 1.6, borderTop: '1px solid #f0f0f0', paddingTop: '1rem', color: '#444' }}>
          {item.answer}
        </div>
      </div>
    </button>
  )
}

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  )
}
