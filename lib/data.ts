export type Product = {
  id: string
  slug: string
  name: string
  category: 'proveedores' | 'bots' | 'formacion'
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  image: string
  badge?: string
  description?: string
}

export type Pack = {
  id: string
  slug: string
  name: string
  subtitle: string
  price: number
  originalPrice: number
  savingsPercent: number
  tridentImage: string
  glowColor: string
  subtitleColor: string
  includes: string[]
  image: string
}

export type Review = {
  id: string
  name: string
  rating: number
  text: string
  productName: string
  productImage: string
  verified: boolean
  avatar?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ComparisonRow = {
  feature: string
  upgradia: boolean
  others: boolean
}

export const products: Product[] = [
  // PROVEEDORES
  {
    id: 'proveedor-camisetas-futbol',
    slug: 'proveedor-camisetas-futbol',
    name: 'Proveedor · Camisetas de Fútbol',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 312,
    image: '/images/products/proveedor-camisetas-futbol.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-electronica',
    slug: 'proveedor-electronica',
    name: 'Proveedor · Electrónica',
    category: 'proveedores',
    price: 14.99,
    originalPrice: 29.99,
    rating: 5,
    reviewCount: 284,
    image: '/images/products/proveedor-electronica.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-labubus',
    slug: 'proveedor-labubus',
    name: 'Proveedor · Labubus',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 198,
    image: '/images/products/proveedor-labubus.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-lego',
    slug: 'proveedor-lego',
    name: 'Proveedor · Lego',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 241,
    image: '/images/products/proveedor-lego.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-moissanita',
    slug: 'proveedor-moissanita',
    name: 'Proveedor · Moissanita',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 176,
    image: '/images/products/proveedor-moissanita.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-perfumes',
    slug: 'proveedor-perfumes',
    name: 'Proveedor · Perfumes',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 389,
    image: '/images/products/proveedor-perfumes.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-puffs',
    slug: 'proveedor-puffs',
    name: 'Proveedor · Puffs',
    category: 'proveedores',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 223,
    image: '/images/products/proveedor-puffs.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-relojes',
    slug: 'proveedor-relojes',
    name: 'Proveedor · Relojes',
    category: 'proveedores',
    price: 14.99,
    originalPrice: 29.99,
    rating: 5,
    reviewCount: 317,
    image: '/images/products/proveedor-relojes.png',
    badge: 'Oferta',
  },
  {
    id: 'proveedor-ropa',
    slug: 'proveedor-ropa',
    name: 'Proveedor · Ropa',
    category: 'proveedores',
    price: 14.99,
    originalPrice: 29.99,
    rating: 5,
    reviewCount: 402,
    image: '/images/products/proveedor-ropa.png',
    badge: 'Oferta',
  },
  {
    id: 'pack-todos-los-proveedores',
    slug: 'pack-todos-los-proveedores',
    name: 'Pack Todos los Proveedores',
    category: 'proveedores',
    price: 49.99,
    originalPrice: 99.99,
    rating: 5,
    reviewCount: 2987,
    image: '/images/products/pack-todos-los-proveedores.png',
    badge: 'Oferta',
  },
  // BOTS
  {
    id: 'bot-tickets-1-mes',
    slug: 'bot-tickets-1-mes',
    name: 'Bot de Tickets · 1 Mes',
    category: 'bots',
    price: 19.99,
    originalPrice: 39.99,
    rating: 5,
    reviewCount: 541,
    image: '/images/products/bot-tickets-1-mes.png',
    badge: 'Oferta',
  },
  {
    id: 'bot-tickets-vitalicio',
    slug: 'bot-tickets-vitalicio',
    name: 'Bot de Tickets · Vitalicio',
    category: 'bots',
    price: 49.99,
    originalPrice: 99.99,
    rating: 5,
    reviewCount: 318,
    image: '/images/products/bot-tickets-vitalicio.png',
    badge: 'Oferta',
  },
  {
    id: 'bot-tickets-basico',
    slug: 'bot-tickets-basico',
    name: 'Bot de Tickets · Básico',
    category: 'bots',
    price: 9.99,
    originalPrice: 19.99,
    rating: 5,
    reviewCount: 287,
    image: '/images/products/bot-tickets-basico.png',
    badge: 'Oferta',
  },
  {
    id: 'bot-views-ebay-1-mes',
    slug: 'bot-views-ebay-1-mes',
    name: 'Bot de Visitas eBay · 1 Mes',
    category: 'bots',
    price: 14.99,
    originalPrice: 29.99,
    rating: 5,
    reviewCount: 412,
    image: '/images/products/bot-views-ebay-1-mes.png',
    badge: 'Oferta',
  },
  {
    id: 'bot-views-ebay-vitalicio',
    slug: 'bot-views-ebay-vitalicio',
    name: 'Bot de Visitas eBay · Vitalicio',
    category: 'bots',
    price: 39.99,
    originalPrice: 79.99,
    rating: 5,
    reviewCount: 256,
    image: '/images/products/bot-views-ebay-vitalicio.png',
    badge: 'Oferta',
  },
  {
    id: 'pack-todos-los-bots',
    slug: 'pack-todos-los-bots',
    name: 'Pack Todos los Bots · Vitalicio',
    category: 'bots',
    price: 79.99,
    originalPrice: 159.99,
    rating: 5,
    reviewCount: 198,
    image: '/images/products/pack-todos-los-bots.png',
    badge: 'Oferta',
  },
  // FORMACIÓN
  {
    id: '100-cursos-premium',
    slug: '100-cursos-premium',
    name: '100 Cursos Premium',
    category: 'formacion',
    price: 34.99,
    originalPrice: 69.99,
    rating: 5,
    reviewCount: 634,
    image: '/images/products/100-cursos-premium.png',
    badge: 'Oferta',
  },
  {
    id: 'mega-biblioteca-digital',
    slug: 'mega-biblioteca-digital',
    name: 'Mega Biblioteca Digital',
    category: 'formacion',
    price: 19.99,
    originalPrice: 49.99,
    rating: 5,
    reviewCount: 521,
    image: '/images/products/mega-biblioteca-digital.png',
    badge: 'Oferta',
  },
  {
    id: 'guia-profesional-reventa',
    slug: 'guia-profesional-reventa',
    name: 'Guía Profesional de Reventa',
    category: 'formacion',
    price: 1.00,
    originalPrice: 49.99,
    rating: 5,
    reviewCount: 1243,
    image: '/images/products/guia-profesional-reventa.png',
    badge: 'Oferta',
  },
]

export const packs: Pack[] = [
  {
    id: 'pack-starter',
    slug: 'pack-starter',
    name: 'Pack Starter',
    subtitle: 'Empieza a Ganar',
    price: 34.99,
    originalPrice: 59.99,
    savingsPercent: 42,
    tridentImage: '/images/tridentes/tridente-starter.png',
    glowColor: '#cc7722',
    subtitleColor: '#F5A623',
    image: '/images/products/pack-starter.png',
    includes: [
      '1 proveedor exclusivo',
      'Acceso por 1 mes al Bot generador de tickets',
      'Guía profesional de reventa de Upgradia',
      'Carpeta de 40 libros clave en desarrollo personal, ventas, productividad…',
      'Acceso al canal de soporte y expertos en Discord',
    ],
  },
  {
    id: 'pack-plata',
    slug: 'pack-plata',
    name: 'Pack Plata',
    subtitle: 'Elige Crecer',
    price: 44.99,
    originalPrice: 59.99,
    savingsPercent: 25,
    tridentImage: '/images/tridentes/tridente-plata.png',
    glowColor: '#888888',
    subtitleColor: '#aaaaaa',
    image: '/images/products/pack-plata.png',
    includes: [
      'Acceso completo al Pack de +100 cursos premium',
      'Acceso completo a la Mega biblioteca digital (+40.000 libros y 1.200 audiolibros)',
      'Guía profesional de reventa de Upgradia',
      'Acceso al canal de expertos para resolver dudas, recibir consejos y compartir progresos',
    ],
  },
  {
    id: 'pack-oro',
    slug: 'pack-oro',
    name: 'Pack Oro',
    subtitle: 'Potencia tus Ventas',
    price: 89.99,
    originalPrice: 129.99,
    savingsPercent: 31,
    tridentImage: '/images/tridentes/tridente-oro.png',
    glowColor: '#FFD700',
    subtitleColor: '#FFD700',
    image: '/images/products/pack-oro.png',
    includes: [
      'Mega biblioteca con +40.000 libros y 1.200 audiolibros',
      'Pack completo de proveedores',
      'Acceso por 1 mes al bot generador de tickets',
      'Acceso por 1 mes al bot de visitas eBay',
      'Guía profesional de reventa de Upgradia',
      'Acceso al canal privado de expertos en Discord',
    ],
  },
  {
    id: 'pack-platino',
    slug: 'pack-platino',
    name: 'Pack Platino',
    subtitle: 'El nivel Definitivo',
    price: 149.99,
    originalPrice: 329.99,
    savingsPercent: 55,
    tridentImage: '/images/tridentes/tridente-platino.png',
    glowColor: '#39FF14',
    subtitleColor: '#39FF14',
    image: '/images/products/pack-platino.png',
    includes: [
      'Acceso de por vida a ambos bots oficiales: Bot generador de tickets + Bot de visitas eBay',
      'Mega biblioteca (+40.000 libros y 1.200 audiolibros)',
      'Pack completo de proveedores (acceso extendido)',
      'Pack de +100 cursos premium',
      'Guía profesional de reventa de Upgradia',
      'Carpeta con +300 tickets físicos listos para imprimir',
      'Actualizaciones anticipadas de todo el contenido (1 semana antes que el público general)',
      'Acceso completo al Club Platino privado en Discord',
    ],
  },
]

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Víctor P.',
    rating: 5,
    text: 'Precio simbólico para la cantidad de info que trae. El proveedor que trae tiene buen producto y buen servicio. Hice un pedido pequeño para probar y vendí sin problema. Lo mejor es que no te lía, te dice lo justo y útil.',
    productName: 'Guía Profesional de Reventa',
    productImage: '/images/products/guia-profesional-reventa.png',
    verified: true,
  },
  {
    id: '2',
    name: 'Héctor P.',
    rating: 5,
    text: 'Producto perfecto si buscas formación para negocios online. Amplía conocimientos con libros y aplica con cursos. La guía de reventa es maravillosa, va directa al grano con consejos que sirven.',
    productName: 'Pack Plata',
    productImage: '/images/products/pack-plata.png',
    verified: true,
  },
  {
    id: '3',
    name: 'Juan R.',
    rating: 5,
    text: 'Pensé que sería otra estafa, pero hice la compra y al momento me llegó todo. Muy fácil de usar y 100% recomendado.',
    productName: 'Pack Todos los Proveedores',
    productImage: '/images/products/pack-todos-los-proveedores.png',
    verified: true,
  },
  {
    id: '4',
    name: 'María G.',
    rating: 5,
    text: 'Llevo dos semanas usando los bots y ya he recuperado la inversión. El soporte en Discord responde rápido y resuelven todo. Muy recomendable para empezar.',
    productName: 'Bot de Tickets · 1 Mes',
    productImage: '/images/products/bot-tickets-1-mes.png',
    verified: true,
  },
  {
    id: '5',
    name: 'Carlos M.',
    rating: 5,
    text: 'El pack de proveedores es brutal. Tienes todo centralizado y verificado, sin tener que buscar por tu cuenta. Me ahorró semanas de investigación.',
    productName: 'Pack Todos los Proveedores',
    productImage: '/images/products/pack-todos-los-proveedores.png',
    verified: true,
  },
  {
    id: '6',
    name: 'Laura S.',
    rating: 5,
    text: 'La biblioteca digital es una locura. Más de 40.000 libros y audiolibros por menos de 20€. Contenido de calidad que normalmente pagarías mucho más.',
    productName: 'Mega Biblioteca Digital',
    productImage: '/images/products/mega-biblioteca-digital.png',
    verified: true,
  },
]

export const faqItems: FaqItem[] = [
  {
    question: '¿Cuánto tardo en recibir mi producto?',
    answer: 'La entrega es inmediata. En cuanto se confirme tu pago recibirás un correo con el acceso a tu producto. En casos excepcionales puede tardar hasta 24-48 horas si requiere verificación manual.',
  },
  {
    question: '¿Los proveedores envían a todos los países?',
    answer: 'La mayoría de nuestros proveedores trabajan con envíos nacionales e internacionales. Cada guía de proveedor especifica los países de envío disponibles y las condiciones exactas.',
  },
  {
    question: '¿Son proveedores verificados?',
    answer: 'Sí. Todos los proveedores incluidos en nuestros productos han sido verificados por nuestro equipo. Solo incluimos proveedores con los que hemos trabajado directamente y que cumplen estándares de calidad y servicio.',
  },
  {
    question: '¿Necesito experiencia previa para empezar a revender?',
    answer: 'No. Nuestros productos están diseñados tanto para principiantes como para revendedores con experiencia. La Guía Profesional de Reventa te lleva desde cero hasta tus primeras ventas de forma práctica.',
  },
  {
    question: '¿Qué hago si tengo algún problema con mi compra?',
    answer: 'Puedes contactarnos a través del formulario de contacto o directamente en nuestro servidor de Discord. Nuestro equipo responde 7 días a la semana y resolveremos tu incidencia lo antes posible.',
  },
]

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Proveedores Verificados', upgradia: true, others: false },
  { feature: 'Envío Instantáneo', upgradia: true, others: false },
  { feature: 'Calidad 1:1', upgradia: true, others: false },
  { feature: 'Todo en un mismo lugar', upgradia: true, others: false },
  { feature: 'Comunidad privada Gratuita', upgradia: true, others: false },
  { feature: '+100 clientes satisfechos', upgradia: true, others: false },
]

export const upsellProduct: Product = products.find(p => p.id === 'bot-tickets-1-mes')!
