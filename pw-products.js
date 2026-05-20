const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 6400 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'pw-products-now.png',
    clip: { x: 0, y: 0, width: 390, height: 900 }
  });
  console.log('OK');
  await browser.close();
})();
