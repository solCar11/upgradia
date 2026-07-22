import { headers } from 'next/headers'
import { getProducto, getPack, getResenas, getComparisonRows, getFaqItems } from '@/lib/api'
import ProductClient from './ProductClient'

export const dynamic = 'force-dynamic'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  await headers()
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
