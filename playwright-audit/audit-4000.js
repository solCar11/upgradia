const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4000/', { waitUntil: 'networkidle' });

  const sections = ['#faq', '#comparativa', '#valoraciones', '#packs'];
  for (const id of sections) {
    const el = await page.$(id);
    if (el) {
      const name = id.replace('#', '');
      await el.screenshot({ path: `./playwright-audit/v3-${name}.png` });
      console.log('OK', name);
    } else {
      console.log('NOT FOUND', id);
    }
  }
  await page.screenshot({ path: './playwright-audit/v3-home.png', fullPage: true });
  console.log('OK home');

  await page.goto('http://localhost:4000/carrito', { waitUntil: 'networkidle' });
  await page.screenshot({ path: './playwright-audit/v3-carrito.png', fullPage: true });
  console.log('OK carrito');

  await page.goto('http://localhost:4000/producto/bot-tickets-1-mes', { waitUntil: 'networkidle' });
  await page.screenshot({ path: './playwright-audit/v3-producto.png', fullPage: true });
  console.log('OK producto');

  await browser.close();
})();
