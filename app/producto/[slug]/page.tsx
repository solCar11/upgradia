import { getProducto, getPack, getProductos, getPacks, getResenas, getComparisonRows, getFaqItems } from '@/lib/api'
import ProductClient from './ProductClient'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const [products, packs] = await Promise.all([getProductos(), getPacks()])
  return [
    ...products.map(p => ({ slug: p.slug })),
    ...packs.map(p => ({ slug: p.slug })),
  ]
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [product, pack, reviews, comparisonRows, faqItems] = await Promise.all([
    getProducto(slug),
    getPack(slug),
    getResenas(),
    getComparisonRows(),
    getFaqItems(),
  ])

  return (
    <ProductClient
      product={product}
      pack={pack}
      reviews={reviews}
      comparisonRows={comparisonRows}
      faqItems={faqItems}
    />
  )
}
