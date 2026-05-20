const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3010/', { waitUntil: 'networkidle' });
  const faq = await page.$('#faq');
  if (faq) {
    const html = await faq.innerHTML();
    // Check if lucide svg or ▼ triangle
    console.log(html.includes('lucide-chevron') ? 'OLD: lucide chevron' : 'NEW: no lucide');
    console.log(html.includes('▼') ? 'NEW: has triangle ▼' : 'OLD: no triangle');
    await faq.screenshot({ path: './playwright-audit/v2-faq-3010.png' });
  }
  await browser.close();
})();
