import { directusFetch } from './directus'
import {
  products as staticProducts,
  packs as staticPacks,
  reviews as staticReviews,
  faqItems as staticFaqItems,
  comparisonRows as staticComparisonRows,
  upsellProduct as staticUpsellProduct,
} from './data'
import type { Product, Pack, Review, FaqItem, ComparisonRow } from './data'

type DirectusProduct = {
  id: number
  nombre: string
  slug: string
  descripcion: string | null
  precio: number
  precio_original: number | null
  imagen_url: string | null
  categoria: string | null
  badge: string | null
  valoracion_media: number | null
  numero_resenas: number | null
  activo: boolean
  subtitulo: string | null
  porcentaje_ahorro: number | null
  imagen_tridente: string | null
  color_glow: string | null
  color_subtitulo: string | null
  incluye: string[] | null
}

type DirectusResena = {
  id: number
  nombre_cliente: string
  texto: string
  valoracion: number | null
  verificada: boolean
  visible: boolean
  producto_id: number | null
}

function mapProduct(d: DirectusProduct): Product {
  return {
    id: d.slug,
    slug: d.slug,
    name: d.nombre,
    category: d.categoria as Product['category'],
    price: Number(d.precio),
    originalPrice: Number(d.precio_original ?? d.precio),
    rating: Number(d.valoracion_media ?? 5),
    reviewCount: d.numero_resenas ?? 0,
    image: d.imagen_url ?? '/images/products/placeholder.png',
    badge: d.badge ?? undefined,
    description: d.descripcion ?? undefined,
  }
}

function mapPack(d: DirectusProduct): Pack {
  return {
    id: d.slug,
    slug: d.slug,
    name: d.nombre,
    subtitle: d.subtitulo ?? '',
    price: Number(d.precio),
    originalPrice: Number(d.precio_original ?? d.precio),
    savingsPercent: d.porcentaje_ahorro ?? 0,
    tridentImage: d.imagen_tridente ?? '',
    glowColor: d.color_glow ?? '#5FFA3B',
    subtitleColor: d.color_subtitulo ?? '#fff',
    includes: d.incluye ?? [],
    image: d.imagen_url ?? '/images/products/placeholder.png',
  }
}

function mapReview(d: DirectusResena, productSlug: string, productImage: string): Review {
  return {
    id: String(d.id),
    name: d.nombre_cliente,
    rating: d.valoracion ?? 5,
    text: d.texto,
    productName: '',
    productImage,
    verified: d.verificada,
  }
}

export async function getProductos(categoria?: string): Promise<Product[]> {
  try {
    const params: Record<string, string> = {
      'filter[activo][_eq]': 'true',
      'filter[categoria][_neq]': 'packs',
      limit: '100',
      sort: 'id',
    }
    if (categoria) {
      params['filter[categoria][_eq]'] = categoria
      delete params['filter[categoria][_neq]']
    }
    const items = await directusFetch<DirectusProduct[]>('/items/productos', { params })
    return items.map(mapProduct)
  } catch {
    return categoria
      ? staticProducts.filter(p => p.category === categoria)
      : staticProducts
  }
}

export async function getProducto(slug: string): Promise<Product | null> {
  try {
    const items = await directusFetch<DirectusProduct[]>('/items/productos', {
      params: {
        'filter[slug][_eq]': slug,
        'filter[activo][_eq]': 'true',
        limit: '1',
      },
    })
    if (!items.length) return null
    return mapProduct(items[0])
  } catch {
    return staticProducts.find(p => p.slug === slug) ?? null
  }
}

export async function getPacks(): Promise<Pack[]> {
  try {
    const items = await directusFetch<DirectusProduct[]>('/items/productos', {
      params: {
        'filter[categoria][_eq]': 'packs',
        'filter[activo][_eq]': 'true',
        limit: '20',
        sort: 'precio',
      },
    })
    return items.map(mapPack)
  } catch {
    return staticPacks
  }
}

export async function getPack(slug: string): Promise<Pack | null> {
  try {
    const items = await directusFetch<DirectusProduct[]>('/items/productos', {
      params: {
        'filter[slug][_eq]': slug,
        'filter[categoria][_eq]': 'packs',
        'filter[activo][_eq]': 'true',
        limit: '1',
      },
    })
    if (!items.length) return null
    return mapPack(items[0])
  } catch {
    return staticPacks.find(p => p.slug === slug) ?? null
  }
}

export async function getResenas(productoSlug?: string): Promise<Review[]> {
  try {
    const params: Record<string, string> = {
      'filter[visible][_eq]': 'true',
      limit: '50',
      sort: '-fecha',
      fields: 'id,nombre_cliente,texto,valoracion,verificada,visible,producto_id.id,producto_id.slug,producto_id.imagen_url,producto_id.nombre',
    }
    const items = await directusFetch<Array<{
      id: number
      nombre_cliente: string
      texto: string
      valoracion: number | null
      verificada: boolean
      visible: boolean
      producto_id: { id: number; slug: string; imagen_url: string | null; nombre: string } | null
    }>>('/items/resenas', { params })

    return items
      .filter(r => !productoSlug || r.producto_id?.slug === productoSlug)
      .map(r => ({
        id: String(r.id),
        name: r.nombre_cliente,
        rating: r.valoracion ?? 5,
        text: r.texto,
        productName: r.producto_id?.nombre ?? '',
        productImage: r.producto_id?.imagen_url ?? '',
        verified: r.verificada,
      }))
  } catch {
    return staticReviews
  }
}

export async function getUpsell(): Promise<Product | null> {
  try {
    const items = await directusFetch<Array<{
      id: number
      producto_upsell_id: { id: number; slug: string } | null
      activo: boolean
    }>>('/items/upsells', {
      params: {
        'filter[activo][_eq]': 'true',
        limit: '1',
        fields: 'id,producto_upsell_id.id,producto_upsell_id.slug,activo',
      },
    })
    if (!items.length || !items[0].producto_upsell_id) return staticUpsellProduct
    const slug = items[0].producto_upsell_id.slug
    return await getProducto(slug)
  } catch {
    return staticUpsellProduct
  }
}

export async function validarDescuento(
  codigo: string,
  precioTotal: number
): Promise<{ valid: boolean; descuento: number; mensaje?: string }> {
  try {
    const items = await directusFetch<Array<{
      id: number
      codigo: string
      tipo: string
      valor: number
      usos_maximos: number | null
      usos_actuales: number
      fecha_expiracion: string | null
      activo: boolean
    }>>('/items/descuentos', {
      params: {
        'filter[codigo][_eq]': codigo,
        'filter[activo][_eq]': 'true',
        limit: '1',
      },
    })

    if (!items.length) return { valid: false, descuento: 0, mensaje: 'Código no válido' }
    const d = items[0]

    if (d.usos_maximos && d.usos_actuales >= d.usos_maximos) {
      return { valid: false, descuento: 0, mensaje: 'Código agotado' }
    }
    if (d.fecha_expiracion && new Date(d.fecha_expiracion) < new Date()) {
      return { valid: false, descuento: 0, mensaje: 'Código expirado' }
    }

    const descuento = d.tipo === 'porcentaje'
      ? precioTotal * (Number(d.valor) / 100)
      : Number(d.valor)

    return { valid: true, descuento: Math.min(descuento, precioTotal) }
  } catch {
    return { valid: false, descuento: 0, mensaje: 'Error validando código' }
  }
}

export async function getFaqItems(): Promise<FaqItem[]> {
  return staticFaqItems
}

export async function getComparisonRows(): Promise<ComparisonRow[]> {
  return staticComparisonRows
}

export async function getAllSearchableItems(): Promise<{ products: Product[]; packs: Pack[] }> {
  try {
    const [products, packs] = await Promise.all([getProductos(), getPacks()])
    return { products, packs }
  } catch {
    return { products: staticProducts, packs: staticPacks }
  }
}
