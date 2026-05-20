const { chromium } = require('playwright');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname);
const BASE_URL = 'http://localhost:3000';

const DESKTOP_PAGES = [
  { path: '/', name: 'home-desktop' },
  { path: '/producto/proveedor-camisetas-futbol', name: 'producto-desktop' },
  { path: '/carrito', name: 'carrito-desktop' },
  { path: '/contacto', name: 'contacto-desktop' },
  { path: '/legal/terminos', name: 'terminos-desktop' },
];

const MOBILE_PAGES = [
  { path: '/', name: 'home-mobile' },
  { path: '/producto/proveedor-camisetas-futbol', name: 'producto-mobile' },
];

(async () => {
  const browser = await chromium.launch();

  // Desktop screenshots (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  for (const { path: pagePath, name } of DESKTOP_PAGES) {
    console.log(`Capturing desktop: ${pagePath}`);
    await desktopPage.goto(BASE_URL + pagePath, { waitUntil: 'networkidle', timeout: 30000 });
    await desktopPage.waitForTimeout(2000);
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, `${name}.png`),
      fullPage: true,
    });
    console.log(`  Saved: ${name}.png`);
  }
  await desktopContext.close();

  // Mobile screenshots (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    deviceScaleFactor: 3,
  });
  const mobilePage = await mobileContext.newPage();

  for (const { path: pagePath, name } of MOBILE_PAGES) {
    console.log(`Capturing mobile: ${pagePath}`);
    await mobilePage.goto(BASE_URL + pagePath, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({
      path: path.join(OUTPUT_DIR, `${name}.png`),
      fullPage: true,
    });
    console.log(`  Saved: ${name}.png`);
  }
  await mobileContext.close();

  await browser.close();
  console.log('All screenshots captured.');
})();
