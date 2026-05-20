const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3010/', { waitUntil: 'networkidle' });
  const h2 = await page.$('#faq h2');
  if (h2) {
    const styles = await h2.evaluate(el => {
      const cs = getComputedStyle(el);
      return {
        fontFamily: cs.fontFamily,
        color: cs.color,
        fontSize: cs.fontSize,
        className: el.className,
        text: el.textContent
      };
    });
    console.log(JSON.stringify(styles, null, 2));
  }
  await browser.close();
})();
