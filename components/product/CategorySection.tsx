import ProductCard from './ProductCard'
import type { Product } from '@/lib/data'

type Props = { title: string; products: Product[]; id: string }

export default function CategorySection({ title, products, id }: Props) {
  return (
    <section id={id} style={{ padding: '2.5rem 1.25rem' }}>
      <style>{`
        #${id} .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          #${id} .products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
      <h2 className="text-center font-black" style={{ fontSize: '2.75rem', color: '#5FFA3B', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em', lineHeight: 1, marginBottom: '2.25rem' }}>{title}</h2>
      <div className="products-grid">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </section>
  )
}
