const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3004/', { waitUntil: 'networkidle' });
  const el = await page.$('#packs');
  if (el) {
    await el.screenshot({ path: './playwright-audit/v2-packs.png' });
    console.log('OK packs');
  } else {
    await page.screenshot({ path: './playwright-audit/v2-packs-fullpage.png', fullPage: true });
    console.log('section not found, full page saved');
  }
  await browser.close();
})();
