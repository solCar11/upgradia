import { products, packs } from '@/lib/data'
import ProductClient from './ProductClient'

export function generateStaticParams() {
  return [
    ...products.map(p => ({ slug: p.slug })),
    ...packs.map(p => ({ slug: p.slug })),
  ]
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug) ?? null
  const pack = packs.find(p => p.slug === slug) ?? null

  return <ProductClient product={product} pack={pack} />
}
