type Props = { rating: number; size?: 'sm' | 'md' | 'lg' }

export default function StarRating({ rating, size = 'md' }: Props) {
  const fontSize = { sm: '0.875rem', md: '1.1rem', lg: '1.5rem' }[size]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= rating ? '#F5A623' : '#444', fontSize, lineHeight: 1 }}>★</span>
      ))}
    </div>
  )
}
