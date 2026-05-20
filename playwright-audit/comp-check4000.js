const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4000/', { waitUntil: 'networkidle' });
  const comp = await page.$('#comparativa');
  if (comp) {
    const html = await comp.innerHTML();
    console.log(html.includes('section-title') ? 'OLD build' : 'NEW build');
    console.log(html.substring(200, 600));
  }
  await browser.close();
})();
