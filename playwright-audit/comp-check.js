const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3010/', { waitUntil: 'networkidle' });
  const comp = await page.$('#comparativa');
  if (comp) {
    const html = await comp.innerHTML();
    // Get first 800 chars to see structure
    console.log(html.substring(0, 800));
  } else {
    console.log('not found');
  }
  await browser.close();
})();
