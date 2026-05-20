const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const info = await page.evaluate(() => {
    const section = document.querySelector('#proveedores');
    const card = section?.querySelector('a > div');
    const h2 = section?.querySelector('h2');
    const grid = section?.querySelector('.grid');
    return {
      sectionPadding: section ? window.getComputedStyle(section).padding : null,
      sectionClass: section?.className,
      h2Margin: h2 ? window.getComputedStyle(h2).marginBottom : null,
      gridGap: grid ? window.getComputedStyle(grid).gap : null,
      cardPadding: card ? window.getComputedStyle(card).padding : null,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
