# Upgradia v2

Tienda digital para revendedores españoles. Objetivo: replica pixel-perfect de capturas móviles originales.

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS v4 — NO usar `@apply` ni `@layer` en este setup
- Zustand 5 (carrito)
- Lucide React (iconos)
- Playwright (auditoría visual)

## Comandos

```sh
npm run dev                    # dev server
npm run build                  # OBLIGATORIO antes de dar algo por terminado
npm run start -- -p 4000       # sirve build (usar 4000+ para evitar conflictos)
cmd //c "taskkill /PID <pid> /F"  # matar proceso en Windows (desde Git Bash)
```

## Rutas clave

- @app/globals.css — design tokens y clases utilitarias (fuente de verdad visual)
- @lib/data.ts — productos, packs, reseñas, FAQ, comparativa
- @lib/cart-store.ts — estado carrito + timer 5min
- @components/ — layout/, product/, home/, product-page/, cart/, ui/
- `../Capturas tienda original/` — referencia visual definitiva

## Reglas

1. Rutas bash siempre con forward slash (Git Bash en Windows)
2. Antes de tocar cualquier componente visual leer @app/globals.css
3. Cambios visuales: trabajar sección por sección, nunca refactors masivos
4. Playwright: usar `domcontentloaded` + `waitForTimeout(2000)`, nunca `networkidle`
5. No leer más de 2 imágenes por paso al comparar capturas
6. `npm run build` sin errores antes de dar cualquier tarea por terminada
7. Puertos 3000-3010 pueden estar ocupados — usar 4000+
8. Siempre matar el proceso anterior antes de arrancar un nuevo `next start`

## Estado del proyecto

**Hecho:** home, producto, carrito (timer + upsell + T&C), legales, contacto, footer

**Pendiente:** Stripe, Supabase auth, panel admin, upsell dinámico, webhook carrito abandonado

## NUNCA

1. Usar `@apply` o `@layer` — Tailwind v4 no los soporta en este setup
2. Poner imports en medio de un componente — siempre al inicio del archivo
3. Hardcodear valores de diseño (colores, tipografías, espaciados) fuera de globals.css
4. Asumir que un `next start` anterior sirve el build nuevo — matar siempre el proceso viejo
5. Hacer cambios masivos en múltiples componentes a la vez
