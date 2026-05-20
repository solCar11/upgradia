import WaveSection from '@/components/ui/WaveSection'
import ReviewCard from '@/components/ui/ReviewCard'
import StarRating from '@/components/ui/StarRating'
import { reviews } from '@/lib/data'

type Props = { productReviews?: typeof reviews }

export default function ReviewsSection({ productReviews }: Props) {
  const displayReviews = productReviews ?? reviews

  return (
    <section id="valoraciones">
      <WaveSection height={100} />
      <div style={{ background: '#000', padding: '2.5rem 1rem 2.5rem' }}>
        <h2 className="text-center font-black" style={{ fontSize: '2.75rem', color: '#5FFA3B', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1, marginBottom: '1rem' }}>Valoraciones</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="font-black text-white" style={{ fontSize: '3rem', lineHeight: 1 }}>4.8</span>
            <StarRating rating={5} size="lg" />
          </div>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '0.25rem', color: '#888' }}>2.983 reseñas</p>
        </div>
        <div style={{ borderTop: '1px solid #222', marginBottom: '1.5rem' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', maxWidth: '42rem', margin: '0 auto' }}>
          {displayReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
