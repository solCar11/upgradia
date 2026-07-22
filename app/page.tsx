import { headers } from 'next/headers'
import CategorySection from '@/components/product/CategorySection'
import PacksSection from '@/components/home/PacksSection'
import ComparisonTable from '@/components/home/ComparisonTable'
import FaqSection from '@/components/home/FaqSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import { getProductos, getPacks, getResenas, getComparisonRows, getFaqItems } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  await headers()
  const [allProducts, packs, reviews, comparisonRows, faqItems] = await Promise.all([
    getProductos(),
    getPacks(),
    getResenas(),
    getComparisonRows(),
    getFaqItems(),
  ])

  const proveedores = allProducts.filter(p => p.category === 'proveedores')
  const bots = allProducts.filter(p => p.category === 'bots')
  const formacion = allProducts.filter(p => p.category === 'formacion')

  return (
    <div>
      <CategorySection id="proveedores" title="Proveedores" products={proveedores} />
      <CategorySection id="bots" title="Bots" products={bots} />
      <CategorySection id="formacion" title="Formación" products={formacion} />
      <PacksSection packs={packs} />
      <ComparisonTable rows={comparisonRows} />
      <FaqSection items={faqItems} />
      <ReviewsSection reviews={reviews} />
    </div>
  )
}
