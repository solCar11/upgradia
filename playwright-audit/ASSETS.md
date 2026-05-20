# Upgradia v2 — Assets Audit Report

**Date:** 2026-05-17  
**Auditor:** Claude Code (automated)  
**Scope:** Source asset folders vs. `public/images/` in the Next.js project + cross-reference with `lib/data.ts` and component references.

---

## 1. Source Asset Folders — Full File Listing

### 1.1 `Imágenes Productos/` (23 files)

| # | Filename |
|---|----------|
| 1 | `+100 Cursos premium.png` |
| 2 | `Bot tickets 1 mes.png` |
| 3 | `Bot tickets sin brillo (general).png` |
| 4 | `Guía Profesional de reventa + 1 proveedor 1€.png` |
| 5 | `Libros y Audiolibros (Biblioteca digital).png` |
| 6 | `Pack Todos los bots.png` |
| 7 | `Pack oro.png` |
| 8 | `Pack platino.png` |
| 9 | `Pack starter.png` |
| 10 | `Pack todos los proveedores.png` |
| 11 | `Proveedor Camisetas de Futbol.png` |
| 12 | `Proveedor Labubus.png` |
| 13 | `Proveedor Moissanita.png` |
| 14 | `Proveedor Perfumes.png` |
| 15 | `Proveedor Puffs.png` |
| 16 | `Proveedor Relojes.png` |
| 17 | `Proveedor electrónica.png` |
| 18 | `Proveedor lego.png` |
| 19 | `Proveedor ropa.png` |
| 20 | `bot tickets acceso de por vida.png` |
| 21 | `bot views ebay 1 mes.png` |
| 22 | `bot views ebay de por vida.png` |
| 23 | `pack plata.png` |

---

### 1.2 `Imagenes tridentes packs pro/` (8 files across 2 levels)

**Root level (4 files):**

| # | Filename |
|---|----------|
| 1 | `Starter png sin brillo.png` |
| 2 | `oro png sin brillo.png` |
| 3 | `plata png sin brillo.png` |
| 4 | `platinum png sin brillo.png` |

**Subfolder `Tridentes Sin fondo y con brillo/` (4 files):**

| # | Filename |
|---|----------|
| 1 | `Tridente pack oro png.png` |
| 2 | `Tridente pack plata png.png` |
| 3 | `Tridente pack platino png.png` |
| 4 | `tridente pack starter png.png` |

---

### 1.3 `Logos Upgradia/` (28 files across 3 levels)

**Root level (10 files):**

| # | Filename |
|---|----------|
| 1 | `Isotipo Blanco con márgenes png.png` |
| 2 | `Isotipo sin márgenes blanco png.png` |
| 3 | `Isotipo verde png con márgenes.png` |
| 4 | `Isotipo verde png recortado.png` |
| 5 | `Isotipo verde sobre fondo blanco con márgenes centrado.png` |
| 6 | `Logotipo full black png recortado.png` |
| 7 | `Logotipo full black png sin recortar.png` |
| 8 | `Logotipo full white recortado.png` |
| 9 | `Logotipo full white sin recortar.png` |
| 10 | `Logotipo verde y blanco png  recortado.png` |
| 11 | `Logotipo verde y blanco png sin recortar.png` |
| 12 | `isotipo full black recortado.png` |
| 13 | `isotipo full black sin recortar.png` |
| 14 | `isotipo verde fondo blanco centrado.png` |

**Subfolder `Favicon Negro/` (7 files):**

| # | Filename |
|---|----------|
| 1 | `android-chrome-192x192.png` |
| 2 | `android-chrome-512x512.png` |
| 3 | `apple-touch-icon.png` |
| 4 | `favicon-16x16.png` |
| 5 | `favicon-32x32.png` |
| 6 | `favicon.ico` |
| 7 | `site.webmanifest` |

**Subfolder `FaviconR/` (7 files):**

| # | Filename |
|---|----------|
| 1 | `android-chrome-192x192.png` |
| 2 | `android-chrome-512x512.png` |
| 3 | `apple-touch-icon.png` |
| 4 | `favicon-16x16.png` |
| 5 | `favicon-32x32.png` |
| 6 | `favicon.ico` |
| 7 | `site.webmanifest` |

---

### 1.4 `capturas tienda original/` (16 files)

All files are WhatsApp-exported JPEGs with spaces, parentheses, and timestamps in their names.

| # | Filename |
|---|----------|
| 1 | `WhatsApp Image 2026-05-17 at 17.43.09 (1).jpeg` |
| 2 | `WhatsApp Image 2026-05-17 at 17.43.09.jpeg` |
| 3 | `WhatsApp Image 2026-05-17 at 17.43.10 (1).jpeg` |
| 4 | `WhatsApp Image 2026-05-17 at 17.43.10 (2).jpeg` |
| 5 | `WhatsApp Image 2026-05-17 at 17.43.10 (3).jpeg` |
| 6 | `WhatsApp Image 2026-05-17 at 17.43.10 (4).jpeg` |
| 7 | `WhatsApp Image 2026-05-17 at 17.43.10 (5).jpeg` |
| 8 | `WhatsApp Image 2026-05-17 at 17.43.10 (6).jpeg` |
| 9 | `WhatsApp Image 2026-05-17 at 17.43.10 (7).jpeg` |
| 10 | `WhatsApp Image 2026-05-17 at 17.43.10 (8).jpeg` |
| 11 | `WhatsApp Image 2026-05-17 at 17.43.10 (9).jpeg` |
| 12 | `WhatsApp Image 2026-05-17 at 17.43.10.jpeg` |
| 13 | `WhatsApp Image 2026-05-17 at 18.10.39 (1).jpeg` |
| 14 | `WhatsApp Image 2026-05-17 at 18.10.39 (2).jpeg` |
| 15 | `WhatsApp Image 2026-05-17 at 18.10.39 (3).jpeg` |
| 16 | `WhatsApp Image 2026-05-17 at 18.10.39.jpeg` |

---

### 1.5 `Textos Legales/` (5 files)

These are Markdown files. Note: filenames contain Unicode decomposed characters (e.g., `i╠ü` instead of `í`) — a mojibake/encoding issue in the terminal display.

| # | Filename |
|---|----------|
| 1 | `Aviso legal Upresellz.md` |
| 2 | `Información de Contacto Upresellz.md` |
| 3 | `Política de Devoluciones Upresellz.md` |
| 4 | `Política de Envío Upresellz.md` |
| 5 | `Términos del servicio Upresellz.md` |

---

## 2. Public Assets Directory — Full File Listing

### 2.1 `public/images/products/` (23 files)

| # | Filename |
|---|----------|
| 1 | `100-cursos-premium.png` |
| 2 | `bot-tickets-1-mes.png` |
| 3 | `bot-tickets-basico.png` |
| 4 | `bot-tickets-vitalicio.png` |
| 5 | `bot-views-ebay-1-mes.png` |
| 6 | `bot-views-ebay-vitalicio.png` |
| 7 | `guia-profesional-reventa.png` |
| 8 | `mega-biblioteca-digital.png` |
| 9 | `pack-oro.png` |
| 10 | `pack-plata.png` |
| 11 | `pack-platino.png` |
| 12 | `pack-starter.png` |
| 13 | `pack-todos-los-bots.png` |
| 14 | `pack-todos-los-proveedores.png` |
| 15 | `proveedor-camisetas-futbol.png` |
| 16 | `proveedor-electronica.png` |
| 17 | `proveedor-labubus.png` |
| 18 | `proveedor-lego.png` |
| 19 | `proveedor-moissanita.png` |
| 20 | `proveedor-perfumes.png` |
| 21 | `proveedor-puffs.png` |
| 22 | `proveedor-relojes.png` |
| 23 | `proveedor-ropa.png` |

### 2.2 `public/images/tridentes/` (4 files)

| # | Filename |
|---|----------|
| 1 | `tridente-oro.png` |
| 2 | `tridente-plata.png` |
| 3 | `tridente-platino.png` |
| 4 | `tridente-starter.png` |

### 2.3 `public/images/logos/` (4 files)

| # | Filename |
|---|----------|
| 1 | `isotipo-blanco.png` |
| 2 | `isotipo-verde.png` |
| 3 | `logotipo-blanco.png` |
| 4 | `logotipo-verde-blanco.png` |

### 2.4 `public/` root — other assets (11 files)

| # | Filename | Note |
|---|----------|------|
| 1 | `android-chrome-192x192.png` | Favicon |
| 2 | `android-chrome-512x512.png` | Favicon |
| 3 | `apple-touch-icon.png` | Favicon |
| 4 | `favicon-16x16.png` | Favicon |
| 5 | `favicon-32x32.png` | Favicon |
| 6 | `favicon.ico` | Favicon |
| 7 | `site.webmanifest` | Manifest |
| 8 | `file.svg` | Next.js default placeholder |
| 9 | `globe.svg` | Next.js default placeholder |
| 10 | `next.svg` | Next.js default placeholder |
| 11 | `vercel.svg` | Next.js default placeholder |
| 12 | `window.svg` | Next.js default placeholder |

---

## 3. Naming Consistency Audit

### 3.1 `public/images/products/` — GOOD

- All 23 files: **lowercase**, **kebab-case**, no spaces, no accents, no special characters.
- Consistent `.png` extension throughout.
- **No inconsistencies found.**

### 3.2 `public/images/tridentes/` — GOOD

- All 4 files: **lowercase**, **kebab-case**, no spaces, no accents.
- Consistent `.png` extension.
- **No inconsistencies found.**

### 3.3 `public/images/logos/` — GOOD

- All 4 files: **lowercase**, **kebab-case**, no spaces, no accents.
- Consistent `.png` extension.
- **No inconsistencies found.**

### 3.4 Source folder `Imágenes Productos/` — INCONSISTENT

Issues found:

| Problem | Examples |
|---------|----------|
| Mixed case (Title Case vs lowercase) | `Pack oro.png` vs `bot tickets acceso de por vida.png` |
| Spaces instead of separators | All 23 files use spaces |
| Accented characters | `Guía`, `electrónica` |
| Special characters | `+100 Cursos premium.png` (leading `+`), `Guía Profesional de reventa + 1 proveedor 1€.png` (contains `+`, `€`) |
| Parentheses | `Bot tickets sin brillo (general).png` |
| Mixed case within a single category | `Proveedor Camisetas de Futbol.png` (Title) vs `Proveedor electrónica.png` (mixed) |

### 3.5 Source folder `Imagenes tridentes packs pro/` — INCONSISTENT

| Problem | Examples |
|---------|----------|
| Spaces in filenames | All files use spaces |
| Mixed case | `Tridente pack oro png.png` (Title) vs `tridente pack starter png.png` (lowercase) |
| Redundant word in extension | Files have `png` in their name AND `.png` extension (e.g., `Tridente pack oro png.png`) |
| Root vs subfolder split | 4 "sin brillo" variants at root; 4 "con brillo" variants in subfolder — unclear which set to use |

### 3.6 Source folder `Logos Upgradia/` — INCONSISTENT

| Problem | Examples |
|---------|----------|
| Spaces in filenames | All files use spaces |
| Accented characters | `márgenes`, `centrado` |
| Mixed case | `Isotipo Blanco con márgenes png.png` (Title) vs `isotipo full black recortado.png` (lowercase) |
| Redundant `png` in name | `Isotipo Blanco con márgenes png.png` (has `png` in the name) |
| Double space | `Logotipo verde y blanco png  recortado.png` (two spaces before `recortado`) |
| Inconsistent naming convention | Two separate favicon sets (`Favicon Negro/` and `FaviconR/`) — unclear which is active |

### 3.7 Source folder `capturas tienda original/` — INCONSISTENT (expected)

- All 16 files are raw WhatsApp exports.
- Pattern: `WhatsApp Image YYYY-MM-DD at HH.MM.SS (N).jpeg` — spaces, parentheses, dots in time segment.
- These are reference screenshots, not deployed assets, so this is expected. No renaming needed unless they are to be published.

### 3.8 Source folder `Textos Legales/` — NOTE

- Title Case filenames with spaces — acceptable for documents.
- All reference "Upresellz" (former brand name), not "Upgradia" — **may need content update.**
- Terminal showed encoding artifacts in filenames containing `í` and `é` (displayed as decomposed Unicode sequences). Actual filenames on disk should be correct; this is a display artifact.

---

## 4. Product Images Cross-Reference (`data.ts` vs `public/images/products/`)

All 23 product image paths referenced in `lib/data.ts` were checked against `public/images/products/`.

### Result: ALL PRESENT — No missing files

| Referenced in `data.ts` | File exists in `public/images/products/` |
|--------------------------|------------------------------------------|
| `100-cursos-premium.png` | YES |
| `bot-tickets-1-mes.png` | YES |
| `bot-tickets-basico.png` | YES |
| `bot-tickets-vitalicio.png` | YES |
| `bot-views-ebay-1-mes.png` | YES |
| `bot-views-ebay-vitalicio.png` | YES |
| `guia-profesional-reventa.png` | YES |
| `mega-biblioteca-digital.png` | YES |
| `pack-oro.png` | YES |
| `pack-plata.png` | YES |
| `pack-platino.png` | YES |
| `pack-starter.png` | YES |
| `pack-todos-los-bots.png` | YES |
| `pack-todos-los-proveedores.png` | YES |
| `proveedor-camisetas-futbol.png` | YES |
| `proveedor-electronica.png` | YES |
| `proveedor-labubus.png` | YES |
| `proveedor-lego.png` | YES |
| `proveedor-moissanita.png` | YES |
| `proveedor-perfumes.png` | YES |
| `proveedor-puffs.png` | YES |
| `proveedor-relojes.png` | YES |
| `proveedor-ropa.png` | YES |

**Missing product images: 0**

---

## 5. Tridente Images Cross-Reference (`data.ts` vs `public/images/tridentes/`)

All 4 tridente image paths referenced in `lib/data.ts` (packs array) were checked.

### Result: ALL PRESENT — No missing files

| Referenced in `data.ts` | File exists in `public/images/tridentes/` |
|--------------------------|-------------------------------------------|
| `tridente-starter.png` | YES |
| `tridente-plata.png` | YES |
| `tridente-oro.png` | YES |
| `tridente-platino.png` | YES |

**Missing tridente images: 0**

---

## 6. Logo References in Components

Three components reference logo images. All are checked against `public/images/logos/`.

| Component | Referenced Path | File exists |
|-----------|----------------|-------------|
| `components/layout/Navbar.tsx:47` | `/images/logos/isotipo-verde.png` | YES |
| `components/layout/Footer.tsx:35` | `/images/logos/isotipo-verde.png` | YES |
| `components/home/ComparisonTable.tsx:20` | `/images/logos/isotipo-verde.png` | YES |

All three components reference the same file (`isotipo-verde.png`), which exists.

Other files present in `public/images/logos/` but **not yet referenced** by any component:

| File | Status |
|------|--------|
| `isotipo-blanco.png` | In public but unreferenced |
| `logotipo-blanco.png` | In public but unreferenced |
| `logotipo-verde-blanco.png` | In public but unreferenced |

**Missing logo images: 0**

---

## 7. Source-to-Public Mapping Analysis

This section maps source files (original names) to their deployed counterparts, identifying any source file that has **not** been deployed to `public/`.

### Product images: source vs. deployed

| Source file (`Imágenes Productos/`) | Deployed as (`public/images/products/`) | Status |
|--------------------------------------|------------------------------------------|--------|
| `+100 Cursos premium.png` | `100-cursos-premium.png` | Deployed (leading `+` stripped) |
| `Bot tickets 1 mes.png` | `bot-tickets-1-mes.png` | Deployed |
| `Bot tickets sin brillo (general).png` | _(no match)_ | **NOT DEPLOYED** |
| `Guía Profesional de reventa + 1 proveedor 1€.png` | `guia-profesional-reventa.png` | Deployed |
| `Libros y Audiolibros (Biblioteca digital).png` | `mega-biblioteca-digital.png` | Deployed (renamed) |
| `Pack Todos los bots.png` | `pack-todos-los-bots.png` | Deployed |
| `Pack oro.png` | `pack-oro.png` | Deployed |
| `Pack platino.png` | `pack-platino.png` | Deployed |
| `Pack starter.png` | `pack-starter.png` | Deployed |
| `Pack todos los proveedores.png` | `pack-todos-los-proveedores.png` | Deployed |
| `Proveedor Camisetas de Futbol.png` | `proveedor-camisetas-futbol.png` | Deployed |
| `Proveedor Labubus.png` | `proveedor-labubus.png` | Deployed |
| `Proveedor Moissanita.png` | `proveedor-moissanita.png` | Deployed |
| `Proveedor Perfumes.png` | `proveedor-perfumes.png` | Deployed |
| `Proveedor Puffs.png` | `proveedor-puffs.png` | Deployed |
| `Proveedor Relojes.png` | `proveedor-relojes.png` | Deployed |
| `Proveedor electrónica.png` | `proveedor-electronica.png` | Deployed |
| `Proveedor lego.png` | `proveedor-lego.png` | Deployed |
| `Proveedor ropa.png` | `proveedor-ropa.png` | Deployed |
| `bot tickets acceso de por vida.png` | `bot-tickets-vitalicio.png` | Deployed (renamed) |
| `bot views ebay 1 mes.png` | `bot-views-ebay-1-mes.png` | Deployed |
| `bot views ebay de por vida.png` | `bot-views-ebay-vitalicio.png` | Deployed (renamed) |
| `pack plata.png` | `pack-plata.png` | Deployed |

**Source file not yet deployed:**
- `Bot tickets sin brillo (general).png` — This appears to be a generic/alternate version of the bot tickets image. It is **not referenced** in `data.ts` under any name. Likely unused or a design variant.

### Tridente images: source vs. deployed

The project uses the **"con brillo"** variants from `Tridentes Sin fondo y con brillo/` subfolder.

| Source file | Deployed as | Status |
|-------------|-------------|--------|
| `Tridentes Sin fondo y con brillo/Tridente pack oro png.png` | `tridente-oro.png` | Deployed |
| `Tridentes Sin fondo y con brillo/Tridente pack plata png.png` | `tridente-plata.png` | Deployed |
| `Tridentes Sin fondo y con brillo/Tridente pack platino png.png` | `tridente-platino.png` | Deployed |
| `Tridentes Sin fondo y con brillo/tridente pack starter png.png` | `tridente-starter.png` | Deployed |
| `oro png sin brillo.png` (root) | _(no match)_ | **NOT DEPLOYED** (alternate version) |
| `plata png sin brillo.png` (root) | _(no match)_ | **NOT DEPLOYED** (alternate version) |
| `platinum png sin brillo.png` (root) | _(no match)_ | **NOT DEPLOYED** (alternate version) |
| `Starter png sin brillo.png` (root) | _(no match)_ | **NOT DEPLOYED** (alternate version) |

The 4 "sin brillo" (no glow) tridente variants at the root of the source folder are not deployed. These appear to be design alternatives, not current assets.

---

## 8. Summary of Issues

### Critical (blocks functionality)
- **None.** All images referenced in `data.ts` and components exist in `public/`.

### Notable (informational / for future action)

| # | Issue | Location | Action needed |
|---|-------|----------|---------------|
| 1 | `Bot tickets sin brillo (general).png` exists in source but is not deployed and not referenced anywhere | `Imágenes Productos/` | Decide if it should be used or discarded |
| 2 | 4 "sin brillo" tridente variants exist in source but are not deployed | `Imagenes tridentes packs pro/` (root) | Keep as alternatives or remove from source folder |
| 3 | 3 logo files deployed to `public/images/logos/` are not referenced in any component | `isotipo-blanco.png`, `logotipo-blanco.png`, `logotipo-verde-blanco.png` | Add to components where appropriate (e.g., light-mode navbar) or note they are for future use |
| 4 | `Textos Legales/` files reference "Upresellz" (former brand name) instead of "Upgradia" | `Textos Legales/*.md` | Update brand name in legal text content |
| 5 | Two favicon sets in `Logos Upgradia/` (`Favicon Negro/` and `FaviconR/`) — only one set is in `public/` | `Logos Upgradia/` | Confirm which favicon set is correct; the deployed set matches the `FaviconR/` variant (to be verified visually) |
| 6 | Default Next.js placeholder SVGs remain in `public/` root | `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Remove these placeholder files before going to production |
| 7 | Source folder `capturas tienda original/` is reference-only and not deployed | — | No action needed unless screenshots are to be added to the site |
| 8 | Source filenames use Title Case, spaces, accents, and special characters | All source folders | Already handled by renaming on import to `public/`; source folders are for human reference only |

---

*End of audit. No files were renamed or moved during this audit.*
