const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3004/', { waitUntil: 'networkidle' });

  const sections = ['#faq', '#comparativa', '#valoraciones', '#packs'];
  for (const id of sections) {
    const el = await page.$(id);
    if (el) {
      const name = id.replace('#', '');
      await el.screenshot({ path: `./playwright-audit/v2-${name}-new.png` });
      console.log('OK', name);
    } else {
      console.log('NOT FOUND', id);
    }
  }

  // Also capture carrito
  await page.goto('http://localhost:3004/carrito', { waitUntil: 'networkidle' });
  await page.screenshot({ path: './playwright-audit/v2-carrito-new.png', fullPage: true });
  console.log('OK carrito');

  await browser.close();
})();
