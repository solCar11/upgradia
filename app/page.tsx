import CategorySection from '@/components/product/CategorySection'
import PacksSection from '@/components/home/PacksSection'
import ComparisonTable from '@/components/home/ComparisonTable'
import FaqSection from '@/components/home/FaqSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import { products } from '@/lib/data'

export default function HomePage() {
  const proveedores = products.filter(p => p.category === 'proveedores')
  const bots = products.filter(p => p.category === 'bots')
  const formacion = products.filter(p => p.category === 'formacion')

  return (
    <div>
      <CategorySection id="proveedores" title="Proveedores" products={proveedores} />
      <CategorySection id="bots" title="Bots" products={bots} />
      <CategorySection id="formacion" title="Formación" products={formacion} />
      <PacksSection />
      <ComparisonTable />
      <FaqSection />
      <ReviewsSection />
    </div>
  )
}
