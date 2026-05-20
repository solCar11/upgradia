const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3004/', { waitUntil: 'networkidle' });
  const faq = await page.$('#faq');
  if (faq) {
    // Get the HTML of the FAQ section to inspect
    const html = await faq.innerHTML();
    console.log(html.substring(0, 2000));
  } else {
    console.log('not found');
  }
  await browser.close();
})();
