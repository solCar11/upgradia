export default function PaymentMethods() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
      {[
        { label: 'Apple Pay', bg: '#000', color: '#fff', border: '#333' },
        { label: 'G Pay', bg: '#fff', color: '#000', border: '#ddd' },
        { label: 'PayPal', bg: '#003087', color: '#fff', border: 'transparent' },
        { label: 'AMEX', bg: '#007bc1', color: '#fff', border: 'transparent' },
        { label: 'VISA', bg: '#1a1f71', color: '#fff', border: 'transparent' },
        { label: 'Mastercard', bg: '#eb001b', color: '#fff', border: 'transparent' },
        { label: 'Maestro', bg: '#0099df', color: '#fff', border: 'transparent' },
      ].map(m => (
        <span
          key={m.label}
          style={{ background: m.bg, color: m.color, border: `1px solid ${m.border}`, padding: '0.375rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 900 }}
        >
          {m.label}
        </span>
      ))}
    </div>
  )
}
