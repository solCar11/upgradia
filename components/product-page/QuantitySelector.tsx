'use client'

type Props = { value: number; onChange: (n: number) => void; min?: number }

export default function QuantitySelector({ value, onChange, min = 1 }: Props) {
  return (
    <div className="flex items-center gap-0">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-11 h-11 rounded-l-2xl flex items-center justify-center font-bold text-lg transition-colors"
        style={{ background: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
      >
        −
      </button>
      <div
        className="w-14 h-11 flex items-center justify-center text-sm font-bold text-white"
        style={{ background: '#1a1a1a', borderTop: '1px solid #333', borderBottom: '1px solid #333' }}
      >
        {value}
      </div>
      <button
        onClick={() => onChange(value + 1)}
        className="w-11 h-11 rounded-r-2xl flex items-center justify-center font-bold text-lg transition-colors"
        style={{ background: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
      >
        +
      </button>
    </div>
  )
}
