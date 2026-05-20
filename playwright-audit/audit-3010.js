const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3010/', { waitUntil: 'networkidle' });

  const sections = ['#faq', '#comparativa', '#valoraciones', '#packs'];
  for (const id of sections) {
    const el = await page.$(id);
    if (el) {
      const name = id.replace('#', '');
      await el.screenshot({ path: `./playwright-audit/new-${name}.png` });
      console.log('OK', name);
    } else {
      console.log('NOT FOUND', id);
    }
  }

  // Also full home
  await page.screenshot({ path: './playwright-audit/new-home.png', fullPage: true });
  console.log('OK home full');

  // Product page
  await page.goto('http://localhost:3010/producto/bot-tickets-1-mes', { waitUntil: 'networkidle' });
  await page.screenshot({ path: './playwright-audit/new-producto.png', fullPage: true });
  console.log('OK producto');

  // Cart
  await page.goto('http://localhost:3010/carrito', { waitUntil: 'networkidle' });
  await page.screenshot({ path: './playwright-audit/new-carrito.png', fullPage: true });
  console.log('OK carrito');

  await browser.close();
})();
